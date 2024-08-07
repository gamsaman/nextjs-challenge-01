import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoKey } from "react-icons/io5";
import { InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  errors?: string[];
}

export default function Input({
  name,
  errors = [],
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <div className="relative mt-4">
        {name === "email" ? (
          <MdEmail
            className="absolute top-1/2 left-3 -translate-y-1/2"
            color="gray"
          />
        ) : name === "username" ? (
          <FaUser
            className="absolute top-1/2 left-3 -translate-y-1/2"
            color="gray"
          />
        ) : name === "password" ? (
          <IoKey
            className="absolute top-1/2 left-3 -translate-y-1/2"
            color="gray"
          />
        ) : null}
        <input
          {...rest}
          name={name}
          className={`bg-transparent ${
            errors.length > 0
              ? "border-red-400 focus:ring-red-400"
              : "border-gray-400 focus:ring-gray-400"
          } border w-[450px] h-14 rounded-full pl-10 focus:outline-none ring-2 focus:ring-4 transition ring-transparent ring-offset-4 ring-offset-gray-200`}
        />
      </div>
      <ul>
        {errors.map((error, index) => (
          <li key={index} className="text-sm text-red-400 pl-2 mt-2">
            {error}
          </li>
        ))}
      </ul>
    </>
  );
}
