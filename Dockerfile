FROM ruby:2.3.1

MAINTAINER spondbob spondbob@eamca.com

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs npm

RUN mkdir -p /var/app
COPY Gemfile /var/app/Gemfile
COPY Gemfile.lock /var/app/Gemfile.lock
WORKDIR /var/app
RUN bundle install