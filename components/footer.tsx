import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-red-950 text-white ">
      <div className="text-center">
        <p className="font-bold">
          &#169; <span>2023</span>{" "}
          <span className="text-blue-500">Brew Haven</span>
        </p>
      </div>
        <div>
          <p className="flex justify-center items-center gap-2">
            <Image src="/facebook.svg" width={20} height={20} alt="facebook" 
            className="bg-white rounded-full hover:bg-blue-600 cursor-pointer"
            />
             <Image src="/twitter.svg" width={20} height={20} alt="facebook" 
            className="bg-white rounded-full hover:bg-blue-600 cursor-pointer"
            /> <Image src="/insta.svg" width={20} height={20} alt="facebook" 
            className="bg-white rounded-full hover:bg-orange-600 cursor-pointer"
            />

          </p>
        </div>
      </div>
   
  );
};

export default Footer;
