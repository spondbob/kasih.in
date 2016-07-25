FROM ruby:2.3.1

MAINTAINER spondbob spondbob@eamca.com

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev curl #node nodejs
#RUN ln -s /usr/bin/nodejs /usr/bin/node #if using nodejs instead of nodejs-legacy
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && apt-get install nodejs -y && apt-get clean

# Install & cache gems
COPY Gemfile /tmp/Gemfile
COPY Gemfile.lock /tmp/Gemfile.lock
WORKDIR /tmp
RUN bundle install

# Install & cache modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm i webpack webpack-dev-server -g && npm install && npm install --only=dev

# Add base code & node modules to app
ENV app /var/app
RUN mkdir -p $app && cp -a /tmp/node_modules $app
WORKDIR $app
ADD . $app

# Run webpack
CMD webpack-dev-server --config webpack.hot.config.js --hot --progress --inline --host=0.0.0.0