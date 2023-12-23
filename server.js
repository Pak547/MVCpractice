const express = require('express');
const app = express();
const port = 3001 || process.env.PORT;


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`listening on port ${port}!`));
