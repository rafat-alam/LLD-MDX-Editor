ALTER TABLE "dir" ADD COLUMN "node_type" "node_type" NOT NULL;--> statement-breakpoint
ALTER TABLE "dir" ADD COLUMN "content" text;--> statement-breakpoint
ALTER TABLE "dir" ADD COLUMN "id_list" text[] DEFAULT '{}';--> statement-breakpoint
ALTER TABLE "dir" DROP COLUMN "file_folder";