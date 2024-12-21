'use server'

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "./db";
import { profileSchema } from "./schemas";
import { redirect } from "next/navigation";

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const user = await currentUser();
        if (!user) throw new Error('Please login to create a profile');

        const rawData = Object.fromEntries(formData);
        const validatedFields = profileSchema.parse(rawData);
        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validatedFields,
            }
        })
        await clerkClient.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true,
            },
        });
    } catch (error) {
        console.error(error);
        return {
            message: 'Validation error',
        }
    }
    redirect('/profile');
};  