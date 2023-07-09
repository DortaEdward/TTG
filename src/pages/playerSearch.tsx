import type { NextPage } from "next";
import type { User } from "@prisma/client";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import { MdMessage } from "react-icons/md";

const PlayerSearch: NextPage = () => {
  const users = [
    {
      id: "dsfadsfsas",
      image:
        "https://cdn.discordapp.com/avatars/223901390567636992/6749df116c5eb3bb210f770b7394c804.png",
      name: "fmdeemon",
      level: "Advanced",
    },
    {
      id: "dsfadsfdwdwdsas",
      image:
        "https://cdn.discordapp.com/avatars/223901390567636992/6749df116c5eb3bb210f770b7394c804.png",
      name: "mika",
      level: "Advanced",
    },
    {
      id: "dsfad34343rsfsas",
      image:
        "https://cdn.discordapp.com/avatars/223901390567636992/6749df116c5eb3bb210f770b7394c804.png",
      name: "mixt",
      level: "Advanced",
    },
  ];

  const { data, isLoading } = trpc.user.getAllUsers.useQuery();

  return (
    <div className="relative flex min-h-[calc(100vh-74px)] flex-col items-center py-10 text-gray-100">
      <h1 className="text-5xl">Find a player</h1>
      <div className="mb-2 mt-4"></div>
      <div className="w-full text-center">
        <input
          className="w-[320px] rounded px-3 py-2 sm:max-w-[980px]"
          type="text"
          placeholder="Search for player"
        />
      </div>
      <div className="mb-10"></div>
      <div className="mb-12 flex max-w-[1024px] flex-col items-center px-4">
        <p className="my-2 text-2xl">Filters</p>
        <div className="flex flex-col gap-6">
          <div>
            <p>Games</p>
            <div className="my-4"></div>
            <div className="flex flex-wrap gap-1">
              <button className="h-10 rounded bg-neutral-800 px-3">
                Pokemon
              </button>
              <button className="h-10 rounded bg-neutral-800 px-3">
                Yugioh
              </button>
              <button className="h-10 rounded bg-neutral-800 px-3">
                Magic: the gathering
              </button>
              <button className="h-10 rounded bg-neutral-800 px-3">
                One Piece
              </button>
              <button className="h-10 rounded bg-neutral-800 px-3">
                Cardfight Vanguard
              </button>
            </div>
          </div>
          <div>
            <p>Player Level</p>
            <div className="my-4"></div>
            <div className="flex gap-2">
              <button className="h-10 rounded bg-neutral-800 px-3">
                Beginner
              </button>
              <button className="h-10 rounded bg-neutral-800 px-3">
                Intermediate
              </button>
              <button className="h-10 rounded bg-neutral-800 px-3">
                Advanced
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          <p className="mb-6 text-center text-3xl">Results: {users.length}</p>
          <div className="flex w-3/4 flex-col items-center gap-2 py-4">
            {users?.map((user: any) => {
              return (
                <div
                  key={user.id}
                  className="flex w-full min-w-[315px] max-w-[980px] items-center gap-3 rounded-md bg-neutral-900 px-6 py-3"
                >
                  <Image
                    className="rounded-full"
                    src={user.image as string}
                    width={64}
                    height={64}
                    alt={`${user.name} discord image`}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl">{user.name}</p>
                    <div className="flex gap-2">
                      <p>Advanced</p>
                      <MdMessage size={24} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerSearch;
