import express from "express"
import cors from "cors"
import topics from "./api/topics.route.js"
// import entries from "./api/entries.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/topics", topics)
// app.use("/api/v1/topics", entries)
app.use("*", (req, res) => res.status(404).json({ error: 'not found' }))

export default app