import express from 'express'
import { addCategory, updateCategory, showCategory, deleteCategory, getAllCategory } from '../controllers/Category.controller.js';
import { onlyadmin } from '../middleware/onlyadmin.js';

const CategoryRoute = express.Router()

// Protected
CategoryRoute.post('/add', onlyadmin, addCategory)
CategoryRoute.put('/update/:categoryid', onlyadmin, updateCategory)
CategoryRoute.get('/show/:categoryid', onlyadmin, showCategory)
CategoryRoute.delete('/delete/:categoryid', onlyadmin, deleteCategory)

// Public
CategoryRoute.get('/all-category', getAllCategory)

export default CategoryRoute