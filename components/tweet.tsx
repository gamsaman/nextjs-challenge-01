import Link from "next/link";
import { formatToTimeAgo } from "@/lib/utils";

interface TweetProps {
  id: number;
  tweet: string;
  created_at: Date;
}

export default function Tweet({ id, tweet, created_at }: TweetProps) {
  return (
    <div className="mt-5">
      <Link href={`/tweets/${id}`}>
        <p>{`${tweet.slice(0, 100)}...`}</p>
        <span>{formatToTimeAgo(created_at.toString())}</span>
      </Link>
    </div>
  );
}
