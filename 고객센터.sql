
show databases;
use IM_Movie;
show tables;
select * from IM_STORE_ITEM;
SELECT * FROM IM_STORE_TICKETMAP;

-- 대관신청 테이블
DROP TABLE GROUP_BOARD CASCADE;
CREATE TABLE GROUP_BOARD(
    group_id            INT            AUTO_INCREMENT PRIMARY KEY,  -- 아이디(PK)
    c_email				VARCHAR(50)    NOT NULL,				-- 고객 메일(아이디값)
    group_loc           VARCHAR(50)    NULL,         			-- 영화관위치
    group_type          VARCHAR(50)    NOT NULL,        			-- 분류
    group_expeople      INT            NOT NULL,         			-- 예상인원
    group_date          DATE           NOT NULL,        			-- 희망일
    group_time1          INT            NOT NULL,        			-- 희망시간
    group_time2          INT            NOT NULL,        			-- 희망시간
    group_movtitle      VARCHAR(50)    NOT NULL,       			    -- 영화제목
    group_title         VARCHAR(50)    NOT NULL,        			-- 제목 
    group_con           LONGTEXT        NOT NULL,       			-- 내용 
    group_name          VARCHAR(50)    NOT NULL,        			-- 단체명 
    custo_name          VARCHAR(30)    NOT NULL,        			-- 신청고객명 
    custo_phone1         VARCHAR(30)    NOT NULL,       			-- 연락처 1
    custo_phone2         VARCHAR(30)    NOT NULL,       			-- 연락처 2
    custo_phone3        VARCHAR(30)    NOT NULL,       			    -- 연락처 3
    now_grdate           DATE			default current_timestamp,    -- 현재 등록 날짜
    gr_show             char(1)         default 'y'                 -- 답변완료 상태
);    
    

INSERT INTO GROUP_BOARD (c_email,group_loc,group_type, group_expeople,group_date,group_time1,group_time2,group_movtitle,group_title,group_con,group_name,custo_name,custo_phone1,custo_phone2,custo_phone3,gr_show)
VALUES ('hoohee@naver.com','','대관',5,'2024-03-22',2,3,'듄','예약하고싶어요','어떻게 예약해요?','노랑풍선','김주희','010','3189','5555','y');

select *from GROUP_BOARD;
-----------------------------------------------------------------------------------------

-- 답변테이블
DROP TABLE GROUP_ANSWER CASCADE;
CREATE TABLE GROUP_ANSWER(  
    group_id_aws   INT            AUTO_INCREMENT PRIMARY KEY,        -- 답변코드
    group_id	   INT            NOT NULL,                          -- 아이디
    re_title       VARCHAR(50)    NOT NULL,                         -- 제목
    re_content     LONGTEXT       NOT NULL,                         -- 내용
    re_date        DATE           default current_timestamp         -- 작성일
);

select * from GROUP_ANSWER;




