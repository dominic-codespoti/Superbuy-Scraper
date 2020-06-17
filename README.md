# Superbuy Scraper
This combination of a Flask Server and React Client passively scrapes the Superbuy live purchase feed and categorizes it using a ML model, dynamically injecting it into the appropriate table.

![Examples](https://i.imgur.com/dadGP0D.gif)

## Flask Socket.IO Server

To start this, run ``docker-compose up --build flask`` from the root directory of the project. This flask application uses BeautifulSoup to continously scrape the Superbuy live purchase feed, and then URLlib to download the image, which is then ran against the ML model to make a prediction as to which category the clothing belongs too. A JSON object containing information regarding the items name, price, image url, link and classification is then emitted through the open socket to the client.

## Web Socket.IO Client

To start this, run ``docker-compose up --build web`` from the root directory of the project. This react client continously polls the socket connection for any emitted messages, which it then grabs and appends to its internal state, updating the prop within the table component, which allows it to dynamically add too the react-tab matching the items classification.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Training Model

The model was trained using the ImageAI python library, which leveraged the ResNet algorithm. The training data was a customized version of a [DeepFashion 2](https://github.com/switchablenorms/DeepFashion2) dataset, which I compressed down into a set of 6 classes. The testing data was pulled manually from multiple image sources. Currently, the model will make predictions within the following set of classes:

{
    "0" : "Crewnecks",
    "1" : "Outerwear",
    "2" : "Pants",
    "3" : "Shorts",
    "4" : "Top"
}

