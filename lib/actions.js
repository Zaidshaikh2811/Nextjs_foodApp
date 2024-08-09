'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
    return !text || text.trim() == ''
}

export default async function shareMeal(prevState, formData) {
    'use server';

    const meal = {
        title: formData.get("title"),
        creator_email: formData.get("email"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
    }



    if (isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(meal.instructions)
        || isInvalidText(meal.creator) || isInvalidText(meal.creator_email) || !meal.creator_email.includes('@')
        || !meal.image || meal.image.size === 0
    ) {
        return {
            message: "Invalid Input."
        }
    }
    await saveMeal(meal);
    revalidatePath('/meals')
    redirect("/meals");

}