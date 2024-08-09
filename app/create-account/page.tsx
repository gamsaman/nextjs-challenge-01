"use client";

import { useFormState } from "react-dom";
import Input from "@/components/input";
import Button from "@/components/button";
import { createAccount } from "./actions";
import { MIN_LENGTH } from "@/lib/constants";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null);

  return (
    <form action={action}>
      <Input
        required
        name="email"
        type="email"
        placeholder="Email"
        errors={state?.fieldErrors.email}
      />
      <Input
        required
        name="username"
        type="text"
        placeholder="Username"
        minLength={MIN_LENGTH}
        errors={state?.fieldErrors.username}
      />
      <Input
        required
        name="password"
        type="password"
        placeholder="Password"
        minLength={MIN_LENGTH}
        errors={state?.fieldErrors.password}
      />
      <Button text="Create Account" />
    </form>
  );
}
