import StuModel from "../model/StudentSchema.js";

class StudentController {
    static getStudent = async (req, res) => {
        try {
            const result = await StuModel.find()
            res.send(result)
        }
        catch (err) {
            console.log(err);
        }
    }
}

export default StudentController