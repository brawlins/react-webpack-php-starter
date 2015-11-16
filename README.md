# react-webpack-php-starter

This is a boilerplate React application that I use to start new projects. It uses webpack to build the JavaScript bundle file and PHP for the back-end API. Inspired by [Christian Alfoni's ultimate webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup).

## Overview

React apps are often served using a node server like Express. However, in my case I wanted to use Apache because we use PHP to manage user authentication. I know there are packages that theoretically can make Express serve PHP, but it was easier to just use our existing Apache server. 

This happens to be my specific use case at the moment, but this project could easily be adapted to use a node server instead.

## Goals

I wanted a setup that would enable the following features:

* Bundling and minification using webpack
* ECMAScript 2015 (ES6) syntax via Babel
* Linting
* Separate builds for development and production
* Bootstrap styles
* SVG icons
* PHP index file and back-end API
* Automatic browser reloading using Browsersync

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
    - history.js (browser history as separate module)
    - main.js (the webpack entry file)
* .gitignore
* package.json
* README.md
* webpack-production.config.js
* webpack-config.js

The `public` directory is the web root. Configure the server to serve files from there. The `build` directory is where the webpack output files go. This directory is ignored by git.

## Builds

The "scripts" section of the `package.json` file contains the build scripts. When you first checkout the project you'll need to run `npm install` to get all the node modules used. 

For development type:

    npm start

The development build runs webpack in watch mode. Whenever you save changes to a file in the `src` folder it rebuilds the bundle. 

For production type: 

    npm run build

The production build deletes the `build` folder and rebuilds the bundle using the settings in `webpack-production.config.js`. Code gets minified and console logs get stripped out. 
