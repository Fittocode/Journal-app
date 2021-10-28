import app from "./server.js"
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import TopicsDAO from "./dao/topicsDAO.js"
import EntriesDAO from './dao/entriesDAO.js'
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.TOPICS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewURLParser: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await TopicsDAO.injectDB(client)
        await EntriesDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })