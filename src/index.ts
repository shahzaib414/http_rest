import express from 'express'
import router from './routes'
import { json } from 'body-parser'
import { LocationProperties } from './types';
const app = express()
app.use(json());

app.use(router);

export const RidersLocationHistoryTable = new Map<string, LocationProperties[]>()

app.listen(process.env.PORT, function () {
  console.log('app listening on port 8081!')
})
