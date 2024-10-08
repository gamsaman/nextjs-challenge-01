import Link from "next/link";
import db from "@/lib/db";
import TweetList from "@/components/tweet-list";
import { Prisma } from "@prisma/client";
import AddTweet from "@/components/add-tweet/add-tweet";

async function getInitialTweets() {
  const tweets = await db.tweet.findMany({
    select: {
      id: true,
      tweet: true,
      created_at: true,
    },
    take: 1,
    orderBy: {
      created_at: "desc",
    },
  });

  return tweets;
}

export type InitialTweets = Prisma.PromiseReturnType<typeof getInitialTweets>;

export default async function Home() {
  const initialTweets = await getInitialTweets();

  return (
    <main>
      <AddTweet />
      <TweetList initialTweets={initialTweets} />
    </main>
  );
}
