const mysqlServer = require('mysql')
const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ralgar162',
  database: 'restful_ws'
})

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)
  rejectFunction({ error: msg })
}

const categoryModule = require('./categories')({ connection, errorHandler })
//const productsModule = require('./products')({ connection, errorHandler })

module.exports = {
  categories: () => categoryModule
  //products: () => productsModule
}
