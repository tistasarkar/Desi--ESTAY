const express = require('express');
const router = express.Router();
const { approveArtisan } = require('../controllers/adminController');
const auth = require('../middleware/authMiddleware');

router.put('/approve-artisan/:artisanId', auth(['admin']), approveArtisan);

module.exports = router;
