import { useColors } from "../ColorProvider";
import Star from "../normal/components/Star";
const StarRating = ({ id,
    starsSelected = 0,
    totalStars = 5}
   )=>{
    const {rateColor} =useColors();
    return    (
        <div>
        {[...Array(totalStars)].map((n,i)=>(
            <Star 
            key={i}
            selected={i<starsSelected}
            onClick={()=>rateColor(id,i+1)}/>
        ))}
        
        <p>
              {starsSelected} of {totalStars} stars
            </p>
        </div>);
}
export default StarRating;