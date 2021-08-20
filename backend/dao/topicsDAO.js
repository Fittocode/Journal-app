let topics

export default class TopicsDAO {
    static async injectDB(conn) {
        if (topics) {
            return
        }
        try {
            topics = await conn.db(process.env.TOPICS_NS).collection("Topics")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in topicsDAO: ${e}`
            )
        }
    }

    static async getTopics({
        filters = null,
        page = 0,
        topicsPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if ('topicTitle' in filters) {
                query = { 'topicTitle': { $eq: filters['topicTitle'] } }
            } else if ('date' in filters) {
                query = { 'entries.date': { $eq: filters['date'] } }
            } else if ('tags' in filters) {
                query = { "entries.tags": { $eq: filters["tags"] } }
            } else if ('text' in filters) {
                query = { "entries.text": { $eq: filters["text"] } }
            }
        }

        let cursor

        try {
            cursor = await topics
                .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { topicsList: [], totalNumTopics: 0 }
        }

        const displayCursor = cursor.limit(topicsPerPage).skip(topicsPerPage * page)

        try {
            const topicsList = await displayCursor.toArray()
            const totalNumTopics = await topics.countDocuments(query)

            return { topicsList, totalNumTopics }
        } catch (e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`)
            return { topicsList: [], totalNumTopics: 0 }
        }
    }

}
