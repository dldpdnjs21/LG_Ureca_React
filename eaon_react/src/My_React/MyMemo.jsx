// MyMemo.jsx

import { useState } from "react";

export default function MyMemo(props){

   const [memoContent, setMemoContent]=useState("");   //<input type=text>에 입력된 값 저장
   const [memoContents, setMemoContents]=useState([]); 

   function myCallback(event){//<input>에서 입력된 내용이 변경시 호출
    //   setMemoContent('abc');
      setMemoContent(event.target.value);
   }

   function myClickCallback(){
       //1. <input type=text>의 값을 배열에 입력!!
       // ==> state변수 memoContent에 저장되어 있음
       setMemoContents([...memoContents, memoContent] )  //배열값 변경(입력)

       //2. <input type=text>지우기 효과
       setMemoContent('');//입력된 메모텍스트를 삭제
   }

   return (
      <div>
          <h1>마이 메모장</h1>
          <div>
            <h2>메모 폼</h2>
            <input type="text" onChange={myCallback} value={memoContent}/>
            <button onClick={myClickCallback}>메모등록</button>
          </div>
          <hr />
          <div>
            <h2>메모 목록</h2>         
            <ul>
                {/* <li>마라탕</li>
                <li>젤리</li>
                <li>탕후루</li> */}
                {memoContents.map(  (value) =>   <li>{value}</li>   )}
            </ul>   
          </div>
      </div>
   );
}

// export default MyMemo;