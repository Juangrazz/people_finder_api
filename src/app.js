const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const config = require('./config/keys.js');

const app = express();

app.set('port', config.PORT);

app.use(cors({ origin: config.SERVER }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/server/cards", require('./routes/cards.routes'));
app.use("/server/admin", require('./routes/admin.routes'));
app.use("/server/auth", require('./routes/auth.routes'));

app.use(express.static('public'));

module.exports = app;