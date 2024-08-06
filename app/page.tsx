"use client";

import { useFormState } from "react-dom";
import { HiFire } from "react-icons/hi2";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import { handleForm } from "./actions";

export default function Home() {
  const [state, action] = useFormState(handleForm, null);

  return (
    <main className="bg-gray-200 h-screen flex justify-center items-center">
      <div>
        <div className="flex justify-center mb-10">
          <HiFire color="#f76b8a" size="70" />
        </div>
        <form action={action}>
          <FormInput
            name="email"
            error={null}
            type="email"
            placeholder="Email"
          />
          <FormInput
            name="username"
            error={null}
            type="text"
            placeholder="Username"
          />
          <FormInput
            name="password"
            error={state?.error ?? null}
            type="password"
            placeholder="Password"
          />
          <FormButton success={state?.success ?? null} />
        </form>
      </div>
    </main>
  );
}
