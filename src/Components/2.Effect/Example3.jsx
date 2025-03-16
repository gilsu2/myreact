import React, {useEffect, useReducer, useState} from "react";
import { useFormState } from "react-dom";

const Example3 =()=>{
    const [data,setData] = useState(null);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        sendAPI().then((response)=>{
            console.log("서버로부터 응답 도착");
            setData(response);
            setLoading(false);
        })
    },[]);

    return(
    <div>{loading ? <p>로딩 중...</p>: <p>데이터:{data.title}</p>}</div>
    );
};

const sendAPI =() =>{
    // ajax 또는 axios르르 이용하여 rest api 코드를 작성하는 부분
    // 지금은 3초뒤에 데이터를 리턴하는 토드를 대신함
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({title: "게시판제목"});
        },3000); //3초후에 resolve함수를 호출함
    });
};
 export default Example3;

 // 데이터를 가져오는 시간지정후 불러오는 코드