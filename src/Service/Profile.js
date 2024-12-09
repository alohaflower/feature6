import Parse from "parse";

export const getProfileByUser = async ( user ) => {
    const Profile = Parse.Object.extend("profile");
    const query = new Parse.Query(Profile);
    const User = Parse.Object.extend("_User");

    //query.equalTo("user", user);
    query.equalTo("user", {
        __type: "Pointer",
        className: "_User",
        objectId: user.id, 
    });
    query.include("user");

    let queryResults = await query.find();
    console.log('Query Results:');
    console.log(queryResults);

    /*
    const formattedResults = queryResults.map((result) => ({
        user: result.get("user"),
        id: result.get("id")
    })); */

    return queryResults;
}