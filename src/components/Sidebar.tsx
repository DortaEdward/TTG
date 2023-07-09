import {
  MdDashboard,
  MdClear,
  MdMenu,
  MdGroup,
  MdPersonSearch,
} from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";


const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <DesktopSidebar path={router.asPath} />
      {
        openSidebar
          ?
          <MobileSidebar path={router.asPath} />
          :
          <></>
      }
      <div className="absolute bottom-5 left-[0.90rem] md:hidden z-20" onClick={() => setOpenSidebar((prev) => !prev)}>
        {
          openSidebar
            ?
            <MdClear
              size={36}
              className="cursor-pointer rounded-md bg-gray-200 p-1"
            />
            :
            <MdMenu
              size={36}
              className="cursor-pointer rounded-md bg-gray-200 p-1"
            />
        }

      </div>
    </div>
  );
};

type Props = {
  path: string
}

const DesktopSidebar = ({ path }: Props) => {
  return (
    <div className={`relative bg-neutral-950 hidden md:block h-full`}>
      <Link href={'/'} className="flex items-center justify-center w-full">
        <Image src="/logo.png" width={64} height={64} alt="TTG Logo" className="my-4" />
      </Link>
      <div className="w-56 text-gray-100">
        <Link href={'/'}
          className={`flex w-full items-center gap-2 ${path === "/dashboard" && "border-l-[6px] border-sky-600"
            } cursor-pointer bg-neutral-900 py-3 pl-3 hover:bg-neutral-700`}
        >
          <MdDashboard size={32} className="rounded-sm bg-red-400 p-1" />
          <p className="text-lg font-semibold">Dashboard</p>
        </Link>
        <Link href={'/dashboard/groups'}
          className={`flex w-full items-center gap-2 ${path === "/dashboard/groups" && "border-l-[6px] border-sky-600"
            } cursor-pointer bg-neutral-900 py-3 pl-3 hover:bg-neutral-700`}
        >
          <MdGroup size={32} className="rounded-sm bg-green-400 p-1" />
          <p className="text-lg font-semibold">Groups</p>
        </Link>
        <Link href={'/dashboard/find-players'}
          className={`flex w-full items-center gap-2 ${path === "/dashboard/find-players" && "border-l-[6px] border-sky-600"
            } cursor-pointer bg-neutral-900 py-3 pl-3 hover:bg-neutral-700`}
        >
          <MdPersonSearch size={32} className="rounded-sm bg-blue-400 p-1" />
          <p className="text-lg font-semibold">Find Players</p>
        </Link>
      </div>
    </div>
  )
}


const MobileSidebar = ({ path }: Props) => {
  return (
    <div className={`absolute left-0 top-0 bg-neutral-950/75 h-full md:hidden w-full`}>
      <div className="bg-neutral-950 w-16 h-full">
        <Link href={'/'} className="flex items-center justify-center w-full">
          <Image src="/logo.png" width={38} height={38} alt="TTG Logo" className="my-4" />
        </Link>
        <div className="w-16 text-gray-100">
          <Link href={'/'}
            className={`flex w-full items-center justify-center ${path === "/dashboard" ? "bg-neutral-800" : ''
              } cursor-pointer py-3 hover:bg-neutral-800`}
          >
            <MdDashboard size={32} className="rounded-sm bg-red-400 p-1" />
          </Link>
          <Link href={'/dashboard/groups'}
            className={`flex w-full items-center justify-center ${path === "/dashboard/groups" ? "bg-neutral-800" : ""
              } cursor-pointer py-3 hover:bg-neutral-800`}
          >
            <MdGroup size={32} className="rounded-sm bg-green-400 p-1" />
          </Link>
          <Link href={'/dashboard/find-players'}
            className={`flex w-full items-center justify-center ${path === "/dashboard/find-players" ? "bg-neutral-800" : ''
              } cursor-pointer py-3 hover:bg-neutral-800`}
          >
            <MdPersonSearch size={32} className="rounded-sm bg-blue-400 p-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
