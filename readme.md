# LiFeBot

## Table of Contents

- [Installing the bot](#install)
- [Finding your Bot Token](#find-your-bot-token)
- [Finding your Bot ID](#find-your-bot-id)
- [Inviting your Bot](#invite-your-bot)
- [Installing NodeJS/npm](#install-nodejs/npm)
- [Updating NodeJS](#update-nodejs)
- [Updating npm](#update-npm)
- [Installing git](#install-git)

## Install

Before you follow this, make sure you use [NodeJS](#install-nodejs/npm) version 16.6.0 or higher and [npm](#install-nodejs/npm) version 8 or higher. You can check the versions of both by running `npm version`

- `git clone https://github.com/LIFEBOTDEV/LiFeBot.js.git`
- `cd LiFeBot.js`
- `npm install`
- `echo "BOT_TOKEN=<YOUR TOKEN>" >> .env ; echo "CLIENTID=<YOUR CLIENT ID>" >> .env`
- `node deploy-commands.js`
- `node LiFeBot.js`

## Find your Bot Token
- Go tho the [Discord developer portal](https://discord.com/developers/applications)
- Click on `New Application`, give your bot a name and click on `Create`
- On the left side, click on `Bot`
- Click on `Add Bot`
- Now, you should see a new `Build-A-Bot` section. In the `Token` section of this, click on `Copy`. 

NOTE: Do not share this token with anyone!

## Find your Bot ID

  Make sure that you share a server with the bot you created. If this is not the case, go to the [invite](#invite-your-bot) section.

- Enable the developer mode in Discord. Go to Settings > Advanced and enable it there
- Right click the bot in the server list
- Click on `Copy ID`

## Invite your Bot

  Make sure that you have already created a bot application. If not, follow the steps under [Find the Bot Token](#find-your-bot-token).

- Go to the [Discord developer portal](https://discord.com/developers/applications) and click on your application (bot)
- On the left side, click on `OAuth2`
- Scroll down to the `Scopes` section
- Select `bot` and `application.commands`
- Scroll down a bit more to the `Bot Permissions` section
- Select `Administrator`
- Go back to the `Scopes` section and click on `Copy`
- Now paste the copied url into a new tab and add the bot to your server

## Install NodeJS/NPM

- Go to the [NodeJS Website](https://nodejs.org/en/) and download the current version
- Install the downloaded file. This includes npm

## Update NodeJS
If you have an older version of NodeJS you can update it. If you are on a windows machine, use all commands without a sudo and execute the terminal with administrator permissions.
- `npm cache clean -f`
- `sudo npm install -g n`
- `sudo n latest`

## Update npm
### macOS/Linux
- `sudo npm install -g npm@latest`

### Windows
- Please follow the [official npm guide for Windows](https://docs.npmjs.com/try-the-latest-stable-version-of-npm#upgrading-on-windows)

## Install Git on Windows
- Head to the [official git website](https://git-scm.com/download/win) and download the windows installer
- Install the downloaded file
- Start the git bash terminal instead of cmd and use it to perform git commands