import {
  MdDashboard,
  MdClear,
  MdMenu,
  MdGroup,
  MdPersonSearch,
} from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div className="relative">
      <div className="h-full w-56 bg-neutral-950 text-gray-100">
        <Link href={'/'}
          className={`flex w-full items-center gap-2 ${
            router.asPath === "/dashboard" && "border-l-[6px] border-sky-600"
          } cursor-pointer bg-neutral-900 py-3 pl-3 hover:bg-neutral-700`}
        >
          <MdDashboard size={32} className="rounded-sm bg-red-400 p-1" />
          <p className="text-lg font-semibold">Dashboard</p>
        </Link>
        <Link href={'/dashboard/groups'}
          className={`flex w-full items-center gap-2 ${
            router.asPath === "/dashboard/groups" && "border-l-[6px] border-sky-600"
          } cursor-pointer bg-neutral-900 py-3 pl-3 hover:bg-neutral-700`}
        >
          <MdGroup size={32} className="rounded-sm bg-green-400 p-1" />
          <p className="text-lg font-semibold">Groups</p>
        </Link>
        <Link href={'/dashboard/find-players'}
          className={`flex w-full items-center gap-2 ${
            router.asPath === "/dashboard/find-players" && "border-l-[6px] border-sky-600"
          } cursor-pointer bg-neutral-900 py-3 pl-3 hover:bg-neutral-700`}
        >
          <MdPersonSearch size={32} className="rounded-sm bg-green-400 p-1" />
          <p className="text-lg font-semibold">Find Players</p>
        </Link>
      </div>
      <div className="absolute bottom-5 left-5 md:hidden">
        <MdMenu
          size={36}
          className="cursor-pointer rounded-md bg-gray-200 p-1"
        />
      </div>
    </div>
  );
};

export default Sidebar;
