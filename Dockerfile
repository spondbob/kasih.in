FROM ruby:2.3.1

MAINTAINER spondbob spondbob@eamca.com

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs-legacy npm
#RUN ln -s /usr/bin/nodejs /usr/bin/node if using nodejs instead of nodejs-legacy
RUN npm i -g webpack webpack-dev-server

COPY Gemfile /tmp/Gemfile
COPY Gemfile.lock /tmp/Gemfile.lock
WORKDIR /tmp
RUN bundle install

ENV app /var/app
RUN mkdir -p $app
WORKDIR $app
ADD . $app

RUN npm install --only=dev