import express from 'express';
import './services/mongoConnect';
import reportsRouter from './container/reports/reports.router';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/v1/reports', reportsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));