import { createClient } from '@supabase/supabase-js';

// Get these from your Supabase Dashboard -> Project Settings -> API
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.warn('Supabase URL or Key is missing. Please check your .env file.');
}

// Create the Supabase client
export const supabase = createClient(
  SUPABASE_URL || 'https://dummy.supabase.co',
  SUPABASE_KEY || 'dummy-key'
);

// Types will be inferred from the database schema or can be manually defined here
// For now, let's keep it simple with 'any' or define specific interfaces later
export interface Faculty {
  id: string;
  name: string;
  title: string;
  description: string;
  image_url: string;
  details?: string;
  expertise?: string[];
  created_at?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  link?: string;
  button_text?: string;
  created_at?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tag?: string;
  type?: 'workshop' | 'seminar' | 'other';
  date?: string;
  location?: string;
  fee?: string;
  registration_info?: string;
  registration_link?: string;
  show_registration?: boolean;
  gallery_images?: string[];
  created_at?: string;
}

export interface HeroBanner {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  link?: string;
  created_at?: string;
}
