import React, { useEffect, useReducer, useState } from "react";

const Eaxmple4 = () =>{
const [width,setWidth] = useState(window.innerWidth);
//addEventListener를 이용하여 이벤트를 등롟시 반드시 삭제이벤트도 함께 구현

useEffect(() => {
    const handleResize =() =>{
        setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () =>{
        window.removeEventListener("resize",handleResize);
    };
},[]);

return(
    <div>
        <h2>현재 창 너비: {width}px</h2>
    </div>
);
};
export default Eaxmple4;

// 브라우저의 크기의 변환을 나타내는 코드