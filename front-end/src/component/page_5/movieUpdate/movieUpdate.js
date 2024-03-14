import React, { useState } from 'react';
import style from "../../../styles/page_5/movieUpdate.module.css";

// 이미지
import trailer1 from "../../../assets/page_5_5/trailer1.png";
import trailer2 from "../../../assets/page_5_5/trailer2.png";


function MovieUpdate() {
  const [showModal, setShowModal] = useState(false); // 모달 창 열림/닫힘 상태
  const [selectedValue, setSelectedValue] = useState(1); // 선택된 값
  const [selectedTrailer, setSelectedTrailer] = useState("");

  const handleTrailerClick = (trailerUrl) => {
    setSelectedTrailer(trailerUrl);
    setShowModal(true); // 모달 창 열기
  };

  // 모달 창을 닫는 함수
  const handleCloseModal = () => {
    setShowModal(false); // 모달 창 닫기
  };

  // 탭 선택 핸들러
  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      // 이미지를 상태에 저장
      setImage(URL.createObjectURL(selectedImage));
    }
  };

  // 선택한 영상 파일을 상태로 관리
  const [videoFile, setVideoFile] = useState(null);

  // 영상 파일이 변경될 때 호출되는 함수
  const handleVideoChange = (event) => {
    const selectedVideo = event.target.files[0];
    // 선택한 파일이 있을 경우 상태 업데이트
    if (selectedVideo) {
      setVideoFile(selectedVideo);
    }
  };

  // 영상 파일 업로드 처리 함수
  const handleUpload = () => {
    // 여기서 영상 파일을 서버로 업로드하거나 다른 처리를 수행할 수 있음
    console.log('Uploaded video:', videoFile);
    // 업로드 후 상태 초기화
    setVideoFile(null);
  };

  
  return (
    <>
      <div className={`detail_movie_wrap ${style.detail_movie_wrap}`}>
      <div className="container">
        {/* 선택한 이미지 표시 */}
        {image && (
            <img
                src={image}
                alt="선택한 이미지"
                className="selected-image"
            />
        )}
    </div>

    {/* 파일 버튼 */}
        <input
            className="file-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            onClick={(event) => { event.target.value = null }} // 클릭 시 파일 선택창이 열리도록 하기 위해 추가
        />
          
          <div className={`detail_text ${style.detail_text}`}>
          <div className={`detail_title ${style.detail_title}`}>
            <input
                type="text"
                id="pp_name"
                name="pp_name"
                placeholder="영화 제목"
                className={`inputbox1 ${style.inputBox1}`} // CSS 클래스 추가
            />
            </div>

            
            <div className={`detail_con1 ${style.detail_con1}`}>
                <input type="date" id="de_date" name="de_date" />
                <input type="number" id="de_time" name="de_time" placeholder="상영시간"/> 
                <input type="text" id="de_age" name="de_age" placeholder="관람연령" />
                <input type="text" id="de_num" name="de_num" placeholder="관객수" />
            </div>
            

            <div id="section4" className={`detail_box ${style.detail_box}`}>
            <textarea className={`detail_con2 ${style.detail_con2}`} >
                미국 LA, 거액의 의뢰를 받은 무당 ‘화림’(김고은)과 '봉길’(이도현)은
                기이한 병이 대물림되는 집안의 장손을 만난다.
                조상의 묫자리가 화근임을 알아챈 ‘화림’은 이장을 권하고,
                돈 냄새를 맡은 최고의 풍수사 ‘상덕’(최민식)과 장의사
                ‘영근’(유해진)이 합류한다.

                “전부 잘 알 거야… 묘 하나 잘못 건들면 어떻게 되는지”
                절대 사람이 묻힐 수 없는 악지에 자리한 기이한 묘.
                ‘상덕’은 불길한 기운을 느끼고 제안을 거절하지만,
                ‘화림’의 설득으로 결국 파묘가 시작되고…

                나와서는 안될 것이 나왔다.
            </textarea>
            </div>

        <div className={`detail_down ${style.detail_down}`}>
          <button
            type="button"
            className={`tit ${style.tit} ${selectedValue === 1 ? style.StoreDetail_selectedTab : ''}`}
            onClick={() => handleSelect(1)}
            style={{ width: "50%", left: "0%", height: "70px" }}
          >
            <span>상세정보</span>
          </button>
          
          <div className={`detail_box1 ${style.detail_box1}`}>
            <label>영화정보</label>
            <p></p>
            <label>장르</label>
            <input type="text" className={`input_box2 ${style.input_box2}`}/>
            <p></p>
            <label>감독</label>
            <input type="text" className={`input_box2 ${style.input_box2}`}/>
            <p></p>
            <label>출연</label>
            <input type="text" className={`input_box2 ${style.input_box2}`}/>
         </div>
        </div>

        <div>
      {/* 영상 파일 업로드 입력 폼 */}
      <div className={`video_con ${style.video_con}`}>
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoChange}
      />
      {/* 업로드 버튼 */}
      <button onClick={handleUpload}>영상 업로드</button>
      {/* 선택한 영상 파일 정보 표시 */}
      {videoFile && (
        <div>
          <p>선택한 영상 파일: {videoFile.name}</p>
          <p>파일 크기: {videoFile.size} bytes</p>
        </div>
      )}
    </div>

        <div className={`btn_wrap2 ${style.btn_wrap2}`}>
            <button className={`detail_btn4 ${style.detail_btn4}`} id="confirmButton">
                확인
            </button>
            <button className={`detail_btn4 ${style.detail_btn4}`} id="resetButton" >
                초기화
            </button>
        </div>
        </div>
     </div>
     </div>
    </>
  );
}

export default MovieUpdate;
