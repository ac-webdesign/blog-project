const express = require('express')
const blogController = require('../controllers/blogController')
const router = express.Router()

//display all blogs
router.get('/', blogController.blog_index)

//blog send to database
router.post('/', blogController.blog_create_post)

//create form display
router.get('/create', blogController.blog_create_get)

//display specific blog
router.get('/:id', blogController.blog_details)

//delete specific blog
router.delete('/:id', blogController.blog_delete)


module.exports = router