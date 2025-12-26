import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql', // not "pg"
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_8iVjCApkFO7D@ep-dawn-thunder-ahtzrjt6-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  },
});