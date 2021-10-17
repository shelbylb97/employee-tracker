const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const express = require('express');
//connect to db
const connection = require("./db/connection")

//port
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//run app
app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });


    const Menu = () => {
        return inquirer.prompt(
            [
          {
            type: 'list',
            message: 'Select Action:',
            name: 'menuChoice',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role'],
        }]
      
        ).then((answers) => {
          // console.log('testttt')
        
            if (answers.menuChoice === 'View All Departments') {
                deptViewer();
            }
            if (answers.menuChoice === 'View All Roles') {
                roleViewer();
                
            }
            if (answers.menuChoice === 'View All Employees') {
                emplViewer();
                
            }
            if (answers.menuChoice === 'Add A Department') {
                deptAdd()
                    .then((answers) => {
                    connection.query(`INSERT INTO department(name) VALUES(?)`, answers.name, (err, results) => {
                        Menu();
                      });
                  }).catch((err) => console.error(err))
                
            }
            if (answers.menuChoice === 'Add A Role') {
                roleAdd()
                    
            }
            if (answers.menuChoice === 'Add An Employee') {
                emplAdd()
                    
            }
            if (answers.menuChoice === 'Update An Employee Role') {
              emplUpdate()
                  
            }
            
        }).catch((err) => console.error(err))
      }
    
