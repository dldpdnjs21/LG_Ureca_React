import React, { useState } from "react";

function MyMemo(props) {
    const [memo, setMemo] = useState("");
    const [memoList, setMemoList] = useState([]);

    const handleInputChange = (event) => {
        setMemo(event.target.value);
    };

    const handleAddMemo = () => {
        if (memo.trim()) {
            setMemoList([...memoList, memo]);
            setMemo("");
        }
    };

    return (
        <div>
            <h1>마이 메모장</h1>
            <h3>메모폼</h3>

            <input 
                value={memo}
                onChange={handleInputChange}
                placeholder="메모를 입력하세요."
            />

            <button onClick={handleAddMemo}>메모등록</button>

            <h3>메모목록</h3>
            <ul>
                {memoList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyMemo;