import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(4, "Title must be at least 4 characters"),
  description: z
    .string()
    .min(4, "Description must be at least 4 characters")
    .max(800, "Description must be less then 800 characters"),
  location: z
    .string()
    .min(4, "Location must be at least 4 characters")
    .max(400, "Location must be less then 400 characters"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
