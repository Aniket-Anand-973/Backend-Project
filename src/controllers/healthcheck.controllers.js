import { ApiResponse } from "../utils/api-response.js";
import {asyncHandler} from "../utils/async-handler.js";

const healthCheck = asyncHandler(async (req, res, next) => {
    try {
        // const user = await getUserFromDB();
        res
            .status(200)
            .json(new ApiResponse(200, {message: "Server is still running", user: undefined}));
    } catch (error) {
        next(error);
    }
});

export { healthCheck };