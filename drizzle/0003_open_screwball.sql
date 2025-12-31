CREATE TYPE "public"."node_type" AS ENUM('FILE', 'FOLDER');--> statement-breakpoint
CREATE TABLE "dir" (
	"node_id" text PRIMARY KEY NOT NULL,
	"node_name" text NOT NULL,
	"file_folder" "node_type" NOT NULL,
	"parent_id" text NOT NULL,
	"last_updated" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "dir_node_id_unique" UNIQUE("node_id")
);
