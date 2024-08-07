"use client";

import { useFormState } from "react-dom";
import { HiFire } from "react-icons/hi2";
import Input from "@/components/input";
import Button from "@/components/button";
import { LogIn } from "./actions";

export default function Home() {
  const [state, action] = useFormState(LogIn, null);

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
            errors={state?.fieldErrors.email}
            type="email"
            placeholder="Email"
          />
          <Input
            required
            name="username"
            errors={state?.fieldErrors.username}
            type="text"
            placeholder="Username"
          />
          <Input
            required
            name="password"
            errors={state?.fieldErrors.password}
            type="password"
            placeholder="Password"
          />
          <Button success={state === undefined} />
        </form>
      </div>
    </main>
  );
}
