import express from 'express'
import TopicsCtrl from './topics.controller.js'

const router = express.Router()

router.route('/').get(TopicsCtrl.apiGetTopics)

export default router