import type { GetServerSidePropsContext } from "next";
import { type NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import SupportedGamesCard from "../components/SupportedGamesCard";
import { getSession } from "next-auth/react";
import DefaultLayout from "../Layouts";

import PokemonWorldsLogo from "../assets/pokeWorldChamp.png";
import YugiohLogo from "../assets/yugioh.png";
import MagicWorldLogo from "../assets/magic.png";
import OnePieceLogo from "../assets/onepiece.png";
import VanguardLogo from "../assets/Vanguard.png";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const [slideWidth, setSlideWidth] = useState<number>();
  const carousel = useRef<HTMLDivElement>(null);

  const handleSlideWidth = () => {
    if (!carousel.current) return;
    setSlideWidth(
      carousel.current?.scrollWidth - carousel.current?.offsetWidth + 40
    );
  };

  useEffect(() => {
    handleSlideWidth();
  }, []);

  return (
    <>
      <Head>
        <title>TTG - Next Generation Testing Groups</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <div
          id="hero"
          className="flex h-96 w-full flex-col items-center justify-center text-neutral-100"
        >
          <div className="flex flex-col items-center gap-4 px-6">
            <h1 className="text-center text-5xl font-bold">
              Find the right group, Win the your next event!
            </h1>
            <p className="text-center text-2xl">
              Connecting TCG players and creating a more competitve environment.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-neutral-700 py-20 text-gray-100">
          <div className="pb-10 text-center">
            <h3 className="text-3xl font-semibold">Supported Games!</h3>
            <div className="my-4"></div>
            <p className="text-lg font-medium">
              With a diverse selection of games, players can find the perfect
              group to test with.
            </p>
          </div>
          <motion.div
            ref={carousel}
            id="outer"
            className="w-full max-w-[1024px] cursor-grab overflow-hidden"
          >
            <motion.div
              id="inner"
              drag="x"
              dragConstraints={{ right: 0, left: slideWidth ? -slideWidth : 0 }}
              className="flex gap-6 px-1 py-2"
            >
              <SupportedGamesCard
                gameTitle={"Pokémon Trading Card Game"}
                image={PokemonWorldsLogo}
              />
              <SupportedGamesCard
                gameTitle={"Yu-Gi-Oh! Trading Card Game"}
                image={YugiohLogo}
              />
              <SupportedGamesCard
                gameTitle={"Magic: The Gathering"}
                image={MagicWorldLogo}
              />
              <SupportedGamesCard
                gameTitle={"One Piece"}
                image={OnePieceLogo}
              />
              <SupportedGamesCard
                gameTitle={"Cardfight Vanguard"}
                image={VanguardLogo}
              />
            </motion.div>
          </motion.div>
        </div>
        {/* Call to action */}
        <div className="flex min-w-[1024px] flex-col items-center justify-center bg-neutral-800 px-16 py-20">
          <div className="flex flex-col items-center gap-2 text-gray-100">
            <p className="text-4xl">What are you waiting for?</p>
            <p className="w-full text-2xl">
              {
                "You won't be come a world class competitor by playseting on your own."
              }
            </p>
            <p className="text-2xl">
              Join and find the perfect team to play with!
            </p>
          </div>
          <div className="my-5"></div>
          <button className="rounded bg-teal-600 px-10 py-2 text-lg font-bold text-gray-100">
            Sign In
          </button>
        </div>
        <Footer />
      </DefaultLayout>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default Home;

/*
  yugioh
  pokemon
  magic
  digimon
  one piece
  cardfight vanguard
*/
