const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const express = require('express');

//port
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());