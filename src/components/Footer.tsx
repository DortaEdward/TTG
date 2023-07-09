import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-w-screen flex flex-wrap justify-center px-16 py-20 text-gray-100">
      <div className="flex w-full max-w-[1024px] flex-wrap justify-between">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={"/logo.png"}
            width={50}
            height={48}
            alt="Tcg Testing Groups Logo"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-2xl text-neutral-500">Support</p>
          <div className="flex flex-col gap-1">
            <Link href={"/contact"} className="text-sm">
              Contact Us
            </Link>
            <Link href={"/faq"} className="text-sm">
              Faq
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-2xl text-neutral-500">What to stay up-to-date?</p>
          <div className="flex flex-col gap-1">
            <p className="text-sm">Join our Email List for updates! No spam. EVER</p>
            <div className="my-1"></div>
            <form className="flex gap-2">
              <input type="text" placeholder="Enter your email" className="p-2 w-64 outline-none bg-neutral-700" />
              <button className="bg-teal-600 py-2 px-3" type="button">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
