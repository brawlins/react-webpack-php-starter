# react-webpack-php-starter

This is a boilerplate React application that I use to start new projects. It uses webpack to build the JavaScript bundle file and PHP for the back-end API. Inspired by [Christian Alfoni's ultimate webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup).

## Overview

React apps are often served using a node server like Express. However, in my case I wanted to use Apache because we use PHP to manage user authentication via the [Central Authentication Service (CAS)](http://jasig.github.io/cas/). I know there are packages that theoretically can make Express serve PHP, but it was easier to just use our existing Apache server. 

This happens to be my specific use case at the moment, but this project could easily be adapted to use a node server instead.

## Goals

I wanted a setup that would enable the following features:

* Bundling and minification using webpack
* ECMAScript 2015 (ES6) syntax via Babel
* Linting
* Separate builds for development and production
* Bootstrap styles
* SVG icons
* Routing and history without the hash
* PHP index file and back-end API
* Automatic browser reloading

I was able to achieve all except browser reloading. Still working on that. 

## Directory Structure

The project is structured like this:

* /public (web root)
    - /api (back-end API in PHP)
    - /build (built code)
    - index.php
* /src (source code that needs to go through the build process)
    - /components (React components)
    - /css
    - /svg
    - constants.js (application-wide variables)
    - main.js (the webpack entry file)
* .gitignore
* package.json
* README.md
* webpack-production.config.js
* webpack-config.js

The `build` directory is where the webpack output files go. This directory is ignored by git.

## Server Setup

Configure the server to do the following:

* Serve files from the `public` folder
* Redirect all requests to `index.php`

The redirect is necessary because this setup uses browser history rather than the default hash history. This makes URLs cleaner ("/about" instead of "/#/about"), but it also means that the server must be configured to handle the real URL. When you hit refresh the server will get a request for "/about" which doesn't actually exist (it's a single page app). It needs to direct all requests to the index file so that the JavaScript can load the appropriate component for that route.

## Builds

The "scripts" section of the `package.json` file contains the build scripts. When you first checkout the project you'll need to run `npm install` to get all the node modules used. 

For development type:

    npm start

The development build runs webpack in watch mode. Whenever you save changes to a file in the `src` folder it rebuilds the bundle. 

For production type: 

    npm run build

The production build deletes the `build` folder and rebuilds the bundle using the settings in `webpack-production.config.js`. Code gets minified and console logs get stripped out. 
