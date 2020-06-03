FROM tiangolo/uwsgi-nginx-flask:python3.7

WORKDIR /app
RUN curl -k -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
RUN apt-get update
RUN apt-get install -y libglib2.0-0 libnss3 libgconf-2-4 libfontconfig1
RUN apt-get -y install google-chrome-stable
RUN wget -N https://chromedriver.storage.googleapis.com/83.0.4103.39/chromedriver_linux64.zip -P ~/
RUN unzip ~/chromedriver_linux64.zip -d ~/
RUN rm ~/chromedriver_linux64.zip
RUN mv -f ~/chromedriver /usr/local/bin/chromedriver
EXPOSE 8080