const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const index = require('./routes/index');

const myData = require('./seed/product-seeder');

const app = express();

mongoose
	.connect('mongodb+srv://urbanweb:ggguuu@urbanweb-n0ifq.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.set('views', path.join(__dirname, '/views/'))
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'layouts', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.use('/', index);

app.listen(3000, () => console.log('server running on port 3000'));
