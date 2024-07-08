const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/index.js');

router.use('/v1', v1ApiRoutes);

// if later we have developed version v2 of API
// router.use('/v2', v2ApiRoutes)

module.exports = router;