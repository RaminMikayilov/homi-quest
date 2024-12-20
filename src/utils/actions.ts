'use server'

import db from "./db";
import { profileSchema } from "./schemas";

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData);
        console.log(rawData)
        const validatedFields = profileSchema.parse(rawData);

        await db.testProfile.create({
            data: {
                name: validatedFields.firstName,
            },
        });

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