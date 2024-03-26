show databases;

use IM_Movie;

show tables;

-- IM_Customer 테이블 생성
CREATE TABLE IF NOT EXISTS IM_Customer (
    no INT AUTO_INCREMENT PRIMARY KEY,
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    hp VARCHAR(255),
    birthday DATE,
    address VARCHAR(255),
    regdate DATETIME,
    state VARCHAR(1),
    type VARCHAR(255),
    socialId VARCHAR(255),
    role VARCHAR(255),
    token VARCHAR(255)
);

-- IM_SocialCustomer 테이블 생성
CREATE TABLE IF NOT EXISTS IM_SocialCustomer (
    no INT AUTO_INCREMENT PRIMARY KEY,
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    hp VARCHAR(255),
    regdate DATETIME,
    state VARCHAR(1),
    type VARCHAR(255),
    socialId VARCHAR(255) NOT NULL,
    role VARCHAR(255)
);

SELECT * from IM_Customer;

SELECT * from IM_SocialCustomer;

Commit;
