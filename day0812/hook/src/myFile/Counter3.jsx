import React, {useEffect, useState} from "react";

function Counter3(props){
    // let cnt=0;
    const [cnt, setCnt ] = useState(0);

    useEffect(()=>{
       //랜더링 내용 변경시 호출
       document.title= `이펙트 클릭 - ${cnt}번`;
       //브라우저 탭 제목 변경 
    });

    return (
            <div>
                <p>총 {cnt}번 클릭했습니다.</p>
                <button onClick={()=>{ 
                    setCnt(cnt+1);
                    console.log('cnt=',cnt);
                } }>플리즈 클릭</button>

            </div>
    );
}

export default Counter3;