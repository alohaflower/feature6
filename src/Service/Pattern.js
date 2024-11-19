
import Parse from "parse";

//get all patterns
export const getAllPatterns = async () => {
    const Pattern = Parse.Object.extend("plushies");
    const query = new Parse.Query(Pattern);
    let queryResults = await query.find();
    const formattedResults = queryResults.map((result) => ({
        id: result.id,
        imgName: result.get("imgName"),
        humanName: result.get("humanName"),
        animal: result.get("animal"),
        cost: result.get("cost"),
        description: result.get("description")
    }));

    return formattedResults;
};

//get one pattern based on id
export const getOnePattern = async (id) => {
    const Pattern = Parse.Object.extend("plushies");
    const query = new Parse.Query(Pattern);

    let result = await query.get(id);

    const formattedResult = {
        id: result.id,
        imgName: result.get("imgName"),
        humanName: result.get("humanName"),
        animal: result.get("animal"),
        cost: result.get("cost"),
        description: result.get("description")
    };

    const formattedResults = [formattedResult]
    return formattedResults;
};
