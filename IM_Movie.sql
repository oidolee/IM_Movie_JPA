-- 예진 시작 (page_1)
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

    ---------------------------------------------------------------
    DROP TABLE mvc_Reservation_tbl CASCADE CONSTRAINTS;
    CREATE TABLE mvc_Reservation_tbl(
    Res_id           NUMBER          PRIMARY KEY,
    c_email          VARCHAR2(50)    NOT NULL,
    THEATER_ID       VARCHAR2(50)    NOT NULL,
    SCREEN_ID        VARCHAR2(50)    NOT NULL,
    MOV_AGE          VARCHAR2(255)   NOT NULL,
    Res_movieDate    Date            DEFAULT sysdate,
    Res_movieID      VARCHAR2(50)    NOT NULL,
    Res_movieName    VARCHAR2(100)   NOT NULL,
    Res_movieTime    VARCHAR2(100)   NOT NULL,
    Res_seat         VARCHAR2(50)    NOT NULL,
    Res_count        NUMBER          NOT NULL,
    Res_ticketPrice  NUMBER          NOT NULL,
    Res_sysdate      DATE            DEFAULT sysdate,
    Res_check        CHAR(1)         DEFAULT 'n'
    );

    select * from mvc_Reservation_tbl;

    insert into mvc_Reservation_tbl(Res_id, c_email, THEATER_ID, SCREEN_ID, MOV_AGE, Res_movieDate, Res_movieID, Res_movieName, Res_movieTime, Res_seat, Res_count, Res_ticketPrice, Res_sysdate, Res_check)
    values ((SELECT NVL(MAX(Res_id)+1, 1) FROM mvc_Reservation_tbl), 'aa', 'aa', 'aa', 'aa', sysdate, 'aa', 'aa', 'aa', 'aa', 5, 5, sysdate, 'n');

    update mvc_Reservation_tbl
    set Res_check='y'
    where Res_id=1;

    delete from mvc_Reservation_tbl
    where Res_id=1;

    commit;

    DROP TABLE mvc_PayMent_tbl CASCADE CONSTRAINTS;
    CREATE TABLE mvc_PayMent_tbl(
    Pay_id           NUMBER          PRIMARY KEY,
    Res_id           NUMBER          NOT NULL,
    c_email          VARCHAR2(50)    NOT NULL,
    c_grade          VARCHAR2(50)    NOT NULL,
    Pay_method       VARCHAR2(50)    NOT NULL,
    Pay_payCompany   VARCHAR2(50)    NOT NULL,
    Res_movieName    VARCHAR2(100)   NOT NULL,
    Pay_cardNum      VARCHAR2(100)   NOT NULL,
    Pay_tel          VARCHAR2(50)    NOT NULL,
    Pay_sysdate      DATE            DEFAULT sysdate,
    Pay_check        CHAR(1)         DEFAULT 'n'
    );

    select * from mvc_PayMent_tbl;

    insert into mvc_PayMent_tbl(Pay_id, Res_id, c_email, c_grade, Pay_method, Pay_payCompany, Res_movieName, Pay_cardNum, Pay_tel, Pay_sysdate, Pay_check)
    values ((SELECT NVL(MAX(Pay_id)+1, 1) FROM mvc_PayMent_tbl), 1, 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', sysdate, 'n');

    update mvc_PayMent_tbl
    set Pay_check='y'
    where Res_id=1;

    delete from mvc_PayMent_tbl
    where Res_id=1;

    commit;

    DROP TABLE mvc_Seat_tbl CASCADE CONSTRAINTS;
    CREATE TABLE mvc_Seat_tbl(
    St_id            NUMBER          PRIMARY KEY,
    THEATER_ID       VARCHAR2(50)    NOT NULL,
    SCREEN_ID        VARCHAR2(50)    NOT NULL,
    St_seatGroup     VARCHAR2(50)    NOT NULL,
    St_num           VARCHAR2(50)    NOT NULL,
    St_lineNum       VARCHAR2(50)    NOT NULL,
    St_check         CHAR(1)         DEFAULT 'n'
    );

    select * from mvc_Seat_tbl;

    insert into mvc_Seat_tbl(St_id, THEATER_ID, SCREEN_ID, St_seatGroup, St_num, St_lineNum, St_check)
    values ((SELECT NVL(MAX(St_id)+1, 1) FROM mvc_Seat_tbl), 'aa', 'aa', 'aa', 'aa', 'aa', 'n');

    update mvc_Seat_tbl
    set St_check='y'
    where St_id=1;

    delete from mvc_Seat_tbl
    where St_id=1;

    commit;

    DROP TABLE mvc_Discount_tbl CASCADE CONSTRAINTS;
    CREATE TABLE mvc_Discount_tbl(
    Dc_num            NUMBER          PRIMARY KEY,
    Dc_mainTitle      VARCHAR2(50)    NOT NULL,
    Dc_subTitle       VARCHAR2(50),
    Dc_mainImg        VARCHAR2(255)   NOT NULL,
    Dc_subImg         VARCHAR2(255)   NOT NULL,
    Dc_show           CHAR(1)         DEFAULT 'n'
    );

    select * from mvc_Discount_tbl;

    insert into mvc_Discount_tbl(Dc_num, Dc_mainTitle, Dc_subTitle, Dc_mainImg, Dc_subImg, Dc_show)
    values ((SELECT NVL(MAX(Dc_num)+1, 1) FROM mvc_Discount_tbl), 'aa', 'aa', 'aa', 'aa', 'n');

    update mvc_Discount_tbl
    set Dc_show='y'
    where Dc_num=1;

    delete from mvc_Discount_tbl
    where Dc_num=1;

    commit;

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
    -- 아이디찾기 (휴대폰번호, 이름)
    SELECT IC_email 
    FROM IM_Customer 
    WHERE IC_name = '홍길동' AND IC_hp = '01011112222';
    -- 아이디찾기 (생년월일 , 이름)
   SELECT *
FROM IM_Customer
WHERE IC_birthday = '2024-02-29';


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
-- 창해 시작 (page_6)


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


