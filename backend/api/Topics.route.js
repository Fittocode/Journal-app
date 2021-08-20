import express from 'express'
import TopicsCtrl from './topics.controller.js'
import EntriesCtrl from './entries.controller.js'

const router = express.Router()

router.route('/').get(TopicsCtrl.apiGetTopics)

router
    .route('/entry')
    .post(EntriesCtrl.apiPostEntry)
    .put(EntriesCtrl.apiUpdateEntry)
    .delete(EntriesCtrl.apiDeleteEntry)

export default router