const express = require('express')
const multer = require("multer");
const fs = require('fs');
const path = require('path');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = express.Router();

router.post("/cfood", upload.single("image"), async (req, res) => {
    try {
        const { name, category, calories, fat, carbs, protein } = req.body;
        const file = req.file;

        const newFood = {
            name: name,
            category: category,
            calories: calories,
            fat: fat,
            carbs: carbs,
            protein: protein
        };

        if (file) {
            newFood.image = {
                data: file.buffer,
                contentType: file.mimetype,
            };
        }

        const dataFilePath = path.resolve(__dirname, '..', 'components', 'temp.json');

        console.log(dataFilePath);
        let foodItems = [];
        try {
            const rawData = fs.readFileSync(dataFilePath);
            foodItems = JSON.parse(rawData);
        } catch (error) {
            console.error('Error reading data file:', error);
        }

        foodItems.push(newFood);

        try {
            fs.writeFileSync(dataFilePath, JSON.stringify(foodItems, null, 2));
            res.status(201).json({ message: 'Food item added successfully!' });
        } catch (error) {
            console.error('Error writing data file:', error);
            res.status(500).json({ error: 'Failed to add food item.' });
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router