FROM node:latest

# RUN npm install -g kittik-cli

RUN mkdir /vswd2017

COPY LICENSE /vswd2017/
COPY README.md /vswd2017/
COPY package*.json /vswd2017/
COPY *.js /vswd2017/
COPY *.png /vswd2017/
COPY *.sh /vswd2017/
COPY imgcat /vswd2017/

WORKDIR /vswd2017
RUN npm install

CMD ./presentation.sh