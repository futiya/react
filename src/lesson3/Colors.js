import { useColors } from "../ColorProvider";
import {FaTrash} from 'react-icons/fa';
import StarRating from "./StarRating";
const Colors = ({id,title,color,rating})=>{
    const {rateColor,removeColor}=useColors();
    return (<section>
        <h1>
            {title}
        </h1>
        <button onClick={() => removeColor(id)}>
            <FaTrash/>
        </button>
        <div style={{height:50,background:color }}>
        </div>
        <div><StarRating id={id} starsSelected={rating} onRate={rateColor}></StarRating></div>
    </section>);
}
export default Colors