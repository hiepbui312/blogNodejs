const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const route = require('./routes/web');

const app = express();
const port = 3000;

//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

//http logger
// app.use(morgan('combined'));
//extension express
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//web router
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});