"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <div className="mt-8 pb-3">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { y: 1, scale: 1 },
          hidden: { y: +100, scale: 1 },
        }}
        className="sm:text-[80px] text-blue-500 font-bold sm:ml-8 ml-0 text-[40px]"
      >
        Our Location.
      </motion.h1>

      <div className="sm:flex justify-between items-center gap-2 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          variants={{
            visible: { y: 1, scale: 1 },
            hidden: { y: +100, scale: 1 },
          }}
          className="imgDiv sm:mt-8 mt-4 sm:ml-8 ml-0"
        >
          <Image
            src="/map.png"
            width={500}
            height={500}
            alt="coffe-beans"
            className="rounded-xl"
          />
        </motion.div>

        <div>
          <div className="txtDiv font-thin leading-7 tracking-wide text-[20px]">
            <motion.div 
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4 }}
            variants={{
              visible: { y: 1, scale: 1 },
              hidden: { y: +100, scale: 1 },
            }}
            className="sm:text-[44px] text-[20px] py-2 sm:mt-4 mt-2 font-bold text-blue-500">
              Visit Us.

              <div className="sm:w-[100px] w-[35px] h-2 bg-red-500 sm:mt-4 mt-0 rounded-full"></div>
            </motion.div>
            

            <motion.div 
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4 }}
            variants={{
              visible: { y: 1, scale: 1 },
              hidden: { y: +100, scale: 1 },
            }}
            className="sm:mt-10 mt-2">
              Nestled in the heart of New York, Brew Haven{" "}
              <br className="sm:visible max-[450px]:hidden" /> welcomes you to
              our cozy corner of coffee bliss. Our prime{" "}
              <br className="sm:visible max-[450px]:hidden" /> location is
              designed to be your urban escape, where the aroma{" "}
              <br className="sm:visible max-[450px]:hidden" /> of freshly brewed
              coffee and the warmth{" "}
              <br className="sm:visible max-[450px]:hidden" /> of our welcoming
              space invite you to unwind and savor the moment.
            </motion.div>
          </div>
          <div className="btnDiv mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Location;
