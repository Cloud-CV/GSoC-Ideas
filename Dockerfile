# Dockerfile for CloudCV GSoC-Ideas development environment
FROM jekyll/jekyll:4.2.2

# Set working directory
WORKDIR /srv/jekyll

# Copy Gemfile
COPY Gemfile* ./

# Install dependencies
RUN bundle install

# Expose Jekyll server port
EXPOSE 4000

# Default command
CMD ["jekyll", "serve", "--force_polling", "--livereload"]
