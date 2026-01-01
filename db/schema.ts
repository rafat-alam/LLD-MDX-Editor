import { boolean, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable('user', {
  _id: text('_id').notNull().unique().primaryKey(),
  username: text('username').notNull().unique(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password_hash: text('password_hash').notNull(),
  last_active: timestamp("last_active", { withTimezone: true }).defaultNow().notNull(),
  reponame_list: text("reponame_list").array().default([]).notNull(),
});

export const nodeTypeEnum = pgEnum("node_type", ["FILE", "FOLDER"]);

export const dir = pgTable('dir', {
  node_id: text('node_id').notNull().unique().primaryKey(),
  node_name: text('node_name').notNull(),
  node_type: nodeTypeEnum('node_type').notNull(),
  is_public: boolean('is_public'),
  content: text('content'),
  owner_id: text('owner_id').notNull(),
  parent_id: text('parent_id').notNull(),
  last_updated: timestamp("last_updated", { withTimezone: true }).defaultNow().notNull(),
});

// npx drizzle-kit generate
// npx drizzle-kit migrate