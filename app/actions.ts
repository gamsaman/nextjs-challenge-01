"use server";

import db from "@/lib/db";

export async function getTweets(page: number) {
  const products = await db.tweet.findMany({
    select: {
      tweet: true,
      created_at: true,
      id: true,
    },
    take: 1,
    skip: page * 1,
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}

export async function getLessTweets(page: number) {
  const products = await db.tweet.findMany({
    select: {
      tweet: true,
      created_at: true,
      id: true,
    },
    take: -1,
    skip: page * 1,
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}
