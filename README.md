<img src="http://i.imgur.com/xVK1lIj.png" alt="Slack Doorbell" style="width: 150px;"/>

# Slack Doorbell

Node.js-based service that forwards a text message to a Slack channel, using Twilio.

You've got a locked door and a busy event. You have a team that can open said door. Put them to use.


## 0. Download the code.

Make sure Node.js is installed.

In Terminal (Mac OS X / Linux), run
```sh
$ node --version
```

If you see an error, Node is not installed. You can install it through instructions at

https://github.com/joyent/node/wiki/Installation#installing-on-linux

or find a tutorial.

Then, really get the code, and install the application's dependencies.

```bash
$ git clone https://github.com/codeforboston/slack-doorbell
$ cd slack-doorbell
$ npm install
```

## 1. Set up an Incoming Webhook on Slack.

In Slack, find the Configure Integrations menu. Create a new Incoming Webhook integration, and set the channel, username, and icon. (We're using our '#door' channel, username 'Alfred', and a 'monkey' emoji.)

## 2. Set up Twilio.

After [getting a Twilio phone number](https://www.twilio.com/user/account/phone-numbers/search), in the settings for that number, go to Messaging. In "Request URL", add the URL of where your slack-doorbell server is running, and make sure the type is "HTTP POST".

![Add your URL and make sure the dropdown says 'HTTP POST'](http://i.imgur.com/h13TYpY.png)


## 3. Configure the application

For the service to work, the following environment variables need to be set:

```
SLACK_DOMAIN
SLACK_TOKEN
TWILIO_ACCOUNT_ID
TWILIO_AUTH_TOKEN
TWILIO_PHONE_NUMBER
```

You could just set these on your system.

#### If you have Docker

If you have Docker, you can set up a Docker image, and set environment variables in the Dockerfile. (This is maybe not best practice, but you can do it if you have a private repo available, or self-hosted Dockerhub registry.)

In your shell, change `Dockerfile.template` to `Dockerfile`.

```sh
$ mv Dockerfile.template Dockerfile
```

Edit `Dockerfile`, filling in the environment variables. To build the Docker image, run:

```sh
$ docker build --no-cache -t "YOUR_USERNAME/slack-doorbell" .
```

## 4. Run and test the service.

Then, to run the service on port 8080, do:

```sh
# Change the port number if you get an "address in use" error (EADDRINUSE).
$ PORT=8080 node index.js
```

Or, if you have Docker, run

```sh
$ docker run -it --rm -p 8080:8080 --name bell YOUR_USERNAME/slack-doorbell
```

Then, in another Terminal tab or window, to test the service, run
```sh
$ curl -X POST localhost:8080/ # or whatever port number you're using
```

You should see a pleasant message confirming the request, and see a mostly empty message in your Slack channel.

## 5. Deploy.

Instructions to come.

## 6. Subscribe

Set the channel topic so that it contains the text number. People __will__ need to refer to it.
Request that all your potential door-openers join your doorbell channel. In the channel menu (click the channel name), set your notifications to 