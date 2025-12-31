ALTER TABLE "user" RENAME COLUMN "id" TO "_id";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "password" TO "password_hash";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "lastactive" TO "last_active";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "repo_id_list" TO "reponame_list";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "user_id_unique";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user__id_unique" UNIQUE("_id");