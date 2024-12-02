import React from "react";
import Rating from '@mui/material/Rating';

const ReviewForm = ({ review, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <Rating name="starRating" 
            size="small"
            defaultValue={2}
            value={review.starRating}
            onChange={onChange}
            />
        </div>
        <div>
          <label>Review:</label>
          <br />
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
