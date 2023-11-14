"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export const Reviews = () => {
  return (
    <>
      <motion.div className="sm:ml-8"
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      >
        <h2 className="text-blue-500 font-bold sm:text-[40px] text-[18px] ">
          What Customer Says About Us.
        </h2>
        <div className="sm:w-[300px] sm:h-[15px] w-[150px] h-[10px] bg-red-400 text-center rounded-full"></div>
      </motion.div>
      <div className="mt-8 ml-2 sm:ml-0">
        <motion.div
          className="sm:ml-8 sm:flex gap-3"
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeIn", duration: 0.5, }}
        >
          <Card className="max-w-[350px] h-[200px] mt-5">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="lg"
                src="./prof-1.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Emily W.</p>
                <p className="text-small text-default-500">@Emily-W</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="">
              <p>
                Absolutely love this coffee shop! The atmosphere is cozy, and
                the coffee is top-notch. I am a regular here, and the staff
                always makes me feel welcome.
              </p>
            </CardBody>
            <Divider />
          </Card>

          {/* 2nd card */}

          <Card className="max-w-[350px] h-[200px] mt-5">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="lg"
                src="./prof-2.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Alex M.</p>
                <p className="text-small text-default-500">@Alex-M</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="">
              <p>
              Great place to work or catch up with friends. The WiFi is reliable, and the staff is friendly. The hazelnut iced latte is my go-to.
              </p>
            </CardBody>
            <Divider />
          </Card>
          {/* 3rd Card */}
          <Card className="max-w-[350px] h-[200px] mt-5">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="lg"
                src="./prof-3.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Jordan H.</p>
                <p className="text-small text-default-500">@Jordan-H</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="">
              <p>
              Hands down the best coffee in town! The baristas are true artists, and you can taste the quality in every cup. The pastries are also delicious, and I appreciate the variety. Highly recommend!
              </p>
            </CardBody>
            <Divider />
          </Card>
        </motion.div>
      </div>
    </>
  );
};
