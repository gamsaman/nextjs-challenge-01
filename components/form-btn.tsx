"use client";
import { FaCheck } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function FormButton({ success }: { success: string | null }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button
          disabled
          className="bg-gray-400 w-full h-14 rounded-full mt-10 text-white disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
        >
          Loding...
        </button>
      ) : (
        <button className="bg-[#f76b8a] w-full h-14 rounded-full mt-10 text-white disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed">
          Log in
        </button>
      )}
      {success && (
        <div className="bg-green-500 flex items-center gap-4 h-20 rounded-2xl mt-4 px-4 justify-center">
          <FaCheck />
          <span>{success}</span>
        </div>
      )}
    </>
  );
}
