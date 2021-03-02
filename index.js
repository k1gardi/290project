const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.set('port', 3000);

app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs')

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
	res.render('home')

});

app.get('/hobbies', (req, res) => {
	res.render('hobbies')
});

app.get('/health', (req, res) => {
	res.render('health')
});

app.get('/contact', (req, res) => {
	res.render('contact')
});

app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});



app.listen(app.get('port'), () => {
	console.log(`Express started on http://localhost:${app.get('port')}; Ctrl+C to terminate`)
})