import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoKey } from "react-icons/io5";

export default function FormInput({
  name,
  type,
  placeholder,
  error,
}: {
  name: string;
  type: string;
  placeholder: string;
  error: string | null;
}) {
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
          required
          type={type}
          placeholder={placeholder}
          name={name}
          className={`bg-transparent ${
            error
              ? "border-red-400 focus:ring-red-400"
              : "border-gray-400 focus:ring-gray-400"
          } border w-[450px] h-14 rounded-full pl-10 focus:outline-none ring-2 focus:ring-4 transition ring-transparent ring-offset-4 ring-offset-gray-200`}
        />
      </div>
      {error && <p className="text-sm text-red-400 mt-3 pl-2">{error}</p>}
    </>
  );
}
