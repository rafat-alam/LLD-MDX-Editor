import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  username: text('username').notNull().unique(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  lastactive: timestamp("lastactive", { withTimezone: true }).defaultNow().notNull(),
  repo_id_list: text("repo_id_list").array().default([]).notNull(),
});

// npx drizzle-kit generate
// npx drizzle-kit migrate