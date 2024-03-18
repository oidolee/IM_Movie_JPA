// components/Header.tsx
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: rgb(92, 130, 255);
  background: linear-gradient(
    90deg,
    rgba(157, 92, 255, 1) 0%,
    rgba(92, 130, 255, 1) 100%
  );
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;

  .ri-close-line,
  .ri-arrow-right-s-line {
    font-size: 1.5rem;
    color: #ffffff;
  }

  p {
    font-size: 1.6rem; /* 원하는 폰트 사이즈로 설정합니다. */
    font-weight: bold; /* 원하는 폰트 굵기로 설정합니다. */
    color: #ffffff; /* 원하는 폰트 색상으로 설정합니다. */
    margin: 0; /* 기본 마진을 제거합니다. */
  }
`;



function ChatHeader() {
  return (
    <HeaderContainer>
      <p>IM_Movie</p>
    </HeaderContainer>
  );
}

export default ChatHeader;