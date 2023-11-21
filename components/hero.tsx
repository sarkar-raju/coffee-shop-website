"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import Link from "next/link";


// creating animation with framer motion

const textVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="sm:flex justify-between items-center"
      >
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="textContainer mt-[120px] ml-8"
        >
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-red-400 font-bold py-2 text-2xl"
          >
            Coffee Time....
          </motion.p>

          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="sm:text-[80px] text-[40px] py-2"
          >
            Indulge in the <br /> Art of Coffee <br />
            <span className="text-red-400">Craftsmanship.</span>
          </motion.h1>

          <motion.p variants={textVariants} initial="initial" animate="animate" className="font-thin leading-7 tracking-wide">
          Discover the rich symphony of flavors in every cup, <br className="sm:visible max-[450px]:hidden"/> meticulously curated to elevate your coffee journey. <br className="sm:visible max-[450px]:hidden"/>Whether you are a connoisseur or a casual enthusiast, <br className="sm:visible max-[450px]:hidden"/> our artisanal blends and cozy ambiance invite you <br className="sm:visible max-[450px]:hidden"/> to savor the moment.
          </motion.p>
        </motion.div>

        <div className="imgContainer sm:mt-[180px] mt-1">
          <Image
            src="./coffe-img.svg"
            width={400}
            height={400}
            alt="coffee"
            className="rounded-full"
          />
        </div>
      </motion.div>

    <div className="flex mt-5 text-center max-[638px]:justify-between sm:flex max-[638px]:px-8">
      <motion.div
        className="sm:ml-8 mr-2 "
        initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          variants={{
            visible: { y: 1, scale: 1 },
            hidden: { y: +100, scale: 1 },
          }}
      >
        <Button className="bg-red-500 text-white rounded-full" variant="flat">
          <Link href="/ourstory">Learn More &#8594;</Link>
        </Button>
      </motion.div>

      <motion.div
        className="sm:ml-8 "
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { y: 1, scale: 1 },
          hidden: { y: +100, scale: 1 },
        }}
      >
    
          <Button className="bg-blue-600 text-white rounded-full">
          <Link href = "/menu">
            Explore Menu &#8594;
            </Link>
            </Button>
       
        
      </motion.div>
    </div>
    </>
  );
};
