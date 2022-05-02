import mongoose from "mongoose";

const DBConnection = async (DATABASE_URL) => {
    try {
        const DB_Option = {
            "dbName":'school',
        }
        await mongoose.connect(DATABASE_URL, DB_Option);
        console.log('Connected Successfully');
    }
    catch (e) {
        console.log(e);
    }
}

export default DBConnection