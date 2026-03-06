import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, index } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const sentryProject = pgTable(
  "sentry_project",
  {
    id: text("id").primaryKey(), 
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    sentryId: text("sentry_id").notNull(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    platform: text("platform"),
    dateCreated: text("date_created"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("sentry_project_userId_idx").on(table.userId)]
);

export const sentryProjectRelations = relations(sentryProject, ({ one }) => ({
  user: one(user, {
    fields: [sentryProject.userId],
    references: [user.id],
  }),
}));
