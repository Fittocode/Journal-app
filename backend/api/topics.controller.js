import { render } from "@testing-library/react";
import TopicsDAO from "../dao/topicsDAO.js";

export default class TopicsController {
    static async apiGetTopics(req, res, next) {
        const topicsPerPage = req.query.topicsPerPage ? parseInt(req.query.topicsPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if (req.query.date) {
            filters.date = req.query.date
        } else if (req.query.text) {
            filters.text = req.query.text
        } else if (req.query.topicTitle) {
            filters.topicTitle = req.query.topicTitle
        }

        const { topicsList, totalNumTopics } = await TopicsDAO.getTopics({
            filters,
            page,
            topicsPerPage
        })

        let response = {
            topics: topicsList,
            page: page,
            filters: filters,
            entries_per_page: topicsPerPage,
            total_results: totalNumTopics,
        }

        res.json(response)

    }

    static async apiPostTopic(req, res, next) {
        console.log(req)
        try {
            const topicId = req.body.topic_id
            const topicTitle = req.body.topicTitle
            const entries = req.body.entries

            const topicResponse = await TopicsDAO.addTopic(
                topicId,
                topicTitle,
                entries,
            )
            res.json({ status: 'success' })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiUpdateTopic(req, res, next) {
        try {
            const topicId = req.body.topic_id
            const topicTitle = req.body.topicTitle
            const entries = req.body.entries

            const topicResponse = await TopicsDAO.updateTopic(
                topicId,
                topicTitle,
                entries
            )

            var { error } = topicResponse
            if (error) {
                res.status(400).json({ error })
            }

            if (topicResponse.modifiedCount === 0) {
                throw new Error(
                    'Unable to update topic - user may not be original poster'
                )
            }

            res.json({ status: 'success' })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiDeleteTopic(req, res, next) {
        try {
            const topicId = req.body.id
            const topicResponse = await TopicsDAO.deleteTopic(
                topicId,
            )
            res.json({ status: 'success' })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}