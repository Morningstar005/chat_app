import User from "../models/user.model.js";

export const getUsersForSideBar=async(req,res)=>{
    try {
        const loggedInUserId = req.user._id;
        const allUser = await User.find({_id:{$ne:loggedInUserId}}).select("-password");
        if(!allUser) res.status(401).json({
            error:"Error occur in user controller"
        })
        res.status(200).json(allUser);
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}