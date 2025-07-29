const mongoose = require('mongoose');

const Category = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

// Export the model
const CategoryModel = mongoose.model("CategoryDetails", Category);

module.exports = CategoryModel;