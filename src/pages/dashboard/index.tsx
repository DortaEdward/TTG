import DashboardLayout from "../../Layouts/DashboardLayout";

import { BsRobot } from "react-icons/bs";

const Dashboard: NextPage = () => {
  const data = true;
  return (
    <DashboardLayout>
      <div className={`h-(calc(100vh-74px)) overflow-y-auto flex w-full flex-col items-center ${!data && 'justify-center'} overflow-y-auto text-gray-100`}>
        {data ? (
          <div className="text-neutral-900">
            <div>
              <p className="text-2xl font-bold text-gray-100 text-center">Win/Lose/Draw Ratio</p>
              <div className="my-2"></div>
              <div className="flex justify-center">
                <PieChart
                  labels={['Win(s)', 'Lose(s)', 'Draw(s)']}
                  data={[35, 60, 15]}
                  backgroundColor={['green', 'red', 'yellow']}
                />
              </div>
            </div>
            <div className="my-6"></div>
            <div className="flex flex-wrap gap-6 items-center justify-center">
              <div className="text-gray-100">
                <p className="text-lg font-medium">Win Rate</p>
                <p className="text-4xl">35%</p>
              </div>
              <div className="text-gray-100">
                <p className="text-lg">Loss Rate</p>
                <p className="text-4xl">60%</p>
              </div>
              <div className="text-gray-100">
                <p className="text-lg">Match Duration</p>
                <p className="text-4xl">42 mins</p>
              </div>
              <div className="text-gray-100 text-center">
                <p className="text-lg">Average Life Remaining</p>
                <p className="text-4xl">3</p>
              </div>
              <div className="text-gray-100 text-center">
                <p className="text-lg">Consistency</p>
                <p className="text-4xl">45%</p>
              </div>
              <p>Specific Matchup Performace</p>
              <p>Sideboard Effectiveness</p>
            </div>
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
import PieChart from "../../components/Charts/PieChart";
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
