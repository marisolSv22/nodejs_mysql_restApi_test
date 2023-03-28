CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employees (
    id int(11) not null auto_increment,
    name varchar(45) default null,
    salary int(5) default null,
    primary key (id)
);

INSERT INTO employees values (1, 'Victor', 30000), 
							 (2, 'Claudia', 12000), 
                             (3, 'Guillermo', 9000), 
                             (4, 'Alejandro', 15000),
                             (5, 'Martha', 11000); 
                             
SELECT * FROM employees;
