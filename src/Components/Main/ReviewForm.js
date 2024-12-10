import React from "react";
import Rating from '@mui/material/Rating';

const ReviewForm = ({ review, onChange, onSubmit }) => {
  return (
    <div>
                  <br></br>
      <form onSubmit={onSubmit}>
        <div>
          <Rating name="starRating" 
            size="small"
            defaultValue={2}
            value={review.starRating.toString()}
            onChange={onChange}
            />
        </div>
        <div>
          <label>Review: </label>
          <input
            type="text"
            value={review.bodyText}
            onChange={onChange}
            name="bodyText"
            required
          />
          <button type="submit" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
