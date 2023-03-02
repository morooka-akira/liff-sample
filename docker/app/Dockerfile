FROM ruby:3.2.0

ENV APP_ROOT /myapp
ENV BUNDLER_VERSION 2.3.15

WORKDIR $APP_ROOT

COPY backend/Gemfile $APP_ROOT/Gemfile
COPY backend/Gemfile.lock $APP_ROOT/Gemfile.lock

# bundlerのバージョンをGemfile.lockに合わせる
RUN gem uninstall bundler
RUN gem install bundler -v ${BUNDLER_VERSION}
RUN bundle install

COPY . $APP_ROOT

# Add a script to be executed every time the container starts.
COPY /docker/app/entrypoint.sh /usr/bin/

RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
