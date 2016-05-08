FROM ruby:2.3.1

MAINTAINER bagus bagus.trihatmaja@gmail.com

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

WORKDIR /tmp
ADD kasih.in/Gemfile /tmp/
ADD kasih.in/Gemfile.lock /tmp/
RUN bundle install

RUN mkdir /myapp
ADD kasih.in /myapp
WORKDIR /myapp

RUN curl -L https://npmjs.org/install.sh | sh
RUN npm install webpack -g
