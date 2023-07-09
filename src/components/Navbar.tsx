import { MdExpandMore, MdExpandLess, MdLogout } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="min-w-screen relative flex items-center justify-center bg-[#1f5c78] px-10 py-3 text-gray-100 shadow-md">
      <div className="flex w-full max-w-[1024px] items-center justify-between">
        <Link href={session ? "/dashboard" : "/"}>
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            alt="Logo"
            className="aspect-auto"
          />
        </Link>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => signIn()}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;