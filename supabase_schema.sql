-- 1. Create Storage Bucket for images
-- You will need to create a bucket named 'images' in your Supabase Storage manually or run this if your permissions allow
insert into storage.buckets (id, name, public) values ('images', 'images', true);

-- Policy to allow public read access to images
create policy "Public Access"
  on storage.objects for select
  using ( bucket_id = 'images' );

-- Policy to allow authenticated uploads (Admin only)
create policy "Authenticated Upload"
  on storage.objects for insert
  to authenticated
  with check ( bucket_id = 'images' );

-- 2. Create Tables

-- Hero Banners
create table public.hero_banners (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  image_url text not null,
  link text,
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Faculty (Teachers)
create table public.faculty (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  title text not null,
  description text,
  image_url text not null,
  details text, -- Rich text or markdown for bio
  expertise text[], -- Array of strings
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Courses
create table public.courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  image_url text not null,
  link text,
  button_text text default '查看線上課程',
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Activities
create table public.activities (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  image_url text not null,
  tag text default '活動',
  type text check (type in ('workshop', 'seminar', 'other')) default 'other',
  date timestamp with time zone,
  location text,
  fee text,
  registration_info text,
  registration_link text,
  show_registration boolean default false,
  gallery_images text[], -- Array of image URLs
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Enable Row Level Security (RLS)
alter table public.hero_banners enable row level security;
alter table public.faculty enable row level security;
alter table public.courses enable row level security;
alter table public.activities enable row level security;

-- 4. Create Policies
-- Allow public read access to all tables
create policy "Public Read Banners" on public.hero_banners for select using (true);
create policy "Public Read Faculty" on public.faculty for select using (true);
create policy "Public Read Courses" on public.courses for select using (true);
create policy "Public Read Activities" on public.activities for select using (true);

-- Allow authenticated users (Admins) to modify tables
create policy "Admin Modify Banners" on public.hero_banners for all to authenticated using (true);
create policy "Admin Modify Faculty" on public.faculty for all to authenticated using (true);
create policy "Admin Modify Courses" on public.courses for all to authenticated using (true);
create policy "Admin Modify Activities" on public.activities for all to authenticated using (true);
