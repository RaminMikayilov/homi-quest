'use server'

import { profileSchema } from "./schemas";

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData);
        console.log(rawData)
        const validatedFields = profileSchema.parse(rawData);
        return {
            message: 'Profile created',
        }
    } catch (error) {
        console.error(error);
        return {
            message: 'Validation error',
        }
    }
};  