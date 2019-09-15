const translate = require('./src/translate')

process.env.GOOGLE_APPLICATION_CREDENTIALS = __dirname + '/config/credentials.json'

translate()