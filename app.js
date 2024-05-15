import express from 'express';
import {compile} from 'boxwood';

const app = express();
app.set('views', './views');

app.engine('js', (filePath, options, callback) =>
  compile(filePath)
    .then(({ template }) => callback(null, template(options)))
    .catch((err) => callback(err))
);
           
app.set('view engine', 'js'); 

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello Boxwood' });
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
