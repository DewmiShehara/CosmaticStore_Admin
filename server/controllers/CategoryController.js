const CategoryModel = require('../models/CategoryModel');

// create category
const CreateCategory = async (req, res) => {
    console.log("req::> ", req.body)
    try {
        const CategoryCreate = new CategoryModel({
            categoryName: req.body.CategoryName
        })

        return await CategoryCreate.save().then((value) => {
            return res.status(200).json({ ID: value._id });
        }).catch((err) => {
            return res.status(500).json({ err })
        })
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

module.exports = {
    CreateCategory
}