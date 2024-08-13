import db from "@/lib/db";
import { notFound } from "next/navigation";

export async function getTweet(id: number) {
  const tweet = await db.tweet.findUnique({
    where: {
      id,
    },
  });
  return tweet;
}

export default async function TweetDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return notFound();
  }
  const tweet = await getTweet(id);

  return (
    <div className="max-w-5xl">
      <p>{tweet?.tweet}</p>
    </div>
  );
}
