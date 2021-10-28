import express from 'express'
import TopicsCtrl from './topics.controller.js'
// import EntriesCtrl from './entries.controller.js'

const router = express.Router()

router
    .route('/').get(TopicsCtrl.apiGetTopics)
    .post(TopicsCtrl.apiPostTopic)
    .put(TopicsCtrl.apiUpdateTopic)
    .delete(TopicsCtrl.apiDeleteTopic)

export default router