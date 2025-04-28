"use server";

import { db } from "@/db/client";

export async function getUsers(count: number) {
  const users = await db.query.user.findMany({
    limit: count,
  });
  return users;
}
