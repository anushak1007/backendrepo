const Express=require('express')
const storyController=require('./story.controller')
const router= Express.Router()

router.post('/upload',storyController.uploadStory)

router.get('/getallstories',storyController.getStories)
//url segment (:) o append storyid dynamically
router.get("/getdetails/:storyid",storyController.getDetails)

module.exports=router
