import EntriesDAO from "../dao/entriesDAO.js";

export default class EntriesController {
    static async apiPostEntry(req, res, next) {
        try {
            const topicId = req.body.topic_id
            const entry = req.body.text
            const userInfo = {
                name: req.body.name,
                _id: req.body.user_id
            }
            const date = new Date()

            const entryResponse = await EntriesDAO.addEntry(
                topicId,
                userInfo,
                entry,
                date
            )
            res.json({ status: 'success' })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiUpdateEntry(req, res, next) {
        try {
            const entryId = req.body.entry_id
            const text = req.body.text
            const date = new Date()

            const entryResponse = await EntriesDAO.updateEntry(
                entryId,
                req.body.user_id,
                text,
                date,
            )

            var { error } = entryResponse
            if (error) {
                res.status(400).json({ error })
            }

            if (entryResponse.modifiedCount === 0) {
                throw new Error(
                    'Unable to update entry - user may not be original poster'
                )
            }

            res.json({ status: 'success' })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiDeleteEntry(req, res, next) {
        try {
            const entryId = req.query.id
            const userId = req.body.user_id
            console.log(entryId)
            const entryResponse = await EntriesDAO.deleteEntry(
                entryId,
                userId,
            )
            res.json({ status: 'success' })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}