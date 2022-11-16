import { FC } from "react";
import Link from "next/link";

interface navbarProps {}

const navbar: FC<navbarProps> = ({}) => {
  return (
    <>
      <nav className=" grid grid-cols-3 place-content-evenly justify-items-center ">
        <Link href="/" >
          <a>Home</a>
        </Link>
        <Link href="/Makememory">
          <a>Make memory</a>
        </Link>
        <Link href="/Settings">
          <a>Settings</a>
        </Link>
      </nav>
    </>
  );
};

export default navbar;
