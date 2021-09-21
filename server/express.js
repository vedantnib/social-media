import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
// modules for server side rendering
//end

//comment out before building for production
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

//comment out before building for production
devBundle.compile(app)

// parse body params and attache them to req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())
app.get('/',(req, res) => {
  res.status(200).send(Template());
});

app.use('/', userRoutes);
app.use('/', authRoutes);
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error": err.name + ": " + err.message})
  }
  else if (err) {
    res.status(400).json({"error": err.name + ": "+ err.message})
    console.log(err)
  }
})

// Catch unauthorised errors

export default app
