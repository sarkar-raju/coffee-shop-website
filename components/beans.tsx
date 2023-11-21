"use client";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Beans = () => {
  return (
    <motion.div className="sm:ml-8">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { x: 1, scale: 1 },
          hidden: { x: -100, scale: 1 },
        }}
        className="sm:text-[80px] text-[25px]"
      >
        <span className="text-blue-500 font-bold">Taste That</span>
        <span className="text-red-400"> Matters.</span>
      </motion.h1>

      <div className="sm:flex justify-between items-center gap-2">
        <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { y: 1, scale: 1 },
          hidden: { y: +100, scale: 1 },
        }}
        
         className="imgDiv mt-8">
          <Image
            src="/coffe-beans.jpg"
            width={400}
            height={400}
            alt="coffe-beans"
            className="rounded-xl"
          />
        </motion.div>

        <div>
          <div className="txtDiv font-thin leading-7 tracking-wide text-[20px]">
            <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4 }}
            variants={{
              visible: { y: 1, scale: 1 },
              hidden: { y: +100, scale: 1 },
            }}
              className="sm:text-[40px] text-[20px] py-2 mt-4 font-bold"
            >
              A <span className="text-blue-600">Taste</span> of
              <span className="text-red-400"> Excellence</span>
              <div className="sm:w-[250px] w-[100px] h-2 bg-red-500 sm:mt-4 mt-1 rounded-full"></div>
            </motion.h1>

            

           <motion.div
           initial="hidden"
           whileInView="visible"
           transition={{ duration: 0.4 }}
           variants={{
             visible: { y: 1, scale: 1 },
             hidden: { y: +100, scale: 1 },
           }}
           >
           <p className="mt-10">
              From single-origin beans to expertly crafted espresso drinks,
              <br className="sm:visible max-[450px]:hidden" /> our menu is a
              celebration of quality and creativity.
              <br className="sm:visible max-[450px]:hidden" /> Explore our
              diverse offerings and let each sip transport you
              <br className="sm:visible max-[450px]:hidden" /> to a world of
              unparalleled coffee bliss.
            </p>
           </motion.div>
          </div>

          <motion.div 
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          variants={{
            visible: { y: 1, scale: 1 },
            hidden: { y: +100, scale: 1 },
          }}
          className="btnDiv mt-6">
            <Link href="/menu">
              <button className="bg-red-500 text-white rounded-full py-2 px-4 hover:bg-red-600 active:bg-gray-200 transition-all">
                Explore Menue &#8594;
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Beans;
