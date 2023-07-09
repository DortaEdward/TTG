import type { PropsWithChildren } from "react";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import { MdMenu } from "react-icons/md";
const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <>
        <Head>
          <title>TTG - Next Generation Testing Groups</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </>
      <div className="relative flex h-screen">
        <Sidebar />
        {/* Content */}
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
