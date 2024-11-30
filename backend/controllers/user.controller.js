import User from "../models/user.model.js";

export const getUsersForSidebar = async(req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({
            _id : { $ne : loggedInUserId} // not equal to logged in user
        }).select("-password"); // pwds not displayed

        res.status(200).json(filteredUsers);
        console.log('done');
    }
    catch(error) {
        console.log("Error in getUsersForSideBar", error.message);
        res.status(500).json({error : "Internal server error"});
    }
}