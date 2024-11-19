import {useEffect, useState, React} from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "../../Service/Review.js";
import { getOnePattern } from "../../Service/Pattern.js";
  

const MainDetail = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [patterns, setPatterns] = useState([]);
  
    useEffect(() => {
      getReviews(id).then((reviews) => {
        setReviews(reviews);
      });
      getOnePattern(id).then((patterns) => {
        setPatterns(patterns);
      });
    }, []);

    return (
      // TODO, future work: make it so users can leave their own reviews on plushies!
        <div>
            <div>
                <Link to="/">Back</Link>
            </div>
            {patterns.map(
              (pattern) =>
                <li key={pattern.id}>
                   <img
                    src={require(`../../Images/${pattern.imgName}.jpeg`)}
                    width="225"
                    height="300"
                  />
                  <div>
                    <p> REVIEWS FOR: {pattern.humanName} the {pattern.animal} </p>
                  </div>
                </li>
            )}
            <p></p>
            {reviews.map(
              (review) =>
                <li key={review.id}>
                  <div>
                    <span> | {review.star_rating} ⭐</span>
                    <span> | {review.body_text} </span>
                  </div>
                </li>
            )}

        </div>
    );
};

export default MainDetail;

  