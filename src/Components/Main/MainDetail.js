import {useEffect, useState, React} from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "../../Service/Review.js";
import { getOnePattern } from "../../Service/Pattern.js";
import { createReview } from "../../Service/Review.js";
import Button from '@mui/material/Button';
import ReviewForm from "./ReviewForm.js";
import Parse from "parse";
import styles from './main.module.css'; 
import Rating from '@mui/material/Rating';

const MainDetail = () => {
    const { id } = useParams();

    //NEXT STEP--> get username to show up by querying that in Review.js getReviews
    const initialReview = {
      bodyText: "",
      plushieId: id || "", 
      starRating: 1,
      user: Parse.User.current()
    };

    const [reviews, setReviews] = useState([]);
    const [patterns, setPatterns] = useState([]);
    const [showReviewCreate, setShowReviewCreate] = useState(false);
    const [currentReview, setCurrentReview] = useState(initialReview);
  
    useEffect(() => {
      getReviews(id).then((reviews) => {
        setReviews(reviews);
      });
      getOnePattern(id).then((patterns) => {
        setPatterns(patterns);
      });
    }, []);

    const reviewCreationToggle = () => {
      setShowReviewCreate(prevState => !prevState);
    }

    const onChangeHandler = (e) => {
      e.preventDefault();
      //console.log(e.target);
      const { name, value: newValue } = e.target;
  
      setCurrentReview({
        ...currentReview,
        [name]: newValue
      });
    };

    const onSubmitHandler = (e) => {
      e.preventDefault();
      currentReview.starRating = Number(currentReview.starRating);
      createReview(currentReview)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
    };

    return (
      // TODO, future work: make it so users can leave their own reviews on plushies!
        <div className={styles.ListStyle + " " + styles.MuktaFont}>
            <div>
                <Link to="/" classname={styles.PurpleFont}>Back</Link>
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
                    <p className={styles.UnlockFont}> ⭐ Reviews For {pattern.humanName} the {pattern.animal} ⭐ </p>
                  </div>
                  <hr width="36%" />
                </li>
            )}
            <p></p>
            <Button variant="outlined" color="secondary" onClick={reviewCreationToggle}>Add New Review</Button>
              <div>
                {showReviewCreate ? <ReviewForm 
                                        review={currentReview} 
                                        onChange={onChangeHandler} 
                                        onSubmit={onSubmitHandler}></ReviewForm> : <div></div>}
              </div>
              <br></br>
              {/* <hr width="36%" /> */}
            <div className={styles.MiddleWidthLeft}>
              {reviews.map(
                (review) =>
                  <li key={review.id}>
                    <div className={styles.MoveLeft}>
                      <span>{review.username} | </span>
                      <span> 
                      <Rating defaultValue={review.star_rating} size="small" readOnly /> </span>
                      <span> | {review.body_text} </span>
                    </div>
                  </li>
              )}
            </div>
        </div>
    );
};

export default MainDetail;

  