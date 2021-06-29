CREATE USER 'user'@'127.0.0.1' IDENTIFIED WITH mysql_native_password BY 'pass';
CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'pass';
GRANT ALL ON *.* TO 'user'@'127.0.0.1' WITH GRANT OPTION;
GRANT ALL ON *.* TO 'user'@'%' WITH GRANT OPTION;

CREATE DATABASE test;

USE test;
CREATE TABLE mq (
    id int NOT NULL AUTO_INCREMENT,
    msg TEXT,
    date TEXT,
    PRIMARY KEY (id)
);
ALTER USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password by 'pass';