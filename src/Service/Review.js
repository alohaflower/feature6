import Parse from "parse";
import { getProfileByUser } from "./Profile.js";

//get all reviews when given a plushie id
export const getReviews = async (id) => {
    const Review = Parse.Object.extend("reviews");
    const Plushie = Parse.Object.extend("plushies");
    const query = new Parse.Query(Review);

    const plushiePointer = new Plushie();
    plushiePointer.id = id;  
    query.equalTo("plushie", plushiePointer);
    query.include("profile");

    let queryResults = await query.find();

    console.log(queryResults);
    const formattedResults = queryResults.map((result) => ({
        body_text: result.get("body_text"),
        plushieId: result.get("plushie"),
        star_rating: result.get("star_rating"),
        username: result.get("profile")?.get("username")
    }));

    return formattedResults;
};

export const createReview = async ({ bodyText, plushieId, starRating, user }) => {
    const Review = Parse.Object.extend("reviews");
    const Profile = Parse.Object.extend("profile");
    const Plushie = Parse.Object.extend("plushies");
    const review = new Review();

    const plushiePointer = new Plushie();
    plushiePointer.id = plushieId;

    const queryResults = await getProfileByUser(user);

    review.set("body_text", bodyText);
    review.set("plushie", plushiePointer);
    review.set("star_rating", starRating);
    review.set("profile", queryResults[0]);

    const result = await review.save();

    return {
        id: result.id,
        body_text: result.get("body_text"),
        plushieId: result.get("plushie").id,
        star_rating: result.get("star_rating"),
        profileId: result.get("profile").id
    };
};
