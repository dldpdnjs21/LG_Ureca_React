import React, {useState} from "react";

function Counter2(props){
    // let cnt=0;
    const [cnt, setCnt ] = useState(0);

    return (
            <div>
                <p>총 {cnt}번 클릭했습니다.</p>
                <button onClick={()=>{ 
                    setCnt(cnt+1);
                    console.log('cnt=',cnt);
                } }>클릭하세요</button>

            </div>
    );
}

export default Counter2;