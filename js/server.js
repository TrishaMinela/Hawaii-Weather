const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 

const app = express();
const PORT = 3000;

// Serve static files from the "html" directory
app.use(express.static(path.join(__dirname, '../'))); 

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hawaiiWeatherReports');

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../html/home.html'));
});

// Additional routes for other HTML files
app.get('/honolulu', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../html/honolulu.html'));
});

app.get('/lahaina', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../html/lahaina.html'));
});

app.get('/kona', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../html/kona.html'));
});

app.get('/report', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../html/report.html'));
});

// Report schema
const reportSchema = new mongoose.Schema({
    fname: String,
    email: String,
    phone: String,
    zcode: Number,
    stormDate: Date,
    stormType: String,
    regions: String,
    indanger: String,
    comments: String,
});

const Report = mongoose.model('Report', reportSchema);

// POST endpoint for reports
app.post('/reports', async (req, res) => {
    const report = new Report(req.body);
    await report.save();
    res.status(201).send(report);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
