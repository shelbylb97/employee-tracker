INSERT INTO department (name)
VALUES ("Development"),
       ("Sales"),
       ("Support"),
       ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Developer", 200, 1),
       ("Sales Manager", 150, 2),
       ("Support Lead", 100, 3),
       ("HR Director", 150, 4),
       ("Full-Stack Developer", 75, 1);

       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eric", "Forman", 1, NULL),
       ("Micheal", "Kelso", 2, NULL),
       ("Steven", "Hyde", 3, NULL),
       ("Jackie", "Burkhart", 4, NULL),
       ("Donna", "Pinciotti", 5, 1);