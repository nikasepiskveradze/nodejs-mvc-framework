import db from '../core/bootstrap';

db.selectAll('todos').then((todos) => {
  console.log('todos', todos);
});
