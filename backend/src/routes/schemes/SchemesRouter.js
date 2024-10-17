const express = require('express');
const SchemeController =require("./SchemesController");

const SchemeRouter = express.Router();


SchemeRouter.post('/', SchemeController.createScheme);
SchemeRouter.get('/', SchemeController.getAllSchemes);

module.exports = SchemeRouter;