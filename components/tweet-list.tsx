"use client";

import { InitialTweets } from "@/app/page";
import { useState } from "react";
import Tweet from "./tweet";
import { getTweets, getLessTweets } from "@/app/actions";

interface TweetListProps {
  initialTweets: InitialTweets;
}

export default function TweetList({ initialTweets }: TweetListProps) {
  const [tweets, setTweets] = useState(initialTweets);
  const [page, setPage] = useState(1);
  const [test, setTest] = useState(1);
  const onRightClick = async () => {
    const newTweets = await getTweets(page);
    if (newTweets.length !== 0) {
      setPage((prev) => prev + 1);
      setTweets((prev) => [...prev, ...newTweets]);
    }
  };

  const onLeftClick = async () => {
    const newTweets = await getLessTweets(test);
    if (newTweets.length !== 0) {
      setTest((prev) => prev + 1);
      setTweets((prev) => [...prev, ...newTweets]);
    }
  };

  return (
    <>
      <div className="max-w-5xl">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
      <div className="flex justify-center mt-10 gap-5">
        <button className="text-3xl" onClick={onLeftClick}>
          &lt;
        </button>
        <button className="text-3xl" onClick={onRightClick}>
          &gt;
        </button>
      </div>
    </>
  );
}
