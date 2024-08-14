"use client";

import { useFormState } from "react-dom";
import { HiFire } from "react-icons/hi2";
import Input from "@/components/input";
import Button from "@/components/button";
import { logIn } from "./actions";
import { MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
  const [state, action] = useFormState(logIn, null);

  return (
    <form action={action} className="w-[450px]">
      <Input
        required
        name="email"
        type="email"
        placeholder="Email"
        errors={state?.fieldErrors.email}
      />
      <Input
        required
        name="password"
        type="password"
        placeholder="Password"
        minLength={MIN_LENGTH}
        errors={state?.fieldErrors.password}
      />
      <Button text="Log In" />
    </form>
  );
}
