import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../../public/logo-challenge.png";

export function Logo() {
  return (
    <Link href="/">
      <a>
        <Image src={LogoImg} />
      </a>
    </Link>
  );
}
