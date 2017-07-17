import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import usersSubRouter from './routes/users-router';
import messagesSubRouter from './routes/messages-router';

app.use('/users', usersSubRouter);
app.use('/messages', messagesSubRouter);

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

module.exports = app;