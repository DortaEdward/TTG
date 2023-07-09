import Image from "next/image";

type Props = {
  images: string[];
};

const Carousel = ({ images = [] }: Props) => {
  return (
    <div id="logos" className="relative h-[300px] whitespace-nowrap flex">
      <div id="logos-slide" className="flex">
        <Image
          height={260}
          width={400}
          src="/yugioh.png"
          alt="Pokemon tcg image"
          className=" rounded"
        />
        <Image
          height={260}
          width={400}
          src="/pokemonTcg.png"
          alt="Pokemon tcg image"
          className=" rounded"
        />
      </div>
      <div id="logos-slide" className="flex">
        <Image
          height={260}
          width={400}
          src="/yugioh.png"
          alt="Pokemon tcg image"
          className=" rounded"
        />
        <Image
          height={260}
          width={400}
          src="/pokemonTcg.png"
          alt="Pokemon tcg image"
          className=" rounded"
        />
      </div>
    </div>
  );
};

export default Carousel;

/*
      <div id="slide" className="flex h-full gap-1">
        <Image height={260} width={400} src="/yugioh.png" alt="Pokemon tcg image" className=" rounded" />      
        <Image height={260} width={400} src="/pokemonTcg.png" alt="Pokemon tcg image" className=" rounded" />      
      </div>
*/
