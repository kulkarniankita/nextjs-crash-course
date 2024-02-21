'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { z } from 'zod';
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export async function sellYourItemAction(prevState: any, formData: FormData) {
  console.log({ prevState });
  console.log(formData.get('name'));
  console.log(formData.get('description'));
  console.log(formData.get('price'));
  console.log(formData.get('imageUrl'));

  const schema = z.object({
    name: z.string().min(6),
    description: z.string().min(10),
    contactEmail: z.string().min(1).email('This is not a valid email address'),
    price: z.string().min(1),
    imageUrl: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, .png and .webp formats are supported.'
      ),
  });
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    contactEmail: formData.get('contactEmail'),
    price: formData.get('price'),
    imageUrl: formData.get('imageUrl'),
  });

  if (!validatedFields.success) {
    return {
      type: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Product.',
    };
  }

  const { name, description, price, imageUrl, contactEmail } =
    validatedFields.data;

  try {
    const fileName = `${Math.random()}-${imageUrl.name}`;

    const supabase = createServerActionClient({ cookies });
    const { data, error } = await supabase.storage
      .from('storage')
      .upload(fileName, imageUrl, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      return {
        type: 'error',
        message: 'Database Error: Failed to Upload Image.',
      };
    }

    if (data) {
      const path = data.path;

      const { data: products } = await supabase
        .from('easysell-products')
        .insert({ name, description, price, imageUrl: path, contactEmail });

      console.log({ products });
    }
  } catch (e) {
    return {
      type: 'error',
      message: 'Database Error: Failed to Create Product.',
    };
  }

  revalidatePath('/');
  redirect('/');
}
