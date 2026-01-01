ALTER TABLE "user" RENAME COLUMN "_id" TO "user_id";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "user__id_unique";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_user_id_unique" UNIQUE("user_id");