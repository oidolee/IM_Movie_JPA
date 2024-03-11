create database IM_Movie;
use IM_Movie;

alter database IM_Movie default character set utf8; -- 데이터베이스[db] 한글 안깨지게 처리
alter table IM_Customer convert to character set utf8; -- 테이블 한글 안깨지게 처리

show grants; -- 권환 확인

drop table IM_Customer;

CREATE TABLE IM_Customer(
    IC_No              INTEGER            AUTO_INCREMENT PRIMARY KEY,
    IC_Email           VARCHAR(50)    NOT NULL,
    IC_Name            VARCHAR(20)    NOT NULL,
    IC_Password        VARCHAR(30)    NOT NULL,
    IC_Hp              VARCHAR(20)    NOT NULL,
    IC_Birthday        DATE           NOT NULL,
    IC_Address         VARCHAR(100)   NOT NULL,
    IC_Regdate         DATE           DEFAULT CURDATE(),
    IC_Show            VARCHAR(1)     DEFAULT 'y'
);

INSERT INTO IM_Customer(IC_Email, IC_Name, IC_Password, IC_Hp, IC_Birthday, IC_Address)
VALUES('57', '55', '55', '010', '2024-05-15','서울시 강남구');


commit;

select * from IM_Customer;


