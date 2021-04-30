const express = require("express")
const cors = require("cors")
const { matches, teams } = require("./dataCountries.js")

const app = express()
app.use(cors())

const port = 8000
