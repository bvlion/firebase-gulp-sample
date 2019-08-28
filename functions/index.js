const functions = require('firebase-functions')
const express = require('express')
const bodyParser = require("body-parser")
const session = require("express-session")
const path = require('path')
const FirebaseStore = require('connect-session-firebase')(session)
 
const app = express()

const admin = require('firebase-admin')
const serviceAccount = require('./firebase-gulp-sample-firebase-adminsdk.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firebase-gulp-sample.firebaseio.com"
})
const db = admin.database()

app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  store: new FirebaseStore({
    database: db
  }),
  name: '__session',
  secret: 'firebase-gulp-sample',
  resave: false,
  saveUninitialized: false,
  rolling : true,
  cookie: {
    maxAge: 3 * 24 * 60 * 60 * 1000
  },
}))

// TODO routers

app.use((_, res, _) => {
  res.status(404).render('404.html')
})

exports.app = functions.https.onRequest(app)