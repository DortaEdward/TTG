import DashboardLayout from "../../Layouts/DashboardLayout";
import { BsRobot } from "react-icons/bs";
const Dashboard: NextPage = () => {
  const data = false;
  return (

      <DashboardLayout>
        <div className="h-(calc(100vh-74px)) flex w-full flex-col items-center justify-center overflow-y-auto text-gray-100">
          {data ? (
            <div className="text-neutral-900">
              <p>Win/Loss Ratio</p>
              <p>Deck Performance</p>
              <p>Matchup Analysis</p>
              <p>Card Usage</p>
              <p>Playtesting Session Duration</p>
              <p>Feedback and Notes</p>
              <p>Overall Performance</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <BsRobot size={160} />
              <p className="text-2xl">No data was found for this user</p>
            </div>
          )}
        </div>
      </DashboardLayout>
  );
};

import { getSession } from "next-auth/react";
import type { GetServerSidePropsContext, NextPage } from "next";
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default Dashboard;
