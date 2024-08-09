import { useFormState } from "react-dom";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <p className="pb-2">계정이 없으신가요?</p>
        <Link href="/create-account" className="text-blue-500">
          계정 만들기&rarr;
        </Link>
      </div>
      <div className="text-center mt-6">
        <p className="pb-2">계정이 있으신가요?</p>
        <Link href="/log-in" className="text-blue-500">
          로그인하기&rarr;
        </Link>
      </div>
    </main>
  );
}
