FROM tiangolo/uwsgi-nginx-flask:python3.7

WORKDIR /app
ADD . /app
RUN apt-get update
RUN apt-get install -y libglib2.0-0 libnss3 libgconf-2-4 libfontconfig1
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install
RUN pip install -r requirements.txt
EXPOSE 8080
