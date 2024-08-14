"use client";

import Input from "../input";
import Button from "../button";
import { useFormState } from "react-dom";
import { uploadTweet } from "./actions";
import { useEffect } from "react";

export default function AddTweet() {
  const [state, action] = useFormState(uploadTweet, null);

  useEffect(() => {
    console.log("working");
  }, [action]);

  return (
    <form action={action} className="w-[500px] mb-16">
      <Input
        name="tweet"
        required
        placeholder="트윗 입력"
        type="text"
        errors={state?.fieldErrors.tweet}
      />
      <Button text="입력" />
    </form>
  );
}
