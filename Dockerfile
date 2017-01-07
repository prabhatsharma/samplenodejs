FROM google/nodejs
MAINTAINER Prabhat Sharma
COPY . /app
CMD echo "NodeJS container started"
EXPOSE 8080
CMD node /app/app.js
# CMD ["nodejs", "/opt/app/app.js"]
