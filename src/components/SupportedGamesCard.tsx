import { motion } from "framer-motion";
import type { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
  gameTitle: string;
  image: StaticImageData;
};

const SupportedGamesCard = ({ gameTitle, image }: Props) => {
  return (
    <motion.div className="mx-8 py-4 min-w-[280px] drop-shadow-lg shadow-lg px-2 rounded-lg justify-center sm:mx-0 flex flex-col items-center gap-2 overflow-hidden border-4 border-neutral-600 bg-white/5">
        <Image src={image} width={280} height={150} alt={gameTitle} className="w-full pointer-events-none" />
    </motion.div>
  );
};

export default SupportedGamesCard;
