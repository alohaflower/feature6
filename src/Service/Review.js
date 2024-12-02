import Parse from "parse";

//get all reviews when given a plushie id
export const getReviews = async (id) => {
    const Review = Parse.Object.extend("reviews");
    const Plushie = Parse.Object.extend("plushies");
    const query = new Parse.Query(Review);

    const plushiePointer = new Plushie();
    plushiePointer.id = id;  
    query.equalTo("plushie", plushiePointer);

    let queryResults = await query.find();

    const formattedResults = queryResults.map((result) => ({
        body_text: result.get("body_text"),
        plushieId: result.get("plushie"),
        star_rating: result.get("star_rating")
    }));

    return formattedResults;
};

export const createReview = async ({ bodyText, plushieId, starRating }) => {
    const Review = Parse.Object.extend("reviews");
    const Plushie = Parse.Object.extend("plushies");
    const review = new Review();

    const plushiePointer = new Plushie();
    plushiePointer.id = plushieId;

    review.set("body_text", bodyText);
    review.set("plushie", plushiePointer);
    review.set("star_rating", starRating);

    const result = await review.save();

    return {
        id: result.id,
        body_text: result.get("body_text"),
        plushieId: result.get("plushie").id,
        star_rating: result.get("star_rating"),
    };
};
