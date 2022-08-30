import Head from "next/head";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md"
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
export default function ContactMe() {

  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Header />
      <section className="flex justify-center items-center h-[746px]">
        <div className="w-96 h-80 rounded-md bg-gray-light-200 text-violet-light-500 animate-scroll-card-social-media">
          <div className="flex flex-col justify-around items-center w-full h-80">
            <div className="font-bold">My Contacts</div>
            <ul>
              <li>
                <Link href="https://www.linkedin.com/in/maarcoseduardo/">
                  <a className="flex justify-between items-center w-[83px] hover:text-pink-light-500">
                    <span>
                      <BsLinkedin />
                    </span>
                    <span>Linkedin</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/maarcoseduardo/">
                  <a className="flex justify-between items-center w-[70px] hover:text-pink-light-500">
                    <span>
                      <BsGithub />
                    </span>
                    <span>Github</span>
                  </a>
                </Link>
              </li>
              <li className="flex justify-between items-center w-[208px]">
                <span><MdEmail /></span>
                <span>maarcosefb0@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}