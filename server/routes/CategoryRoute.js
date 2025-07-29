const express = require('express');
const CategoryController = require('../controllers/CategoryController');

const CategoryRoute = express.Router();

// create category
CategoryRoute.post('/createCategory', CategoryController.CreateCategory)


module.exports = CategoryRoute;
