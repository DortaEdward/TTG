import type { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
