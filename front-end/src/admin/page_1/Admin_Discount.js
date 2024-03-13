// Test_1.js
import React, { useState } from 'react';

function Test_1() {
    // useState를 사용하여 상태(state) 정의
    const [count, setCount] = useState(0);

    // 클릭 이벤트 핸들러
    const handleClick = () => {
        // count 상태 업데이트
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div class="container-fluid px-4">
            test_1
            {/* 상태(count)를 화면에 표시 */}
            <p>Count: {count}</p>
            {/* 버튼 클릭 시 handleClick 함수 호출 */}
            <button onClick={handleClick}>Increase Count</button>
        </div>
    );
}

export default Test_1;
