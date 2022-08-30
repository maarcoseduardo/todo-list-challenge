import Link from "next/link";

import { BsLinkedin, BsGithub } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="w-full h-32 bg-violet-light-500">
      <div className="flex flex-col mx-auto justify-around w-56 h-32 text-gray-light-200">
        <h1 className="text-center font-bold">Developed by Marcos Eduardo</h1>
        <div className="flex justify-around">
          <Link href="https://www.linkedin.com/in/maarcoseduardo/">
            <a className="flex justify-between items-center w-[83px] hover:text-pink-light-500">
              <span>
                <BsLinkedin />
              </span>
              <span>Linkedin</span>
            </a>
          </Link>
          <Link href="https://github.com/maarcoseduardo/">
            <a className="flex justify-between items-center w-[70px] hover:text-pink-light-500">
              <span>
                <BsGithub />
              </span>
              <span>Github</span>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
