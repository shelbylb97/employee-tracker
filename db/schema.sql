-- employee db
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

-- for tables 


-- departments: id, name
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);


-- role: id, title, salary, department_id (ref dep from dep table)
CREATE TABLE role (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(30) NOT NULL,
 salary DECIMAL NOT NULL,
 department_id INT,
 FOREIGN KEY (department_id)
 REFERENCES department(id)
 ON DELETE SET NULL
);


-- employee: id, first name, last name, role_id, mananger_id (foriegn key)
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);