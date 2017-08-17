const express = require('express');
const app = express();
const path = require('path');
const config = require('../../webpack.config');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const api = require('./api');
const config = require('../config');

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({extended: false``}));
app.use(bodyParser.json());
app.use(cookieParser());

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  saveUninitialized: true, // don't create session until something store,
  resave: false, // don't save session if unmodified
  secret: "eden-liu",
  key: 'auth_token',
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30}, // 30 days
  store: new MongoStore({
    url: config.dbURL
  })
}));

api.api(app);

import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match, createRoutes} from 'react-router';
