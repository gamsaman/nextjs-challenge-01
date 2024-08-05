"use client";
import { useFormStatus } from "react-dom";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-[#f76b8a] w-full h-14 rounded-full mt-10 text-white disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      Log in
    </button>
  );
}
