// AttendanceBook.jsx
import { useState } from "react";

const students = [
    {no1:1, name:'이예원'},
    {no1:2,name:'심승보'},
    {no1:3,name:'김윤일'},
    {no1:4,name:'원동현'},
];

function NameForm(props){
    const [userName, setUserName] = useState('');

    //이름 입력(에 대한 처리) 콜백 함수
    const handleChange=(event)=>{
        //event.target ==> 이벤트를 발생시킨 엘리먼트 객체
        //여기의 경우 <input type=text>)
        console.log('입력된 이름=', event.target.value);
        setUserName(event.target.value);
    }
    //이름 제출(에 대한 처리) 콜백 처리함수
    const handleSubmit=(event)=>{
        //제출된 이름을 출력
        alert(`입력한 이름: ${userName}`);
        //event.preventDefault());
        //submit기능 중지(비활성화)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름: <input type="text" value={userName} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

function AttendanceBook(props){

    return(
        <>
            <ul>
                {/* <li>이예원</li>
                <li>심승보</li>
                <li>김윤일</li>
                <li>원동현</li> */}
                {
                    // students.map((student)=> {return <li>{student.name}</li>;})
                    // students.map((student,iddx)=> {<li key = {idx}>{student.name}</li>;})
                    students.map((student)=> <li key={student.no}>{student.name}</li>)
                    //목록에 출력되는 student에 식별 no 값을 key로 정한다.
                }
            </ul>
            <hr />
            <NameForm/>
        </>
    );
}

export default AttendanceBook;