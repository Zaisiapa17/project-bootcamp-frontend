"use server";

import Satellite from "../satellite";

export const postRegister = async (body) => {
    try {
        const response = await Satellite.post("/auth/register", body);
        return response.data;  // Return the entire response object for better handling
    } catch (error) {
        console.error("Registration error:", error);
        return error.response || { status: 500, message: "Unknown error" };
    }
};
