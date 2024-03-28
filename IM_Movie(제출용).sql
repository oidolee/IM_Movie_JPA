-- page_1 이예진 시작
        -- 예약
        DROP TABLE IF EXISTS IM_Reservation;
        CREATE TABLE IM_Reservation (
            res_id INT AUTO_INCREMENT PRIMARY KEY,
            st_id INT NOT NULL UNIQUE,
            IC_Email VARCHAR(50) NOT NULL,
            res_count INT NOT NULL,
            res_ticket_price DECIMAL(10, 2) NOT NULL,
            res_sysdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            res_check CHAR(1) DEFAULT 'n', -- 'n': 예약 전, 'y': 예약 후
            FOREIGN KEY (st_id) REFERENCES IM_Seat(st_id)
        );


        -- 좌석
        DROP TABLE IM_Seat;
        CREATE TABLE IM_Seat(
            st_id INT AUTO_INCREMENT PRIMARY KEY,
            st_row VARCHAR(50) NOT NULL,
            st_column INT NOT NULL, 
            st_check CHAR(1) DEFAULT 'n' -- 'n': 예약 가능, 'r': 예약 중, 'y': 결제 완료 예약불가능
        );
        INSERT INTO IM_Seat(st_row, st_column) VALUES
            ('A', 1), ('A', 2), ('A', 3), ('A', 4), ('A', 5), ('A', 6), ('A', 7), ('A', 8), ('A', 9), ('A', 10), ('A', 11), ('A', 12), ('A', 13), ('A', 14),
            ('B', 1), ('B', 2), ('B', 3), ('B', 4), ('B', 5), ('B', 6), ('B', 7), ('B', 8), ('B', 9), ('B', 10), ('B', 11), ('B', 12), ('B', 13), ('B', 14),
            ('C', 1), ('C', 2), ('C', 3), ('C', 4), ('C', 5), ('C', 6), ('C', 7), ('C', 8), ('C', 9), ('C', 10), ('C', 11), ('C', 12), ('C', 13), ('C', 14),
            ('D', 1), ('D', 2), ('D', 3), ('D', 4), ('D', 5), ('D', 6), ('D', 7), ('D', 8), ('D', 9), ('D', 10), ('D', 11), ('D', 12), ('D', 13), ('D', 14),
            ('E', 1), ('E', 2), ('E', 3), ('E', 4), ('E', 5), ('E', 6), ('E', 7), ('E', 8), ('E', 9), ('E', 10), ('E', 11), ('E', 12), ('E', 13), ('E', 14),
            ('F', 1), ('F', 2), ('F', 3), ('F', 4), ('F', 5), ('F', 6), ('F', 7), ('F', 8), ('F', 9), ('F', 10), ('F', 11), ('F', 12), ('F', 13), ('F', 14),
            ('G', 1), ('G', 2), ('G', 3), ('G', 4), ('G', 5), ('G', 6), ('G', 7), ('G', 8), ('G', 9), ('G', 10), ('G', 11), ('G', 12), ('G', 13), ('G', 14),
            ('H', 1), ('H', 2), ('H', 3), ('H', 4), ('H', 5), ('H', 6), ('H', 7), ('H', 8), ('H', 9), ('H', 10), ('H', 11), ('H', 12), ('H', 13), ('H', 14);


        -- 결제
        DROP TABLE IM_PayMent;
        CREATE TABLE IM_PayMent (
                pay_id INT AUTO_INCREMENT PRIMARY KEY,
            pay_name VARCHAR(50) NOT NULL UNIQUE,
            pay_order_name VARCHAR(50) NOT NULL,
            IC_Email VARCHAR(50) NOT NULL,
            pay_amount BIGINT NOT NULL,
            pay_company VARCHAR(255) NOT NULL,
            pay_sysdate DATETIME DEFAULT CURRENT_TIMESTAMP,
            pay_check CHAR(1) DEFAULT 'n' -- 'n': 결제 전, 'y': 결제 후
        );


        -- 할인안내
        DROP TABLE IM_Discount;
        CREATE TABLE IM_Discount(
            dc_num INT AUTO_INCREMENT PRIMARY KEY,
            dc_main_title VARCHAR(50) NOT NULL,
            dc_sub_title VARCHAR(50),
            dc_content VARCHAR(255) NOT NULL,
            dc_main_img VARCHAR(255) NOT NULL,
            dc_show CHAR(1) DEFAULT 'y', -- 'n': 숨기기, 'y': 보이기
            dc_sysdate DATETIME DEFAULT CURRENT_TIMESTAMP
        );
-- page_1 이예진 끝

-- page_2 이민진 시작

    -- 민진 주차등로 시작
        DROP TABLE im_parking;
        CREATE TABLE im_parking (
            ip_no INT PRIMARY KEY AUTO_INCREMENT,
            ip_block VARCHAR(2),
            ip_number INT NOT NULL,
            ip_carnumber VARCHAR(20),
            ip_inoutcheck CHAR(1) NOT NULL DEFAULT 'N',
            ip_reservation CHAR(1) NOT NULL DEFAULT 'N',
            ip_client VARCHAR(50),
            ip_regdate TIMESTAMP default "0000-00-00 00:00:00",
            in_date TIMESTAMP,
            out_date TIMESTAMP,
            reservation_id INT
        );


        desc im_parking;
        INSERT INTO im_parking(ip_block, ip_number) VALUES
        ('A', 1), ('A', 2), ('A', 3), ('A', 4), ('A', 5),
        ('B', 1), ('B', 2), ('B', 3), ('B', 4), ('B', 5),
        ('C', 1), ('C', 2), ('C', 3), ('C', 4), ('C', 5),
        ('D', 1), ('D', 2), ('D', 3), ('D', 4), ('D', 5),
        ('E', 1), ('E', 2), ('E', 3), ('E', 4), ('E', 5);
        SELECT * FROM im_parking;
    -- 민진 주차등로 끝



    -- 지역별 영화관 테이블
    DROP TABLE IM_PLACE  CASCADE;
    CREATE TABLE IM_PLACE(  
        ip_num         INT              AUTO_INCREMENT PRIMARY KEY,
        place_num      INT              NOT NULL,                 -- 지역코드
        movie_id      INT            NOT NULL,               -- 영화코드
        movie_title      VARCHAR(50)      NOT NULL,               -- 영화제목
        place_title    VARCHAR(50)      NOT NULL,                   -- 지역이름
        theater_id     VARCHAR(50)      NOT NULL,               -- 상영관
        movie_time      VARCHAR(50)         NOT NULL,               -- 시간
        start_time      TIMESTAMP      NOT NULL,               -- 시작시간
        end_time      TIMESTAMP      NOT NULL,               -- 종료시간
        open_time      TIMESTAMP      NOT NULL,               -- 개봉시간
        close_time      TIMESTAMP      NOT NULL               -- 마감시간                                             -- 개봉
    );


    -- 홍대입구점 시작
        INSERT INTO IM_PLACE (place_num, movie_id, movie_title, place_title, theater_id, movie_time, start_time, end_time, open_time, close_time)
        VALUES
        (1, 1, '파묘', '홍대입구점', '1관', '09:00', '2024-03-24', '2024-03-24 11:00', '2024-02-22', '2024-04-03'),
        (1, 1, '파묘', '홍대입구점', '1관', '12:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (1, 1, '파묘', '홍대입구점', '1관', '19:00', '2024-03-24', '2024-03-24 21:14', '2024-02-22', '2024-04-03'),
        (1, 2, '듄: 파트2더보기', '홍대입구점', '2관', '19:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (1, 2, '듄: 파트2더보기', '홍대입구점', '2관', '20:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (1, 3, '밥 말리: 원 러브', '홍대입구점', '3관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (1, 4, '원 앤 온리', '홍대입구점', '4관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (1, 5, '윙카', '홍대입구점', '5관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (1, 6, '메이 디셈버', '홍대입구점', '6관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');
    -- 홍대입구점 끝
    
    -- 용산점 시작
        INSERT INTO IM_PLACE (place_num, movie_id, movie_title, place_title, theater_id, movie_time, start_time, end_time, open_time, close_time)
        VALUES
        (2, 1, '파묘', '옹산점', '1관', '8:00', '2024-03-24', '2024-03-24 11:00', '2024-02-22', '2024-04-03'),
        (2, 1, '파묘', '옹산점', '1관', '11:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (2, 2, '듄: 파트2더보기', '옹산점', '2관', '19:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (2, 2, '듄: 파트2더보기', '옹산점', '2관', '20:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (2, 2, '듄: 파트2더보기', '옹산점', '2관', '21:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (2, 3, '밥 말리: 원 러브', '옹산점', '3관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (2, 4, '원 앤 온리', '옹산점', '4관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (2, 5, '윙카', '옹산점', '5관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (2, 6, '메이 디셈버', '옹산점', '6관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');
    -- 용산점 끝


    -- 합정점 시작
        INSERT INTO IM_PLACE (place_num, movie_id, movie_title, place_title, theater_id, movie_time, start_time, end_time, open_time, close_time)
        VALUES
        (3, 1, '파묘', '합정점', '1관', '8:00', '2024-03-24', '2024-03-24 11:00', '2024-02-22', '2024-04-03'),
        (3, 1, '파묘', '합정점', '1관', '11:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (3, 2, '듄: 파트2더보기', '합정점', '2관', '19:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (3, 2, '듄: 파트2더보기', '합정점', '2관', '20:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (3, 2, '듄: 파트2더보기', '합정점', '2관', '21:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (3, 3, '밥 말리: 원 러브', '합정점', '3관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (3, 4, '원 앤 온리', '합정점', '4관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (3, 5, '윙카', '합정점', '5관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (3, 6, '메이 디셈버', '합정점', '6관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');
    -- 합정점 끝


    -- 에비뉴엘점 시작
        INSERT INTO IM_PLACE (place_num, movie_id, movie_title, place_title, theater_id, movie_time, start_time, end_time, open_time, close_time)
        VALUES
        (4, 1, '파묘', '에비뉴엘', '1관', '8:00', '2024-03-24', '2024-03-24 11:00', '2024-02-22', '2024-04-03'),
        (4, 1, '파묘', '에비뉴엘', '1관', '11:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (4, 1, '파묘', '에비뉴엘', '1관', '18:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (4, 2, '듄: 파트2더보기', '에비뉴엘', '2관', '19:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),  
        (4, 2, '듄: 파트2더보기', '에비뉴엘', '2관', '21:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (4, 3, '밥 말리: 원 러브', '에비뉴엘', '3관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (4, 4, '원 앤 온리', '에비뉴엘', '4관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (4, 5, '윙카', '에비뉴엘', '5관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (4, 6, '메이 디셈버', '에비뉴엘', '6관', '17:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');
        (4, 6, '메이 디셈버', '에비뉴엘', '6관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');  
    -- 에비뉴엘점 끝


    -- 영등포점 시작
        INSERT INTO IM_PLACE (place_num, movie_id, movie_title, place_title, theater_id, movie_time, start_time, end_time, open_time, close_time)
        VALUES
        (5, 1, '파묘', '영등포점', '1관', '9:00', '2024-03-24', '2024-03-24 11:00', '2024-02-22', '2024-04-03'),
        (5, 1, '파묘', '영등포점', '1관', '11:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (5, 1, '파묘', '영등포점', '1관', '18:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (5, 1, '파묘', '영등포점', '1관', '20:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (5, 2, '듄: 파트2더보기', '영등포점', '2관', '19:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),  
        (5, 2, '듄: 파트2더보기', '영등포점', '2관', '21:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (5, 3, '밥 말리: 원 러브', '영등포점', '3관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (5, 4, '원 앤 온리', '영등포점', '4관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (5, 5, '윙카', '영등포점', '5관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (5, 6, '메이 디셈버', '영등포점', '6관', '17:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');
        (5, 6, '메이 디셈버', '영등포점', '6관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');  
    -- 영등포점 끝


    -- 안양일번가점 시작
        INSERT INTO IM_PLACE (place_num, movie_id, movie_title, place_title, theater_id, movie_time, start_time, end_time, open_time, close_time)
        VALUES
        (28, 1, '파묘', '안양일번가점', '1관', '9:00', '2024-03-24', '2024-03-24 11:00', '2024-02-22', '2024-04-03'),
        (28, 1, '파묘', '안양일번가점', '1관', '11:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (28, 1, '파묘', '안양일번가점', '1관', '18:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (28, 1, '파묘', '안양일번가점', '1관', '20:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (28, 2, '듄: 파트2더보기', '안양일번가점', '2관', '19:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),  
        (28, 2, '듄: 파트2더보기', '안양일번가점', '2관', '21:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (28, 3, '밥 말리: 원 러브', '안양일번가점', '3관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (28, 4, '원 앤 온리', '안양일번가점', '4관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (28, 5, '윙카', '안양일번가점', '5관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (28, 6, '메이 디셈버', '안양일번가점', '6관', '17:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (28, 6, '메이 디셈버', '안양일번가점', '6관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');  
    -- 안양일번가점 끝


    -- 광명아울렛점 시작
        INSERT INTO IM_PLACE (place_num, movie_id, movie_title, place_title, theater_id, movie_time, start_time, end_time, open_time, close_time)
        VALUES
        (29, 1, '파묘', '광명아울렛점', '1관', '9:00', '2024-03-24', '2024-03-24 11:00', '2024-02-22', '2024-04-03'),
        (29, 1, '파묘', '광명아울렛점', '1관', '11:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (29, 1, '파묘', '광명아울렛점', '1관', '18:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (29, 1, '파묘', '광명아울렛점', '1관', '20:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (29, 2, '듄: 파트2더보기', '광명아울렛점', '2관', '19:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),  
        (29, 2, '듄: 파트2더보기', '광명아울렛점', '2관', '21:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (29, 3, '밥 말리: 원 러브', '광명아울렛점', '3관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (29, 4, '원 앤 온리', '광명아울렛점', '4관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (29, 5, '윙카', '광명아울렛점', '5관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (29, 6, '메이 디셈버', '광명아울렛점', '6관', '17:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (29, 6, '메이 디셈버', '광명아울렛점', '6관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');  
    -- 광명아울렛점 끝


    -- 위례점 시작
        INSERT INTO IM_PLACE (place_num, movie_id, movie_title, place_title, theater_id, movie_time, start_time, end_time, open_time, close_time)
        VALUES
        (30, 1, '파묘', '위례점', '1관', '9:00', '2024-03-24', '2024-03-24 11:00', '2024-02-22', '2024-04-03'),
        (30, 1, '파묘', '위례점', '1관', '11:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (30, 1, '파묘', '위례점', '1관', '18:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (30, 2, '듄: 파트2더보기', '위례점', '2관', '12:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (30, 2, '듄: 파트2더보기', '위례점', '2관', '19:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (30, 2, '듄: 파트2더보기', '위례점', '2관', '21:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (30, 3, '밥 말리: 원 러브', '위례점', '3관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (30, 4, '원 앤 온리', '위례점', '4관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (30, 5, '윙카', '위례점', '5관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (30, 6, '메이 디셈버', '위례점', '6관', '17:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03')
    -- 위례점 끝


    -- 부평점 시작
        INSERT INTO IM_PLACE (place_num, movie_id, movie_title, place_title, theater_id, movie_time, start_time, end_time, open_time, close_time)
        VALUES
        (31, 1, '파묘', '부평점', '1관', '9:00', '2024-03-24', '2024-03-24 11:00', '2024-02-22', '2024-04-03'),
        (31, 1, '파묘', '부평점', '1관', '11:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (31, 1, '파묘', '부평점', '1관', '18:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (31, 2, '듄: 파트2더보기', '부평점', '2관', '12:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (31, 2, '듄: 파트2더보기', '부평점', '2관', '19:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (31, 2, '듄: 파트2더보기', '부평점', '2관', '21:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (31, 3, '밥 말리: 원 러브', '부평점', '3관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (31, 4, '원 앤 온리', '부평점', '4관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (31, 5, '윙카', '부평점', '5관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (31, 6, '메이 디셈버', '부평점', '6관', '17:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');
    -- 부평점 끝


    -- 부평갈산점 시작
        INSERT INTO IM_PLACE (place_num, movie_id, movie_title, place_title, theater_id, movie_time, start_time, end_time, open_time, close_time)
        VALUES
        (38, 1, '파묘', '부평갈산점', '1관', '9:00', '2024-03-24', '2024-03-24 11:00', '2024-02-22', '2024-04-03'),
        (38, 1, '파묘', '부평갈산점', '1관', '11:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (38, 1, '파묘', '부평갈산점', '1관', '18:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (38, 2, '듄: 파트2더보기', '부평갈산점', '2관', '12:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (38, 2, '듄: 파트2더보기', '부평갈산점', '2관', '19:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (38, 2, '듄: 파트2더보기', '부평갈산점', '2관', '21:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (38, 3, '밥 말리: 원 러브', '부평갈산점', '3관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (38, 4, '원 앤 온리', '부평갈산점', '4관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (38, 5, '윙카', '부평갈산점', '5관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (38, 6, '메이 디셈버', '부평갈산점', '6관', '17:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');
    -- 부평갈산점 끝


    -- 부평역사점 시작
        INSERT INTO IM_PLACE (place_num, movie_id, movie_title, place_title, theater_id, movie_time, start_time, end_time, open_time, close_time)
        VALUES
        (40, 1, '파묘', '부평역사점', '1관', '9:00', '2024-03-24', '2024-03-24 11:00', '2024-02-22', '2024-04-03'),
        (40, 1, '파묘', '부평역사점', '1관', '11:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (40, 1, '파묘', '부평역사점', '1관', '18:00', '2024-03-24', '2024-03-24 14:24', '2024-02-22', '2024-04-03'),
        (40, 2, '듄: 파트2더보기', '부평역사점', '2관', '12:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (40, 2, '듄: 파트2더보기', '부평역사점', '2관', '19:40', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (40, 2, '듄: 파트2더보기', '부평역사점', '2관', '21:30', '2024-03-24', '2024-03-24 21:14', '2024-02-28', '2024-04-03'),
        (40, 3, '밥 말리: 원 러브', '부평역사점', '3관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (40, 4, '원 앤 온리', '부평역사점', '4관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (40, 5, '윙카', '부평역사점', '5관', '20:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03'),
        (30, 6, '메이 디셈버', '부평역사점', '6관', '17:30', '2024-03-24', '2024-03-24 23:59', '2024-03-13', '2024-04-03');
    -- 부평역사점 끝

    
    -- 관람평 시작  
        drop table im_review;
        CREATE TABLE im_review (
            review_num      INT             PRIMARY KEY AUTO_INCREMENT, -- 후기코드(PK)
            movie_id        VARCHAR(50)     NOT NULL,                   -- 영화코드(FK)
            cus_id          VARCHAR(50)     NOT NULL,                   -- 회원ID(FK)
            review_star     INT             NOT NULL,                   -- 후기별점
            review_contents TEXT            NOT NULL,                   -- 후기내용
            review_date     DATETIME        DEFAULT CURRENT_TIMESTAMP  -- 작성일
        );
    -- 관람평 끝
-- page_2 이민진 시작

-- page_3 오가연 시작

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
        item_price       INT NOT NULL,				 -- 상품 소비자 가격
        item_sale_price  INT NOT NULL,				 -- 상품 할인 가격
        item_image       VARCHAR(255) NOT NULL,			 -- 상품 이미지
        item_exp         VARCHAR(50) NOT NULL			 -- 상품 유효기간
    );
    -- 베스트
    INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
    VALUES ('베스트', 'IM봄_패키지', '2D 일반관람권 2매', 26000, 22000, 'static/media/IM_package1.d2c39118eec38e226bfb.png', '온라인 관람권 6 개월');
    INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
    VALUES ('베스트', 'IM,와봄?_패키지', '2D영화관람권 2매 + 교환권 1매', 36000, 28000, 'static/media/IM_package2.33dafcf4bdbd74f9d43b.png', '온라인 관람권 6 개월');
    INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
    VALUES ('베스트', 'IMPICK♥ [브레드이발소] 2인관람권', '<브레드이발소:셀럽in베이커리타운> 전용 2D영화관람권 2매', 26000, 16000, 'static/media/IM_package3.eada1987a3778161fd74.png', '   온라인 관람권 3 개월');
    -- 관람권
    INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
    VALUES ('관람권', '일반 관람권', '일반 관람권 1매', 13000, 13000, 'static/media/IM_ticket1.d488356654e4694c8166.png', '온라인 관람권 24 개월');
    INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
    VALUES ('관람권', 'IM 관람권', 'IM 관람권 1매', 35000, 35000, 'static/media/IM_ticket2.83ecd6dccef900f28329.png', '온라인 관람권 24 개월');
    -- 스낵음료
    INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
    VALUES ('스낵음료', '스위트콤보', '오리지널L + 탄산음료M2', 10000, 10000, 'https://cf.lottecinema.co.kr//Media/WebAdmin/113c4f562c6e4c9d94e973b590f594ab.jpg', '온라인 상품권 24 개월');
    INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
    VALUES ('스낵음료', '더블콤보', '오리지널팝콘M2+탄산음료M2', 14000, 14000, 'static/media/foods2.3dfafdd30be33b0dd8ef.jpg', '온라인 관람권 24 개월');
    INSERT INTO IM_STORE_ITEM(item_type, item_name, item_detail, item_price, item_sale_price, item_image, item_exp)
    VALUES ('스낵음료', '콜라 M', '콜라M', 3000, 3000, 'static/media/foods3.d9c9241c7342615ee2b2.jpg', '온라인 관람권 24 개월');



    SELECT * FROM IM_STORE_ITEM;
    ----------------------------------------------------------------------------------------------------------
    -- 스토어 선물하기
    DROP TABLE IF EXISTS IM_STORE_GIFT;
    CREATE TABLE IM_STORE_GIFT (
        gift_num         INT AUTO_INCREMENT PRIMARY KEY,  -- 선물 번호
        item_name        VARCHAR(50) NOT NULL,			 -- 상품명
        gift_recipient   VARCHAR(50) NOT NULL, -- 받는 사람
        gift_name        VARCHAR(20) NOT NULL, --  보내는 사람
        gift_content     VARCHAR(255) NOT NULL, -- 내용
        gift_count       INT NOT NULL, -- 수량
        ic_code	         VARCHAR(50) NOT NULL,
        detail_regDate       DATE DEFAULT CURRENT_TIMESTAMP
    );


    INSERT INTO IM_STORE_GIFT (item_name, gift_recipient, gift_name, gift_content, gift_count, ic_code)
    VALUES 'IM봄_패키지', '홍길동', '홍길순', '선물입니다.', 1, '12fe24st');


    SELECT * FROM IM_STORE_GIFT;




    -- 스토어 주문 테이블
    DROP TABLE IF EXISTS IM_STORE_ORDER;
    CREATE TABLE IM_STORE_ORDER (
        order_code INT AUTO_INCREMENT PRIMARY KEY,
        c_email    VARCHAR(50) NOT NULL
    );
    INSERT INTO IM_STORE_ORDER (order_code, c_email)
      VALUES (1, 'hong@naver.com');
    SELECT * FROM IM_STORE_ORDER
     WHERE order_code = 1;
     SELECT * FROM IM_STORE_ORDER;


    -- 스토어 주문 상세 테이블
    DROP TABLE IF EXISTS IM_STORE_ORDER_DETAIL;
    CREATE TABLE IM_STORE_ORDER_DETAIL (
        detail_code    INT AUTO_INCREMENT PRIMARY KEY,
        item_code      INT NOT NULL,
        item_name      VARCHAR(50) NOT NULL,
        detail_price   INT NOT NULL,
        detail_qty     INT NOT NULL,
        detail_regDate DATE DEFAULT CURRENT_TIMESTAMP
    );
    INSERT INTO IM_STORE_ORDER_DETAIL (item_code, item_name, detail_price, detail_qty)
    VALUES (1, 'IM봄_패키지', 22000, 1);


    ---------------------------------------
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

-- page_3 오가연 끝


--page_4 정호진 시작

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

    -- 관리자 권한 주기
    UPDATE IM_Customer SET role = "ROLE_ADMIN" WHERE id = "admin@ict.com";

    
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

--page_4 정호진 끝


-- page_5 김주희 시작

    -- [ 영화 홈 TABLE ]-----------
    DROP TABLE IM_MOVIE CASCADE;
    CREATE TABLE IM_MOVIE (
        movie_id        INT          AUTO_INCREMENT PRIMARY KEY, -- 영화코드(PK)
        mov_image       VARCHAR(500) NOT NULL,                   -- 이미지
        mov_title       VARCHAR(50)  NOT NULL,                   -- 제목
        mov_date        DATE         NOT NULL,                   -- 개봉일
        mov_time        VARCHAR(50)  NOT NULL,                   -- 상영시간
        mov_age         VARCHAR(50)  NOT NULL,                   -- 연령제한
        mov_visitor     VARCHAR(50)  NOT NULL,                   -- 관람객수
        mov_contents    LONGTEXT     NOT NULL,                   -- 영화내용
        mov_con         VARCHAR(50)  NOT NULL,                   -- 상세정보
        mov_pd			VARCHAR(50)	 NOT NULL,			-- 감독
        mov_cast		VARCHAR(200)	 NOT NULL,				-- 출연진
        mov_image2       VARCHAR(500) NOT NULL,                   -- 이미지2 
        mov_image3       VARCHAR(500) NOT NULL,                   -- 이미지3 
        mov_trailer1     VARCHAR(500) NOT NULL,                   -- 트레일러1
        mov_trailer2     VARCHAR(500) NOT NULL,                   -- 트레일러2
        mov_category     VARCHAR(50) NOT NULL				-- 항목
    );


    -- 영화 홈
    -- 현재 상영작
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
        VALUES ('파묘', 'movie1.jpg','2024.02.22','134','15세이상관람가','851.7만명','영화 내용을 입력하세요','미스터리 / 한국','장재현','최민식, 김고은, 유해진, 이도현','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','1');
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
     VALUES ('듄: 파트2','movie2.jpg','2024.02.28','165','12세이상관람가','139.3만명','영화 내용을 입력하세요','액션 / 미국','드니 빌뇌브',' 티모시 샬라메 ,젠데이아, 레베카 퍼거슨, 조슈 브롤린, 오스틴 버틀러, 플로렌스 퓨, 데이브 바티스타','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','1');
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
        VALUES ('가여운 것들', 'movie3.jpg','2024.03.06 ','141','18세이상관람가','8.7만명','영화 내용을 입력하세요','드라마, 코미디, 멜로/로맨스 / 미국','요르고스 란티모스',' 엠마 스톤, 마크 러팔로, 윌렘 대포, 라미 유세프, 제로드 카마이클','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','1');
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
     VALUES ('윙카', 'movie4.jpg','2024.01.31 ','116','전체관람가','342.0만명','영화 내용을 입력하세요','판타지, 드라마 / 미국','폴 킹',' 티모시 샬라메, 칼라 레인, 올리비아 콜맨, 톰 데이비스, 휴 그랜트, 샐리 호킨스','트레일러 링크를 입력하세요','이미지1','이미지2','트레일러 링크를 입력하세요','1');
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
        VALUES ('패스트 라이브즈', 'movie5.jpg','2024.03.06 ','105','12세이상관람가','7.3만명','영화 내용을 입력하세요','드라마 / 미국','셀린 송',' 그레타 리, 유태오, 존 마가로','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','1');



    -- 상영 예정작
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
     VALUES ('밥 말리:원 러브', 'movie6.jpg','2024.03.13 ','107','15세이상관람가','1.5만명','영화 내용을 입력하세요','드라마 / 미국','레이날도 마커스 그린',' 킹슬리 벤-어디어, 라샤나 린치, 제임스 노튼','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','2');
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
        VALUES ('랜드 오브 배드', 'movie7.jpg','2024.03.13 ','113','15세이상관람가','9,971명','영화 내용을 입력하세요','액션, 전쟁 / 미국','윌리엄 유뱅크','러셀 크로우, 리암 헴스워스, 루크 헴스워스, 마일로 벤티밀리아, 리키 휘틀','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','2');
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
        VALUES ('메이 디셈버', 'movie8.jpg','2024.02.22 ','117','18세이상관람가','1.5만명','영화 내용을 입력하세요','드라마 / 미국','토드 어드벤쳐, SF / 미국','S.J. 클락슨','다코타 존슨, 시드니 스위니, 이사벨라 메르세드, 셀레스트 오코너, 타하르 라힘','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','2');
    -- 아르떼헤인즈',' 나탈리 포트만, 줄리안 무어, 찰스 멜튼','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','2');
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
     VALUES ('원 앤 온리', 'movie9.jpg','2024.03.13 ','124','12세이상관람가','2,518명','영화 내용을 입력하세요','드라마 / 중국','동성붕',' 왕이보, 황보, 페이','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','2');

    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
        VALUES ('마담 웹', 'movie10.jpg','2024.03.13 ','116','12세이상관람가','5,610명','영화 내용을 입력하세요','액션, 어드벤쳐, SF / 미국','S.J. 클락슨','다코타 존슨, 시드니 스위니, 이사벨라 메르세드, 셀레스트 오코너, 타하르 라힘','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','2');

    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
     VALUES ('메이 디셈버', 'movie8.jpg','2024.02.22 ','117','18세이상관람가','1.5만명','영화 내용을 입력하세요','드라마 / 미국','토드 헤인즈',' 나탈리 포트만, 줄리안 무어, 찰스 멜튼','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','3');
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
     VALUES ('소풍', 'movie12.jpg','2024.02.07 ','113','12세이상관람가','33.5만명','영화 내용을 입력하세요','드라마 / 한국','김용균',' 나문희, 김영옥, 박근형, 류승수, 이항나','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','3');
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
     VALUES ('레이니 데이 인 뉴욕', 'movie13.jpg','2024.03.13 ','92','15세이상관람가','9.3만명','영화 내용을 입력하세요','
    멜로/로맨스미국','우디 앨런',' 티모시 샬라메, 엘르 패닝, 셀레나 고메즈, 주드 로, 디에고 루나, 리브 슈라이버','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','3');
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
        VALUES ('추락의 해부', 'movie14.jpg','2024.01.31 ','151','15세이상관람가','9.1만명','영화 내용을 입력하세요','드라마, 스릴러 / 프랑스','쥐스틴 트리에','산드라 휠러, 스완 아를로, 밀로 마차도 그라너','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','3');
    INSERT INTO IM_MOVIE (mov_title, mov_image,mov_date, mov_time,mov_age,mov_visitor,mov_contents,mov_con,mov_pd,mov_cast,mov_image2,mov_image3,mov_trailer1,mov_trailer2,mov_category)
        VALUES ('조용한 이주', 'movie15.jpg', '2024.03.20 ','103','12세이상관람가','708명','영화 내용을 입력하세요','드라마 / 기타','말레나 최',' 코르넬리우스 원 리델클라우센','이미지1','이미지2','트레일러 링크를 입력하세요','트레일러 링크를 입력하세요','3');
-- page_5 김주희 끝


-- page_6 김창해 시작


    -- 쿠폰 테이블
    DROP TABLE IF EXISTS IM_COUPON CASCADE;
    CREATE TABLE IM_COUPON(
        ic_num		INTEGER 		AUTO_INCREMENT   PRIMARY KEY,
        ic_code		VARCHAR(50)		NOT NUll, -- 쿠폰 코드
        ic_name	VARCHAR(50)		NOT NULL, -- 쿠폰 이름
        ic_img		VARCHAR(255)   	, -- 쿠폰 이미지
        ic_category 	VARCHAR(50)    	NOT NULL, -- 쿠폰 카테고리
        ic_point        	INTEGER       		NOT NULL, -- 쿠폰 포인트
        ic_content	TEXT		   	, -- 쿠폰 내용
        ic_startDate	DATE           		NOT NULL, -- 쿠폰 사용 시작일
        ic_endDate	DATE           		NOT NULL, -- 쿠폰 사용 마감일
        ic_regDate	DATE           		DEFAULT CURRENT_TIMESTAMP,
        ic_status	CHAR(1)        		DEFAULT 'y', -- 쿠폰 사용가능여부
        ic_show	CHAR(1)        		DEFAULT 'y'
    );
    SELECT * FROM IM_COUPON;
    SELECT * FROM IM_COUPON WHERE ic_num = 1;
    select * from IM_PayMent where IC_Email = 'test2@naver.com';
    insert into IM_COUPON(ic_code, ic_name, ic_category, ic_point, ic_startDate, ic_endDate)
     values('102403201', '새학기 영화 쿠폰', '영화', 10000, '2024-04-20');


    -- 고객 쿠폰 테이블
    DROP TABLE IF EXISTS IM_CUS_COUPON CASCADE;
    CREATE TABLE IM_CUS_COUPON(
        ic_num		INTEGER		AUTO_INCREMENT PRIMARY KEY, 
        c_email		VARCHAR(50)    	NOT NULL, 
        ic_code		VARCHAR(50)	   	NOT NULL,
        ic_name	VARCHAR(50)    	NOT NULL,
        ic_category	VARCHAR(50)    	NOT NULL,
        ic_point		INTEGER        		NOT NULL,
        ic_startDate	DATE           		NOT NULL, 
        ic_endDate	DATE           		NOT NULL, 
        ic_regDate	DATE           		DEFAULT CURRENT_TIMESTAMP,
        ic_status	CHAR(1)        		DEFAULT 'y',
        ic_show	CHAR(1)        		DEFAULT 'y'
    );
    SELECT * FROM IM_CUS_COUPON;
    insert into IM_CUS_COUPON(c_email, ic_code, ic_name, ic_category, ic_point, ic_useDate)
        values('test2@naver.com', 1020240310, '쿠폰3', '영화', 10000, '2024-04-19');
    insert into IM_CUS_COUPON(c_email, ic_num, ic_name, ic_category, ic_sale, ic_useDate)
     values('qwer@asdf.com', 2, '쿠폰2', '영화', 10000, NOW());
    insert into IM_CUS_COUPON(c_email, ic_num, ic_name, ic_category, ic_sale, ic_useDate)
     values('zxcv@asdf.com', 3, '쿠폰3', '영화', 10000, NOW());
    commit;
    UPDATE IM_CUS_COUPON
     SET ic_name = '쿠쿠폰폰'
     WHERE ic_num = 1;
    DELETE FROM IM_CUS_COUPON
        WHERE ic_num = 3;


    -- 1:1 문의
    DROP TABLE IF EXISTS IM_BOARD CASCADE;
    CREATE TABLE IM_BOARD(
        one_id		INT 			AUTO_INCREMENT PRIMARY KEY,
        c_email		VARCHAR(50)    	NOT NULL,
        cus_name	VARCHAR(50)   	NOT NULL,
        ib_type		VARCHAR(50)    	NOT NULL,
        ib_type_detail  	VARCHAR(50)    	NOT NULL,
        ib_title		VARCHAR(50)    	NOT NULL,
        ib_content	TEXT           		NOT NULL,
        ib_date		TIMESTAMP      	DEFAULT CURRENT_TIMESTAMP,
        ib_show	CHAR(1)        		DEFAULT 'y'
    );
    SELECT * FROM IM_BOARD;


    insert into IM_BOARD(c_email, cus_name, ib_type, ib_type_detail, ib_title, ib_content)
        values('asdf@asdf.com', '공주', '영화관', '영화관 좌석', '영화관 좌석이 불편해요', '영화관 좌석이 불편해요 너무너무.');
    insert into IM_BOARD(c_email, cus_name, ib_type, ib_type_detail, ib_title, ib_content, ib_date, ib_show)
     values('asdf@asdf.com', '공주', '영화관', '영화관 좌석', '영화관 좌석이 불편해요', '영화관 좌석이 불편해요 너무너무.', DEFAULT, DEFAULT);
    insert into IM_BOARD(one_id, c_email, cus_name, ib_type, ib_type_detail, ib_title, ib_content)
     values('asdf@asdf.com', '공주', '영화관', '영화관 좌석', '영화관 좌석이 불편해요', '영화관 좌석이 불편해요 너무너무.');
    commit;


    UPDATE IM_BOARD
        SET ib_type = '스토어'
        WHERE c_eamil = 'asdf@asdf.com';

    DELETE FROM IM_BOARD
        WHERE one_id = 1;
-- page_6 김창해 끝





































-- My 영화관
DROP TABLE IF EXISTS IM_MY_THEATER CASCADE;
CREATE TABLE IM_MY_THEATER (
it_no			INT			PRIMARY KEY AUTO_INCREMENT,
c_email			VARCHAR(50) 		NOT NULL,
ic_my_theater_1 	VARCHAR(50) 	,
ticketmap_no1		INT				,
ic_my_theater_2 	VARCHAR(50) 	,
ticketmap_no2		INT				,
ic_my_theater_3 	VARCHAR(50) 	,
ticketmap_no3		INT				
)
SELECT * FROM IM_MY_THEATER;
INSERT into IM_MY_THEATER(c_email, ic_my_theater_1, ticketmap_no1,  ic_my_theater_2, ticketmap_no2, ic_my_theater_3, ticketmap_no3)
values('test3@naver.com', '홍대입구', 1, '건대입구', 2,  '청량리', 3);








