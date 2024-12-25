import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  return (
    <div className="">
      <main className="  px-10 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className=" text-xl">developedbyed</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  href="#"
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Chinedu Aguwa
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl ">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Freelancer providing services for programming and developers
              needs. Join me down below and let's get cracking
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className=" relative bg-gradient-to-b from-teal-500 overflow-hidden rounded-full w-80 h-80 my-20 mx-auto">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, i've done remote work for
              <span className=" text-teal-500"> agencies</span> and consulted
              for <span className=" text-teal-500">startups</span> and
              collaborated with talanted people to create digital products for
              both business and consumer use
            </p>
            <p className="text-md py-5 leading-8 text-gray-800">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>
          <div className=" lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 items-center justify-center">
              <Image
                src={design}
                width={100}
                height={100}
                className=" m-auto"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className=" py-2">
                Creating elegant designs suited for your needs and curent design
                theory.
              </p>
              <h4 className=" py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 items-center justify-center">
              <Image src={code} width={100} height={100} className=" m-auto" />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className=" py-2">
                Creating elegant designs suited for your needs and curent design
                theory.
              </p>
              <h4 className=" py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 items-center justify-center">
              <Image
                src={consulting}
                width={100}
                height={100}
                className=" m-auto"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className=" py-2">
                Creating elegant designs suited for your needs and curent design
                theory.
              </p>
              <h4 className=" py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portofolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, i've done remote work for
              <span className=" text-teal-500"> agencies</span> and consulted
              for <span className=" text-teal-500">startups</span> and
              collaborated with talanted people to create digital products for
              both business and consumer use
            </p>
            <p className="text-md py-5 leading-8 text-gray-800">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <Image
                src={web1}
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web2}
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web3}
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web4}
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web5}
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web6}
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
