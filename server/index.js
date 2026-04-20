const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const connectDB = require('./config/db')
connectDB();

const authRoutes = require('./routes/authRoutes')
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
    res.send("API is running...")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT}`)
})

