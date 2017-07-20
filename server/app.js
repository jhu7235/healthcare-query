const express = require( 'express');
const path = require( 'path' );

console.log('**INITIATES APP');
const app = express();
app.use(require('./middlewares/session'));
app.use(require('./middlewares/logging'));
app.use(require('./middlewares/bodyParser'));
app.use(require('./middlewares/passport'));
app.use('/api', require('./api'));
// app.get('/', function (req, res, next) {
//     res.sendFile(path.join(__dirname, './index.html'));
// });
app.use(require('./middlewares/statics'));
app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

var indexPath = path.join(__dirname, '..', 'client', 'index.html');
app.get('*', function (req, res) {
  console.log('SERVING UP FRONT END');
  res.sendFile(indexPath);
});


module.exports = app;
console.log('**INITIATES APP END');
