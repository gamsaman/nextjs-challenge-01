import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoKey } from "react-icons/io5";

export default function FormInput({
  name,
  placeholder,
  type,
}: {
  name: string;
  placeholder: string;
  type: string;
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
          type={type}
          name={name}
          placeholder={placeholder}
          className="bg-transparent border-gray-400 border w-[450px] h-14 rounded-full pl-10 focus:outline-none ring-2 focus:ring-4 transition ring-transparent focus:ring-[#f76b8a] ring-offset-4 ring-offset-gray-200"
        />
      </div>
    </>
  );
}
