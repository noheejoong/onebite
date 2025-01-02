import './EmotionItem.css'
import { getEmotionImage } from '../util/get-emotion-img';

const EmotionItem = ({emotionId, emotionName, isSelected}) => {
    return (
        <div className={`EmotionItem ${isSelected?`EmotionItem_on_${emotionId}`:""}`}>
            <img className='emotion_img' src={`${getEmotionImage(emotionId)}`} />
            {emotionName}
        </div>
    )
}

export default EmotionItem;