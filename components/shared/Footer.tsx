import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.svg" width={35} height={35} alt="logo" />
          <span className="font-semibold">
            Dev<span className="text-primary">Connect</span>
          </span>
        </Link>

        <p>2024 DevConnect. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
