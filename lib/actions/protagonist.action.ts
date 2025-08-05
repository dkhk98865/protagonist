'use server';

import { auth } from '@clerk/nextjs/server';
import { createSupabaseClient } from '@/lib/supabase';

export const createProtagonist = async (formData: CreateProtagonist) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from('protagonists')  // ✅ Corrected: 'from' takes a string, not a named parameter
    .insert({ ...formData, author })  // ✅ Removed space after spread
    .select();

  if (error || !data) throw new Error(error?.message || 'Failed to create protagonist');

  return data[0];
};
