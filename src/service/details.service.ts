import Detail from "../models/Detail";

export const fetchDetails = async () => {
    try {
         const details = await Detail.find({});
         return details
    }catch(err) {
        throw err
    }
}