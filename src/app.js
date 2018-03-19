import express from "express"
import bodyParser from "body-parser"
import compression from "compression"

import server_api from "./serverAPI"
const whitelist: Array<string> = require ("../config/whitelist").default

const app = express ()

const allowCrossDomain = (req, res, next) => {
  res.header ("Access-Control-Allow-Origin", whitelist)
  res.header ("Access-Control-Allow-Methods", "GET, POST")
  res.header ("Access-Control-Allow-Headers", "Content-Type")
  next ()
}

// eslint-disable-next-line no-undef
app.set ("port", process.env.PORT || 7777)
app.use (compression ())
app.use (allowCrossDomain)
app.use (bodyParser.json ())
app.use (bodyParser.urlencoded ({ "extended": true }))
app.enable ("trust proxy")

app.post ("/", server_api.handleRequest)

export default app
