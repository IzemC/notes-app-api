require('dotenv').config();

const express = require('express');

const port = process.env.PORT || 3500;

const notesRouter = require('./src/routers/notes.router');
const authRouter = require('./src/routers/auth.router');

const app = express();


app.use(express.json())



app.use('/api/notes', notesRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});