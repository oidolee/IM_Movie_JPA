-- 예진 시작 (page_1)
DROP TABLE IM_Reservation; 
CREATE TABLE IM_Reservation (
    res_id INT AUTO_INCREMENT PRIMARY KEY,
    c_email VARCHAR(50) NOT NULL,
    theater_id VARCHAR(50) NOT NULL,
    screen_id INT NOT NULL,
    movie_age VARCHAR(255) NOT NULL,
    res_movie_date DATE DEFAULT CURRENT_TIMESTAMP,
    res_movie_id VARCHAR(50) NOT NULL,
    res_movie_name VARCHAR(100) NOT NULL,
    res_movie_time VARCHAR(100) NOT NULL,
    st_id VARCHAR(50) NOT NULL,
    res_count INT NOT NULL,
    res_ticket_price DECIMAL(10, 2) NOT NULL,
    res_sysdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    res_check CHAR(1) DEFAULT 'n' 
);

SELECT * FROM IM_Reservation;

INSERT INTO IM_Reservation (c_email, theater_id, screen_id, movie_age, res_movie_id, res_movie_name, res_movie_time, res_seat, res_count, res_ticket_price)
VALUES ('aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 5, 5);


UPDATE IM_Reservation
SET res_check='y'
WHERE res_id=1;

DELETE FROM IM_Reservation
WHERE res_id=1;

commit;

DROP TABLE IM_PayMent;
CREATE TABLE IM_PayMent (
    pay_id INT AUTO_INCREMENT PRIMARY KEY,
    res_id INT NOT NULL,
    c_email VARCHAR(50) NOT NULL,
    c_grade VARCHAR(50) NOT NULL,
    pay_method VARCHAR(50) NOT NULL,
    pay_pay_company VARCHAR(50) NOT NULL,
    res_movie_name VARCHAR(100) NOT NULL,
    pay_card_num VARCHAR(100) NOT NULL,
    pay_tel VARCHAR(50) NOT NULL,
    pay_sysdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    pay_check CHAR(1) DEFAULT 'n'
);

SELECT * FROM IM_PayMent;

INSERT INTO IM_PayMent(res_id, c_email, c_grade, pay_method, pay_pay_company, res_movie_name, pay_card_num, pay_tel, pay_check)
VALUES (1, 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'n');


UPDATE IM_PayMent
SET pay_check='y'
WHERE res_id=1;

DELETE FROM IM_PayMent
WHERE res_id=1;

commit;

DROP TABLE IM_Seat;
CREATE TABLE IM_Seat(
    st_id INT AUTO_INCREMENT PRIMARY KEY,
    st_row VARCHAR(50) NOT NULL, -- 행
    st_column INT NOT NULL, -- 열  
    st_check CHAR(1) DEFAULT 'n' -- 'n':예약가능, 'r':예약중, 'y':결제 완료 예약불가능
);

SELECT * FROM IM_Seat;

INSERT INTO IM_Seat(st_row, st_column) VALUES
('A', 1), ('A', 2), ('A', 3), ('A', 4), ('A', 5), ('A', 6), ('A', 7), ('A', 8), ('A', 9), ('A', 10), ('A', 11), ('A', 12), ('A', 13), ('A', 14),
('B', 1), ('B', 2), ('B', 3), ('B', 4), ('B', 5), ('B', 6), ('B', 7), ('B', 8), ('B', 9), ('B', 10), ('B', 11), ('B', 12), ('B', 13), ('B', 14),
('C', 1), ('C', 2), ('C', 3), ('C', 4), ('C', 5), ('C', 6), ('C', 7), ('C', 8), ('C', 9), ('C', 10), ('C', 11), ('C', 12), ('C', 13), ('C', 14),
('D', 1), ('D', 2), ('D', 3), ('D', 4), ('D', 5), ('D', 6), ('D', 7), ('D', 8), ('D', 9), ('D', 10), ('D', 11), ('D', 12), ('D', 13), ('D', 14),
('E', 1), ('E', 2), ('E', 3), ('E', 4), ('E', 5), ('E', 6), ('E', 7), ('E', 8), ('E', 9), ('E', 10), ('E', 11), ('E', 12), ('E', 13), ('E', 14),
('F', 1), ('F', 2), ('F', 3), ('F', 4), ('F', 5), ('F', 6), ('F', 7), ('F', 8), ('F', 9), ('F', 10), ('F', 11), ('F', 12), ('F', 13), ('F', 14),
('G', 1), ('G', 2), ('G', 3), ('G', 4), ('G', 5), ('G', 6), ('G', 7), ('G', 8), ('G', 9), ('G', 10), ('G', 11), ('G', 12), ('G', 13), ('G', 14),
('H', 1), ('H', 2), ('H', 3), ('H', 4), ('H', 5), ('H', 6), ('H', 7), ('H', 8), ('H', 9), ('H', 10), ('H', 11), ('H', 12), ('H', 13), ('H', 14);

commit;

-- Discount 완료 / 수정사항 없음
DROP TABLE IM_Discount;
CREATE TABLE IM_Discount(
    dc_num INT AUTO_INCREMENT PRIMARY KEY,
    dc_main_title VARCHAR(50) NOT NULL,
    dc_sub_title VARCHAR(50),
    dc_content VARCHAR(255) NOT NULL,
    dc_main_img VARCHAR(255) NOT NULL,
    dc_show CHAR(1) DEFAULT 'y',
    dc_sysdate DATETIME DEFAULT CURRENT_TIMESTAMP
);
-- 예진 끝


-- 민진 시작 (page_2)

    DROP TABLE im_parking;
    CREATE TABLE im_parking (
        ip_no NUMBER PRIMARY KEY,
        ip_block VARCHAR(2) NOT NULL,
        ip_number NUMBER(20) NOT NULL,
        ip_carnumber VARCHAR(20) NOT NULL,
        ip_inoutcheck CHAR(1) NOT NULL, -- 예약 체크
        ip_client VARCHAR(50) NOT NULL,
        ip_regdate TIMESTAMP DEFAULT sysdate,
        reservation_id NUMBER,
        FOREIGN KEY (reservation_id) REFERENCES reservation(res_id)
    );
    insert into im_parking 
        values( nvl( (select max(ip_no) from im_parking)+1,1 ), 'A', 1, '경기51더4433', 'Y' ,'manajini', '2024-03-05 16:00:00', 1 );

    update im_parking
    set ip_block = 'B'
    where ip_no = 1;

    delete from im_parking  where ip_no  = 1;
    commit;

-- 민진 끝



-- 가연 시작 (page_3)
    -- 스토어 상품
    DROP TABLE IM_STORE_ITEM CASCADE constraints;
    CREATE TABLE IM_STORE_ITEM (
        item_code            number(10)    Not null, --상품코드 
        item_type            varchar(20) Not null, --상품종류 
        item_name            varchar(50) Not null, --상품명 
        item_detail        varchar(50) Not null, --상품구성 
        item_price            number(10)  Not null, --판매금액 
        item_sale_price    number(10)  Not null, --할인금액 
        item_image            varchar(255)Not null, --상품사진 
        item_exp            varchar(50)  Not null --유효기간 
    );

    INSERT INTO IM_STORE_ITEM 
    VALUES((SELECT NVL(MAX(item_code)+1, 1) FROM IM_STORE_ITEM), '패키지', 'IM봄_패키지', '2D 일반관람권 2매', 26000, 22000, '/img/', '온라인 관람권 6 개월');

    UPDATE IM_STORE_ITEM
    SET item_type = '관람권',
        item_name = '일반 관람권',
        item_detail = '일반관람권 1매',
        item_price = 13000,
        item_sale_price = 13000,
        item_image = '/img/',
        item_exp = '온라인 관람권 24 개월'
    WHERE item_code = 1;

    DELETE FROM IM_STORE_ITEM
    WHERE item_code = 1;

    SELECT * FROM  IM_STORE_ITEM
    WHERE item_code = 1;

    COMMIT;

    -- 스토어 선물하기
    DROP TABLE IM_STORE_GIFT CASCADE constraints;
    CREATE TABLE IM_STORE_GIFT (
        gift_num        number(20) Not null,      --선물코드 PK
        gift_recipient  varchar(50) Not null,      --선물받는분
        gift_name       varchar(20) Not null,     --선물하는분
        gift_content    varchar(255) Not null,     --메세지 입력
        gift_count      number(20) Not null       --수량
    );

    INSERT INTO IM_STORE_GIFT 
    VALUES((SELECT NVL(MAX(gift_num)+1, 1) FROM IM_STORE_GIFT), 'kim@gmail.com', '홍길동', '선물드립니다.', 1);

    UPDATE IM_STORE_GIFT
    SET gift_recipient = 'hong@naver.com',
        gift_name = '김하나',
        gift_content = '감사합니다.',
        gift_count = 1
    WHERE gift_num = 1;

    DELETE FROM IM_STORE_GIFT
    WHERE gift_num = 1;

    SELECT * FROM  IM_STORE_GIFT
    WHERE gift_num = 1;

    COMMIT;

    -- 스토어 주문 테이블
    DROP TABLE IM_STORE_ORDER CASCADE constraints;
    CREATE TABLE IM_STORE_ORDER (
        order_code  varchar(20) Not null, -- 주문번호 PK
        c_email  varchar(20) Not null     --회원ID Fk
    );

    INSERT INTO IM_STORE_ORDER 
    VALUES((SELECT NVL(MAX(order_code)+1, 1) FROM IM_STORE_ORDER), 'hong@naver.com');


    DELETE FROM IM_STORE_ORDER
    WHERE order_code = 1;

    SELECT * FROM  IM_STORE_ORDER
    WHERE order_code = 1;


    COMMIT;

    -- 스토어 주문 상세 테이블
    DROP TABLE IM_STORE_ORDER_DETAIL CASCADE constraints;
    CREATE TABLE IM_STORE_ORDER_DETAIL (
        detail_code         number(20) Not null,  --쿠폰코드  pk 
        order_code     number(20) Not null,  --주문번호 Fk
        item_name       varchar(20) Not null,  --상품명
        detail_price    number(20) Not null,   --결제금액
        detail_qty      number(20) Not null,   --수량
        detail_regDate DATE  DEFAULT sysdate  --등록일
    );

    INSERT INTO IM_STORE_ORDER_DETAIL 
    VALUES((SELECT NVL(MAX(detail_code)+1, 1) FROM IM_STORE_ORDER_DETAIL), 1, 'IM봄_패키지', 22000, 1, sysdate);

    UPDATE IM_STORE_ORDER_DETAIL
    SET item_name = '일반 관람권',
        detail_price = 13000,
        detail_qty = 2
    WHERE detail_code = 1;

    DELETE FROM IM_STORE_ORDER_DETAIL
    WHERE detail_code = 1;

    SELECT * FROM  IM_STORE_ORDER_DETAIL
    WHERE detail_code = 1;

    COMMIT;


-- 가연 끝



-- 호진 시작 (page_4)

    CREATE TABLE IM_Customer(
        IC_No              VARCHAR2(20)       PRIMARY KEY,
        IC_email           VARCHAR2(50)       NOT NULL,
        IC_name            VARCHAR2(20)       NOT NULL,
        IC_password        VARCHAR2(30)       NOT NULL,
        IC_hp              VARCHAR2(20)       NOT NULL,
        IC_birthday        DATE               NOT NULL,
        IC_address        VARCHAR2(100)       NOT NULL,
        IC_regdate         DATE               DEFAULT sysdate,
        IC_show            VARCHAR2(1)        DEFAULT 'y'
    );
    DROP TABLE IM_Customer;
    
    SELECT * FROM IM_Customer ORDER BY IC_No ASC;
    INSERT INTO IM_Customer(IC_No, IC_email, IC_name, IC_password, IC_hp, IC_birthday, IC_address)
        VALUES((SELECT NVL(MAX(IC_No)+1, 1) FROM IM_Customer), '57', '55', '55', '010', '2024-05-15','서울시 강남구'); 
    COMMIT;

-- 호진 시작 끝


-- 주희 시작 (page_5)
    -- [ 영화 TABLE ]-----------
    DROP TABLE IM_MOVIES CASCADE CONSTRAINTS;
    CREATE TABLE IM_MOVIES(
        MOVIE_ID        NUMBER     PRIMARY KEY,          -- 영화코드(PK)
        MOV_TITLE       VARCHAR2(50)    NOT NULL,            -- 제목
        MOV_PART        NUMBER      NOT NULL,            --파트 나누기
        MOV_TRAILER     CLOB            NOT NULL,            -- 유튭트레일러
        MOV_IMAGE       CLOB            NOT NULL,            --이미지
        MOV_CONTENTS    CLOB            NOT NULL,            --상세내용
        MOV_DATE        DATE            NOT NULL,            -- 개봉일
        MOV_VISITOR     NUMBER     NOT NULL,            -- 관람객수
        MOV_AGE         NUMBER      NOT NULL,             -- 연령제한 
        MOV_TIME        VARCHAR2(50)    NOT NULL               --상영시간
    );
    ALTER TABLE IM_MOVIES
    ADD show CHAR(1)DEFAULT 'y';
    
  INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('2','듄:파트2','1','1','1','내용2','2024/01/01','100','15','134분');
    
    INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('3','건국전쟁','1','1','1','내용3','2024/01/01','100','15','134분');
    
    INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('4','윙카','1','1','1','내용4','2024/01/01','100','15','134분');
    
    INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('5','소풍','1','1','1','내용5','2024/01/01','100','15','134분');
    
    --파트 2
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('6','가여운 것들','2','1','1','내용6','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('7','패스트 라이브즈','2','1','1','내용7','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('8','벙커 게임','2','1','1','내용8','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('9','예수는 역사다','2','1','1','내용9','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('10','생츄어리2:쿼카가 너무해','2','1','1','내용10','2024/01/01','100','15','134분');
    
    --파트 3
    INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('6','가여운 것들','2','1','1','내용6','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('7','패스트 라이브즈','2','1','1','내용7','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('8','벙커 게임','2','1','1','내용8','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('9','예수는 역사다','2','1','1','내용9','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('10','생츄어리2:쿼카가 너무해','2','1','1','내용10','2024/01/01','100','15','134분');
    
    UPDATE IM_MOVIES SET MOV_TITLE = '택시' WHERE MOVIE_ID = '1';
    
    DELETE IM_MOVIES WHERE MOVIE_ID = '1';
    
    
    commit;
  

--------------------------------------------------------------------------------


--관람평 테이블

DROP TABLE IM_REVIEW CASCADE CONSTRAINTS;
CREATE TABLE IM_REVIEW(  
    REVIEW_NUM      NUMBER          PRIMARY KEY,       -- 후기코드(PK)
    MOVIE_ID        VARCHAR2(50)    NOT NULL,          -- 영화코드(FK)
    CUS_ID          VARCHAR2(50)    NOT NULL,          -- 회원ID(FK)
    REVIEW_STAR     NUMBER          NOT NULL,          -- 후기별점
    REVIEW_CONTENTS CLOB            NOT NULL,          -- 후기내용
    REVIEW_DATE     DATE            NOT NULL           -- 작성일
);

--------------------------------------------------------------------------------


--영화좋아요 테이블
DROP TABLE IM_LIKE CASCADE CONSTRAINTS;
CREATE TABLE IM_LIKE(  
    LIKE_ID      NUMBER          PRIMARY KEY,        -- 좋아요코드(PK)
    MOVIE_ID     VARCHAR2(50)    NOT NULL,           -- 영화코드(FK)
    CUS_ID       VARCHAR2(50)    NOT NULL,           -- 회원ID(FK)
    LIKE_DATE    DATE            NOT NULL            -- 좋아요날짜
);

--------------------------------------------------------------------------------

--상영시간표 테이블
DROP TABLE MOVIE_TIME CASCADE CONSTRAINTS;
CREATE TABLE MOVIE_TIME(  
    SCHEDULE_ID     NUMBER          PRIMARY KEY,        -- 일정코드(PK)
    SCREEN_ID       NUMBER          NOT NULL,           -- 상영관코드(FK)
    THEATER_ID      VARCHAR2(50)    NOT NULL,           -- 영화관코드(FK)
    MOVIE_ID        VARCHAR2(50)    NOT NULL,           -- 영화코드(FK)
    TIME_DATE       DATE            NOT NULL,           -- 날짜
    START_TIME      TIMESTAMP       NOT NULL,           -- 시작시간
    END_TIME        TIMESTAMP       NOT NULL,           -- 종료시간
    TIME_CODE       VARCHAR2(10)    NOT NULL            -- 위치코드
);

--------------------------------------------------------------------------------

--지역 테이블
DROP TABLE IM_PLACE  CASCADE CONSTRAINTS;
CREATE TABLE IM_PLACE(  
    PLACE_CODE      VARCHAR2(50)      PRIMARY KEY,      --지역코드(PK)
    PLACE_NAME      VARCHAR2(50)      NOT NULL            --지역이름
);

--------------------------------------------------------------------------------

--공지사항 테이블
DROP TABLE NOTICE_BOARD  CASCADE CONSTRAINTS;
CREATE TABLE NOTICE_BOARD(  
    NOTICE_NUM      NUMBER      PRIMARY KEY,       --공지번호(PK)
    NOTICE_ONE      VARCHAR2(50)    NOT NULL,          --구분
    NOTICE_TITLE    VARCHAR2(50)    NOT NULL,          --제목
    NOTICE_CON      CLOB            NOT NULL,          --내용
    NOTICE_DATE     DATE            NOT NULL           --작성일
);

--------------------------------------------------------------------------------

--대관신청 테이블
DROP TABLE GROUP_BOARD CASCADE CONSTRAINTS;
CREATE TABLE GROUP_BOARD(
    GROUP_NUM           VARCHAR2(50)    PRIMARY KEY,     -- 대관신청코드(PK)
    CUS_ID              VARCHAR2(50)    NOT NULL,        -- 회원ID(FK)
    GROUP_LOC           VARCHAR2(100)   NOT NULL,        -- 영화관위치
    GROUP_TYPE          VARCHAR2(50)    NOT NULL,        -- 분류
    GROUP_EXPECTED_NUMBER   NUMBER         NOT NULL,     -- 예상인원
    GROUP_DATE          DATE            NOT NULL,        -- 희망일
    GROUP_TIME          TIMESTAMP       NOT NULL,        -- 희망시간
    GROUP_MOVIE_TITLE   VARCHAR2(100)   NOT NULL,        -- 영화제목
    GROUP_TITLE         VARCHAR2(50)    NOT NULL,        -- 제목 
    GROUP_CON           CLOB            NOT NULL,        -- 내용 
    GROUP_NAME          VARCHAR2(50)    NOT NULL,        -- 단체명 
    NAME                VARCHAR2(30)    NOT NULL,        -- 신청고객명 
    GROUP_PHONE         VARCHAR2(50)    NOT NULL,        -- 연락처 
    GROUP_EMAIL         VARCHAR2(50)    NOT NULL        -- 이메일 
);
 -------------------------------------------------------------------------------

--답변테이블
DROP TABLE RE_ANSWER CASCADE CONSTRAINTS;
CREATE TABLE RE_ANSWER(  
    CUS_ID      VARCHAR2(50)    NOT NULL,        -- 회원ID
    RE_TITLE    VARCHAR2(50)    NOT NULL,        -- 제목
    RE_CON      CLOB            NOT NULL,        -- 내용
    RE_DATE     TIMESTAMP       NOT NULL,        -- 작성일
    CONSTRAINT PK_RE_ANSWER PRIMARY KEY (CUS_ID) -- 회원ID를 기본키로 설정
);

--------------------------------------------------------------------------------

-- 창해 시작 (page_6)

-- 1:1 문의
DROP TABLE IM_BOARD CASCADE CONSTRAINTS;
CREATE TABLE IM_BOARD(
ONE_ID          NUMBER          PRIMARY KEY,
C_EAMIL         VARCHAR2(50)    NOT NULL,
CUS_NAME        VARCHAR2(50)    NOT NULL,
IB_TYPE         VARCHAR2(50)    NOT NULL,
IB_TYPE_DETAIL  VARCHAR2(50)    NOT NULL,
IB_TITLE        VARCHAR2(50)    NOT NULL,
IB_CONTENT      CLOB            NOT NULL,
IB_DATE         DATE            DEFAULT sysdate,
show            CHAR(1)         DEFAULT 'y'
);

SELECT * FROM IM_BOARD;


insert into IM_BOARD(ONE_ID, C_EAMIL, CUS_NAME, IB_TYPE, IB_TYPE_DETAIL, IB_TITLE, IB_CONTENT)
values(1, 'asdf@asdf.com', '공주', '영화관', '영화관 좌석', '영화관 좌석이 불편해요', '영화관 좌석이 불편해요 너무너무.');
insert into IM_BOARD(ONE_ID, C_EAMIL, CUS_NAME, IB_TYPE, IB_TYPE_DETAIL, IB_TITLE, IB_CONTENT)
values(2, 'asdf@asdf.com', '공주', '영화관', '영화관 좌석', '영화관 좌석이 불편해요', '영화관 좌석이 불편해요 너무너무.');
insert into IM_BOARD(ONE_ID, C_EAMIL, CUS_NAME, IB_TYPE, IB_TYPE_DETAIL, IB_TITLE, IB_CONTENT)
values(3, 'asdf@asdf.com', '공주', '영화관', '영화관 좌석', '영화관 좌석이 불편해요', '영화관 좌석이 불편해요 너무너무.');
commit;

UPDATE IM_BOARD
   SET IB_TYPE = '스토어'
 WHERE c_eamil = 'asdf@asdf.com';

DELETE FROM IM_BOARD
WHERE ONE_ID = 1;
-----------------------------------------------------------------------------------
-- 1:1 문의 답변 테이블
DROP TABLE IM_BOARD_ANSWER CASCADE CONSTRAINTS;
CREATE TABLE IM_BOARD_ANSWER(
ONE_ID_ANSWER   NUMBER          PRIMARY KEY,
IBA_TITLE        VARCHAR2(50)    NOT NULL,
IBA_CONTENT      CLOB            NOT NULL,
IBA_DATE         DATE            DEFAULT sysdate
);

SELECT * FROM IM_BOARD_ANSWER;

INSERT INTO IM_BOARD_ANSWER
VALUES(1, '영화관 좌석이 불편해요', '죄송해요 어쩔 수 없어요', sysdate);

INSERT INTO IM_BOARD_ANSWER
VALUES(2, '영화관 좌석이 불편해요2', '죄송해요 어쩔 수 없어요', sysdate);

INSERT INTO IM_BOARD_ANSWER
VALUES(3, '영화관 좌석이 불편해요3', '죄송해요 어쩔 수 없어요', sysdate);

COMMIT;

UPDATE IM_BOARD_ANSWER
   SET IBA_CONTENT = '바꿔줄 수 없어요'
 WHERE IBA_TITLE = '영화관 좌석이 불편해요';

DELETE FROM IM_BOARD_ANSWER
WHERE ONE_ID_ANSWER = 2;
-----------------------------------------------------------------------------------

-- 이벤트 페이지 테이블
DROP TABLE IM_EVENT CASCADE CONSTRAINTS;
CREATE TABLE IM_EVENT(
e_ID          NUMBER          PRIMARY KEY,
e_name        VARCHAR2(50)    NOT NULL,
e_category    VARCHAR2(50)    NOT NULL,
e_board       VARCHAR2(50)    NOT NULL,
e_date        DATE            NOT NULL,
e_regDate     DATE            DEFAULT sysdate,
show          CHAR(1)         DEFAULT 'y'
);

SELECT * FROM IM_EVENT;


insert into IM_EVENT(e_ID, e_name, e_category, e_board, e_date)
values(1, '이벤트1', '쿠폰', '쿠폰받자', sysdate);
insert into IM_EVENT(e_ID, e_name, e_category, e_board, e_date)
values(2, '이벤트2', '시사회', '시사회가자', sysdate);
insert into IM_EVENT(e_ID, e_name, e_category, e_board, e_date)
values(3, '이벤트3', '시사회', '시사회', sysdate);
commit;

UPDATE IM_EVENT
   SET e_name = '가자이벤트'
 WHERE e_ID = '1';

DELETE FROM IM_EVENT
WHERE e_ID = 1;


-----------------------------------------------------------------------------------
-- 쿠폰 테이블
DROP TABLE IM_COUPON CASCADE CONSTRAINTS;
CREATE TABLE IM_COUPON(
ic_num          NUMBER          PRIMARY KEY,
ic_name         VARCHAR2(50)    NOT NULL,
ic_category     VARCHAR2(50)    NOT NULL,
ic_sale         NUMBER          NOT NULL,
ic_useDate      DATE            NOT NULL,
ic_regDate      DATE            DEFAULT sysdate,
ic_status       CHAR(1)         DEFAULT 'y'
);

SELECT * FROM IM_COUPON;


insert into IM_COUPON(ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values(1, '쿠폰1', '영화', 10000, sysdate);
insert into IM_COUPON(ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values(2, '쿠폰2', '스토어', 10000, sysdate);
insert into IM_COUPON(ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values(3, '쿠폰3', '음료', 10000, sysdate);
commit;

UPDATE IM_COUPON
   SET ic_name = '쿠쿠폰폰'
 WHERE ic_num = 1;

DELETE FROM IM_COUPON
WHERE ic_num = 3;
-----------------------------------------------------------------------------------
-- 고객 쿠폰 테이블
DROP TABLE IM_CUS_COUPON CASCADE CONSTRAINTS;
CREATE TABLE IM_CUS_COUPON(
c_email         VARCHAR2(50)    PRIMARY KEY, -- PK,FK
ic_num          NUMBER          NOT NULL, -- FK
ic_name         VARCHAR2(50)    NOT NULL, 
ic_category     VARCHAR2(50)    NOT NULL,
ic_sale         NUMBER          NOT NULL,
ic_useDate      DATE            NOT NULL,
ic_regDate      DATE            DEFAULT sysdate,
ic_status       CHAR(1)         DEFAULT 'y'
);

SELECT * FROM IM_CUS_COUPON;


insert into IM_CUS_COUPON(c_email, ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values('asdf@asdf.com', 1, '쿠폰1', '영화', 10000, sysdate);
insert into IM_CUS_COUPON(c_email, ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values('qwer@asdf.com', 2, '쿠폰2', '영화', 10000, sysdate);
insert into IM_CUS_COUPON(c_email, ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values('zxcv@asdf.com', 3, '쿠폰3', '영화', 10000, sysdate);
commit;

UPDATE IM_CUS_COUPON
   SET ic_name = '쿠쿠폰폰'
 WHERE ic_num = 1;

DELETE FROM IM_CUS_COUPON
WHERE ic_num = 3;

-----------------------------------------------------------------------------------
-- 포인트 테이블
DROP TABLE IM_POINT CASCADE CONSTRAINTS;
CREATE TABLE IM_POINT(
C_EMAIL         VARCHAR2(50)    PRIMARY KEY,
ip_usePoint     NUMBER          NOT NULL,
ip_havePoint    NUMBER          NOT NULL
);

SELECT * FROM IM_POINT;


insert into IM_POINT(c_email, ip_usePoint, ip_havePoint)
values('asdf@asdf.com', 10000, 30000);
insert into IM_POINT(c_email, ip_usePoint, ip_havePoint)
values('qwer@asdf.com', 10000, 30000);
insert into IM_POINT(c_email, ip_usePoint, ip_havePoint)
values('zxcv@asdf.com', 10000, 30000);
commit;

UPDATE IM_POINT
   SET ip_usePoint = 15000
 WHERE c_email = 'asdf@asdf.com';

DELETE FROM IM_POINT
WHERE c_email = 'zxcv@asdf.com';

-----------------------------------------------------------------------------------


-- 샘플용
DROP TABLE mvc_sample_tbl CASCADE CONSTRAINTS;
CREATE TABLE mvc_sample_tbl(
   id      number(5)    PRIMARY KEY,
   name    varchar2(50) NOT NULL,
   brand   varchar2(50) NOT NULL,
   madein  varchar2(50) NOT NULL,
   price   number(9)    NOT NULL
);
insert into mvc_sample_tbl 
    values( nvl( (select max(id) from mvc_sample_tbl)+1 ,1), 'name_1', 'brand_1', 'madein_1', 1 );
insert into mvc_sample_tbl 
    values( nvl( (select max(id) from mvc_sample_tbl)+1 ,1), 'name_2', 'brand_2', 'madein_2', 2 );
commit;    
SELECT * FROM mvc_sample_tbl;







