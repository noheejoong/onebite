import { useNavigate } from "react-router-dom";
import {getEmotionImage} from "../util/get-emotion-img"
import Button from "./Button";

const DiaryItem = ({id, createdDate, emotionId, content})=> {
    const nav = useNavigate();

    return (
        <div className="DiaryItem">
            <div onClick={()=>nav(`/diary/${id}`)}>
                <img src={getEmotionImage(emotionId)} />                
            </div>
            <div onClick={()=>nav(`/diary/${id}`)} className="info_section">
                <div className="created_date">
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className="content">{content}</div>
            </div>
            <div onClick={()=>nav(`/edit/${id}`)}>
                <Button text={"수정하기"} />
            </div>
        </div>
    )
}

export default DiaryItem;