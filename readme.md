# Raganork-MD



<p align="center">

  <a href="https://raganork.site">

    <img src="https://i.ibb.co/QL4BQQ6/Untitled-1.png" alt="Get Session" width="300"/>

  </a>

</p>



A lightweight WhatsApp bot framework with multi-session support and extensive configuration options. Complete rewrite of the original Raganork project for better stability and performance.



## Get Started



#### 1. Get Your Session String 



<p align="center">

  <a href="https://raganork.site">

    <img src="https://i.ibb.co/fVWcycPc/get-session.png" alt="Get Session" width="200"/>

  </a>

</p>



**Important for Cloud Deployments:** If you're deploying on platforms like Render, Koyeb, Railway, or similar cloud services, you'll need a `DATABASE_URL` (PostgreSQL) for persistent storage. VPS deployments can use local file storage.



#### 2. Deploy and setup your bot 



<p align="center">

  <a href="https://raganork.site">

    <img src="https://i.ibb.co/fVsfPsjk/deploy-bot.png" alt="Get Session" width="200"/>

  </a>

</p>



## Features



* Lightweight and fast performance

* Single and multi-session capabilities

* Extensive plugin system

* Group management tools

* Media download functionality

* Excellent caching and session management



## Prerequisites



* Node.js (version 20 or higher)

* Git

* FFmpeg

* Yarn package manager

* PM2 (for process management)

* Database URL (postgreSQL - for cloud deployments)



## Installation



### Clone Repository



```bash

npm install -g yarn pm2

git clone https://github.com/souravkl11/raganork-md.git

cd raganork-md

### Install Dependencies

```bash

yarn install

```

### Configuration

Create a `.env` file in the root directory:

# Session Configuration



Single session:





# Database (Required for cloud platforms)

DATABASE_URL=your_database_url



#

npm start

```



## Process Management



```bash

# Stop bot

pm2 stop raganork-md



# Restart bot

pm2 restart raganork-md

```



## Commands



Default prefix: `.`



* `.list` – Show available commands

* `.ping` – Check response time

* `.restart` – Restart bot (sudo only)

* `.shutdown` – Stop bot (sudo only)

## 🚀 Deploy to Render



Click the button below to deploy Raganork-MD on Render with 1-click!



[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/satrangichutiya/raganork-md)

## 
