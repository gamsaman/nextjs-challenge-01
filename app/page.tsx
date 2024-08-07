"use client";

import { useFormState } from "react-dom";
import { HiFire } from "react-icons/hi2";
import Input from "@/components/input";
import Button from "@/components/button";
import { logIn } from "./actions";

const initalState = {
  success: false,
  error: null,
};

export default function Home() {
  const [state, action] = useFormState(logIn, initalState);

  return (
    <main className="bg-gray-200 h-screen flex justify-center items-center">
      <div>
        <div className="flex justify-center mb-10">
          <HiFire color="#f76b8a" size="70" />
        </div>
        <form action={action}>
          <Input
            required
            name="email"
            type="email"
            placeholder="Email"
            errors={state.error?.fieldErrors.email}
          />
          <Input
            required
            name="username"
            type="text"
            placeholder="Username"
            errors={state.error?.fieldErrors.username}
          />
          <Input
            required
            name="password"
            type="password"
            placeholder="Password"
            errors={state.error?.fieldErrors.password}
          />
          <Button success={state.success} />
        </form>
      </div>
    </main>
  );
}
