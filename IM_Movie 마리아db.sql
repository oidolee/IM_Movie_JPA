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


-------------------------------------------------------------------------------
-- 가연 시작
show databases;

use IM_Movie;

show tables;


-- 스토어 상품
DROP TABLE IF EXISTS IM_STORE_ITEM;
CREATE TABLE IM_STORE_ITEM (
    item_code        INT AUTO_INCREMENT PRIMARY KEY, -- 상품 코드
    item_type        VARCHAR(20) NOT NULL,			 -- 상품 종류
    item_name        VARCHAR(50) NOT NULL,			 -- 상품명
    item_detail      VARCHAR(50) NOT NULL,			 -- 상품 구성품
    item_price       INT NOT NULL,					 -- 상품 소비자 가격
    item_sale_price  INT NOT NULL,					 -- 상품 할인 가격
    item_image       VARCHAR(255) NOT NULL,			 -- 상품 이미지
    item_exp         VARCHAR(50) NOT NULL			 -- 상품 유효기간
);

-- 베스트
INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
VALUES ('베스트', 'IM봄_패키지', '2D 일반관람권 2매', 26000, 22000, 'http://localhost:3000/static/media/IM_package1.d2c39118eec38e226bfb.png', '온라인 관람권 6 개월');

INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
VALUES ('베스트', 'IM,와봄?_패키지', '2D영화관람권 2매 + 교환권 1매', 36000, 28000, 'http://localhost:3000/static/media/IM_package2.33dafcf4bdbd74f9d43b.png', '온라인 관람권 6 개월');

INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
VALUES ('베스트', 'IMPICK♥ [브레드이발소] 2인관람권', '<브레드이발소:셀럽in베이커리타운> 전용 2D영화관람권 2매', 26000, 16000, 'http://localhost:3000/static/media/IM_package3.eada1987a3778161fd74.png', '	온라인 관람권 3 개월');

-- 관람권
INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
VALUES ('관람권', '일반 관람권', '일반 관람권 1매', 13000, 13000, 'http://localhost:3000/static/media/IM_ticket1.d488356654e4694c8166.png', '온라인 관람권 24 개월');

INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
VALUES ('관람권', 'IM 관람권', 'IM 관람권 1매', 35000, 35000, 'http://localhost:3000/static/media/IM_ticket2.83ecd6dccef900f28329.png', '온라인 관람권 24 개월');

-- 스낵음료
INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
VALUES ('스낵음료', '스위트콤보', '오리지널L + 탄산음료M2', 10000, 10000, 'https://cf.lottecinema.co.kr//Media/WebAdmin/113c4f562c6e4c9d94e973b590f594ab.jpg', '온라인 상품권 24 개월');

INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
VALUES ('스낵음료', '더블콤보', '오리지널팝콘M2+탄산음료M2', 14000, 14000, 'http://localhost:3000/static/media/foods2.3dfafdd30be33b0dd8ef.jpg', '온라인 관람권 24 개월');

INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
VALUES ('스낵음료', '콜라 M', '콜라M', 3000, 3000, 'http://localhost:3000/static/media/foods3.d9c9241c7342615ee2b2.jpg', '온라인 관람권 24 개월');



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

commit;

SELECT * FROM IM_STORE_ITEM
WHERE item_code = 1;

SELECT * FROM IM_STORE_ITEM;

-- 스토어 선물하기
DROP TABLE IF EXISTS IM_STORE_GIFT;
CREATE TABLE IM_STORE_GIFT (
    gift_num         INT AUTO_INCREMENT PRIMARY KEY,
    gift_recipient   VARCHAR(50) NOT NULL,
    gift_name        VARCHAR(20) NOT NULL,
    gift_content     VARCHAR(255) NOT NULL,
    gift_count       INT NOT NULL
);

INSERT INTO IM_STORE_GIFT (gift_recipient, gift_name, gift_content, gift_count)
VALUES ('kim@gmail.com', '홍길동', '선물드립니다.', 1);

UPDATE IM_STORE_GIFT
SET gift_recipient = 'hong@naver.com',
    gift_name = '김하나',
    gift_content = '감사합니다.',
    gift_count = 1
WHERE gift_num = 1;

DELETE FROM IM_STORE_GIFT
WHERE gift_num = 1;

SELECT * FROM IM_STORE_GIFT
WHERE gift_num = 1;

-- 스토어 주문 테이블
DROP TABLE IF EXISTS IM_STORE_ORDER;
CREATE TABLE IM_STORE_ORDER (
    order_code INT NOT NULL,
    c_email    VARCHAR(50) NOT NULL
);

INSERT INTO IM_STORE_ORDER (order_code, c_email)
VALUES (1, 'hong@naver.com');

DELETE FROM IM_STORE_ORDER
WHERE order_code = 1;

SELECT * FROM IM_STORE_ORDER
WHERE order_code = 1;

SELECT * FROM IM_STORE_ORDER;

-- 스토어 주문 상세 테이블
DROP TABLE IF EXISTS IM_STORE_ORDER_DETAIL;
CREATE TABLE IM_STORE_ORDER_DETAIL (
    detail_code    INT AUTO_INCREMENT PRIMARY KEY,
    order_code     INT NOT NULL,
    item_name      VARCHAR(20) NOT NULL,
    detail_price   INT NOT NULL,
    detail_qty     INT NOT NULL,
    detail_regDate DATE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO IM_STORE_ORDER_DETAIL (order_code, item_name, detail_price, detail_qty)
VALUES (1, 'IM봄_패키지', 22000, 1);

UPDATE IM_STORE_ORDER_DETAIL
SET item_name = '일반 관람권',
    detail_price = 13000,
    detail_qty = 2
WHERE detail_code = 1;

DELETE FROM IM_STORE_ORDER_DETAIL
WHERE detail_code = 1;

SELECT * FROM IM_STORE_ORDER_DETAIL
WHERE detail_code = 1;



DROP TABLE IF EXISTS  IM_STORE_TICKETMAP;
CREATE TABLE IM_STORE_TICKETMAP (
	ticketmap_no        INT AUTO_INCREMENT PRIMARY KEY, -- 코드
    ticketmap_address    VARCHAR(255) NOT NULL, -- 주소
    ticketmap_name     	VARCHAR(50) NOT NULL, -- 지점명
    ticketmap_latitude       FLOAT  NOT NULL, -- 위도
    ticketmap_longitude    FLOAT  NOT NULL -- 경도
);

SELECT * FROM IM_STORE_TICKETMAP;


INSERT INTO IM_STORE_TICKETMAP (ticketmap_address, ticketmap_name, ticketmap_latitude, ticketmap_longitude)
VALUES ('서울 마포구 양화로 176 와이즈파크 8~11층', '홍대입구', 37.557217148, 126.924891712);

INSERT INTO IM_STORE_TICKETMAP (ticketmap_address, ticketmap_name, ticketmap_latitude, ticketmap_longitude)
VALUES ('서울 용산구 청파로 74', '용산', 37.532706837, 126.958944355);

INSERT INTO IM_STORE_TICKETMAP (ticketmap_address, ticketmap_name, ticketmap_latitude, ticketmap_longitude)
VALUES ('서울 강서구 양천로 476 4층', '가양', 37.561602070, 126.853269326);

INSERT INTO IM_STORE_TICKETMAP (ticketmap_address, ticketmap_name, ticketmap_latitude, ticketmap_longitude)
VALUES ('서울 금천구 디지털로10길 9', '가산디지털단지', 37.477622257, 126.889063905);


DELETE FROM IM_STORE_TICKETMAP
WHERE ticketmap_name = '용산';
-- 가연 끝
-------------------------------------------------------------------------------