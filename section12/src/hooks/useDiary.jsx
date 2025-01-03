import { useState, useEffect, useContext } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";


const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const nav = useNavigate();
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(()=>{
        const currentDiaryItem = data.find((item)=>String(item.id)===String(id));
        
        console.log(currentDiaryItem);
    
        if(!currentDiaryItem) {
          window.alert('존재하지 않는 일기 입니다.');
          nav('/', {replace:true});
        }
    
        setCurDiaryItem(currentDiaryItem);
    
      },[id])
      
    return curDiaryItem;    

}
export default useDiary;