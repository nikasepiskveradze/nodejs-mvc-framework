import app from './core/Router';

app.get('/', 'PagesController@home');
app.get('/about', 'PagesController@about');
app.get('/contact', 'PagesController@contact');

app.listen(3000, () => {
  console.log('Server is running');
});
