import express from 'express'
import { addBlog, editBlog, updateBlog, deleteBlog, showAllBlog, getBlog, getRelatedBlog, getBlogByCategory, search, getAllBlogs } from '../controllers/Blog.controller.js';
import upload from '../config/multer.js';
import { authenticate } from '../middleware/authenticate.js';


const BlogRoute = express.Router()

// Protected
BlogRoute.post('/add', authenticate, upload.single('file'), addBlog)
BlogRoute.get('/edit/:blogid', authenticate, editBlog)
BlogRoute.put('/update/:blogid', authenticate, upload.single('file'), updateBlog)
BlogRoute.delete('/delete/:blogid', authenticate, deleteBlog)
BlogRoute.get('/get-all', authenticate, showAllBlog)

// Public
BlogRoute.get('/get-blog/:slug', getBlog)
BlogRoute.get('/get-related-blog/:category/:blog', getRelatedBlog)
BlogRoute.get('/get-blog-by-category/:category', getBlogByCategory)
BlogRoute.get('/search', search)

BlogRoute.get('/blogs', getAllBlogs)


export default BlogRoute