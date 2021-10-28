import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId

let entries

export default class EntriesDAO {
    static async injectDB(conn) {
        if (entries) {
            return
        }
        try {
            entries = await conn.db(process.env.TOPICS_NS).collection("Entries")
            console.log(entries)
        } catch (e) {
            console.log(`Unable to establish collection handles in userDAO: ${e}`)
        }
    }

    static async addEntry(topicId, user, text, date) {
        try {
            const entryDoc = {
                name: user.name,
                user_id: user._id,
                date: date,
                entry: text,
                topic_id: ObjectId(topicId),
            }
            return await entries.insertOne(entryDoc)
        } catch (e) {
            console.log(`Unable to post entry: ${e}`)
            return { error: e }
        }
    }

    static async updateEntry(entryId, userId, entry, date) {
        try {
            const updateResponse = await entries.updateOne(
                { user_id: userId, _id: ObjectId(entryId) },
                { $set: { entry: entry, date: date } },
            )
            return updateResponse
        } catch (e) {
            console.error(`Unable to update entry: ${e}`)
            return { error: e }
        }
    }

    static async deleteEntry(entryId, userId) {

        try {
            const deleteResponse = await entries.deleteOne({
                _id: ObjectId(entryId),
                user_id: userId,
            })

            return deleteResponse
        } catch (e) {
            console.error(`Unable to delete entry: ${e}`)
            return { error: e }
        }
    }
}