import DashboardLayout from "../../Layouts/DashboardLayout";
import { BsRobot } from "react-icons/bs";
const Dashboard: NextPage = () => {
  const data = true;
  const chartData = [
    { name: 'Category 1', value: 30 },
    { name: 'Category 2', value: 50 },
    { name: 'Category 3', value: 20 },
  ];

  return (

    <DashboardLayout>
      <div className="h-(calc(100vh-74px)) flex w-full flex-col items-center justify-center overflow-y-auto text-gray-100">
        {data ? (
          <div className="text-neutral-900">
            <div>
              <p className="text-2xl font-bold text-gray-100 text-center">Win/Lose/Draw Ratio</p>
              <div className="my-2"></div>
              <PieChart
                labels={['Win(s)', 'Lose(s)', 'Draw(s)']}
                data={[35, 60, 15]}
                backgroundColor={['red', '#00C49F', '#FFBB28']}
              />
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
