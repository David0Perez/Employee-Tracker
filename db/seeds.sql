INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Accounting"),
       ("Human Resources"),
       ("Business Integrations");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 90000, 1),
       ("Sales Lead", 80000, 1),
       ("Sales Representative", 45000, 1),
       ("Accounting Manager", 85000, 2),
       ("Accounting Lead", 75000, 2),
       ("Accounting Representative", 40000, 2),
       ("HR Manager", 80000, 3),
       ("HR Lead", 70000, 3),
       ("HR Representative", 35000, 3),
       ("BI Manager", 120000, 4),
       ("Systems Administrator", 100000, 4),
       ("Application Administrator", 85000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "McClane", 1, NULL),
       ("Cookie", "Monster", 2, 1),
       ("Egon", "Spengler", 3, 1),
       ("Stay", "Puft", 4, NULL),
       ("Peter", "Venkman", 5, 4),
       ("Louis", "Tully", 6, 4),
       ("Ray", "Stantz", 7, NULL),
       ("M.F", "Jones", 8, 7),
       ("Beatrice", "Kiddo", 9, 7),
       ("Hattori", "Hanzo", 10, NULL),
       ("Ice", "Cube", 11, 10),
       ("Snoop", "Dogg", 12, 10);