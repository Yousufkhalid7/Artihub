const express = require('express')
const router = express.router()

const { createProject, getProject} = require('../controllers/projectController')
const protect = require('../middleware/authMiddleware')
const authorizeRoles = require('../middleware/roleMiddleware')

route.post('/', protect, authorizeRoles('freelancer'), createProject);
route.get('/', getProject);

module.exports = router();

