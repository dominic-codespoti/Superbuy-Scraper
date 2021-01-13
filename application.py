from model.predict import predict
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver

import eventlet
eventlet.monkey_patch()
import urllib.request
import os

from time import sleep
from threading import Thread, Event
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from bs4 import BeautifulSoup as soup
from flask import Flask
from flask_socketio import SocketIO

application = Flask(__name__)
socketio = SocketIO(application, cors_allowed_origins="*")
socketio.server_options

thread = Thread()
thread_stop_event = Event()

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("headless")
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument('--no-sandbox')
browser = webdriver.Chrome(ChromeDriverManager().install(),
                           options=chrome_options)
class Scraper(Thread):
    def __init__(self):
        self.delay = 1
        super(Scraper, self).__init__()

    def Scrape(self):
        while not thread_stop_event.isSet():

            url = "https://goat.pet/fr/sb/?spm=2101.892.N.N.df98185" # Site no longer works
            browser.get(url)

            try:
                myElem = WebDriverWait(browser, 10).until(
                    EC.presence_of_element_located((By.CLASS_NAME, 'productWrapper')))
                print("Page is ready!")
                html = browser.page_source
                browser.quit()
            except TimeoutException:
                print("Loading took too much time!")

            pageAsSoup = soup(html, 'html.parser')
            containers = pageAsSoup.findAll("a", {"class": "productWrapper"})

            for container in containers:
                json = createJsonFromContainer(container)
                print(json)
                socketio.emit('connect', json, namespace='/handle')
                sleep(self.delay)

    def run(self):
        self.Scrape()

def createJsonFromContainer(container):
    title_container = container.findAll("p", {"class": "title"})
    name = title_container[0].text

    price_container = container.findAll("span", {"class": "price"})
    price = price_container[0].text
    price = "¥ " + price

    link = container['href']

    image_container = container.findAll("img", {"class": "productImage"})
    image = image_container[0]['src']
    imageName = image.split("/")[-1]
    urllib.request.urlretrieve(image, imageName) #todo: delete photo after prediction

    classification = predict(imageName)

    return {
        "name": name,
        "price": price,
        "link": link,
        "image": image,
        "classification": classification #todo: add classification for "other"
    }


@socketio.on('connect', namespace='/handle')
def connect():
    global thread
    print('Client connected')
    if not thread.isAlive():
        print("Starting Thread")
        thread = Scraper()
        thread.start()


@socketio.on('disconnect', namespace='/handle')
def disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    socketio.run(application)
