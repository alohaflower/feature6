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

    //formatting results before returning
    //in the future, we could have users be allowed to make the reviews
    const formattedResults = queryResults.map((result) => ({
        body_text: result.get("body_text"),
        plushieId: result.get("plushie"),
        star_rating: result.get("star_rating")
    }));

    return formattedResults;
};
