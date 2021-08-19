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
}