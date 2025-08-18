"use server";

import { Redis } from "@upstash/redis";
import { REDIS_BOUNCE_COUNT_KEY } from "./constants";
import { revalidatePath } from "next/cache";

export async function bounce() {
  const redis = Redis.fromEnv();
  redis.incr(REDIS_BOUNCE_COUNT_KEY);

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/");
}
