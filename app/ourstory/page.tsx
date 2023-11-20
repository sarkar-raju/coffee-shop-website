import Image from "next/image";
export default function OurstoryPage() {
  return (
    <div className="mt-8">
      <div className="min-[835px]:flex sm:gap-24">
        <div className="sm:mb-0 mb-8">
          <h1 className="sm:text-[50px] text-[30px] text-blue-600 font-bold mt-6">
            Story that savor<span className="text-red-500">....</span>
          </h1>
          <div className="sm:w-[144px] w-[75px] h-1 sm:h-2 bg-red-500 rounded-full"></div>
          <p className="font-thin leading-7 tracking-wide mt-4 text-[18px]">
            Welcome to
            <span className="text-blue-600 font-bold">Brew Haven,</span> a
            haven of warmth and community <br /> nestled in the heart of
            <span className="text-red-500 font-bold"> NYC</span>. Our story
            begins with a simple <br /> yet profound belief that a perfect cup
            of coffee has the power <br /> to inspire, connect, and create
            moments of joy.
          </p>

          <p className="font-thin leading-7 tracking-wide mt-4 text-[18px]">
            Passionate founder whose vision was to craft more than just a <br />
            coffee shop but a welcoming space where every sip tells a <br />{" "}
            story and every customer feels like family. With a commitment <br />
            to quality and community,
            <span className="text-blue-600 font-bold">Brew Haven</span> was
            born.
          </p>
        </div>

        <div className="sm:mt-[40px] max-[1090px]:mt-[-70px] flex justify-center items-center max-[640px]:mt-[20px]">
          <Image
            src="/shop.jpg"
            width={600}
            height={600}
            alt="shop-img"
            className="rounded-lg"
          />
        </div>
      </div>
      {/* 2nd section */}
      <div className="mt-[80px]">
        <h1 className="sm:text-[50px] text-[30px] text-blue-600 font-bold">
          Best beans across the world<span className="text-red-500">...</span>
        </h1>
        <div className="sm:w-[100px] w-[80px] h-1 sm:h-2 bg-red-500 rounded-full"></div>
        <div className="min-[835px]:flex sm:gap-24">
          <div className="sm:mt-[40px] max-[1090px]:mt-[-70px] flex justify-center items-center max-[640px]:mt-[20px]">
            <Image
              src="/coffe-beans2.jpeg"
              width={600}
              height={600}
              alt="coffe-beans"
              className="rounded-lg"
            />
          </div>

          <p className="font-thin leading-7 tracking-wide min-[835px]:mt-[120px] mt-[40px] text-[18px]">
            Step through our doors, and you will be
            <span className="text-blue-600 font-bold"> greeted</span> by the rich{" "}
            <br />
            aroma of freshly roasted coffee beans, carefully selected <br />
            from around the world. Our baristas, true artisans of
            <br /> their craft, are here to guide you on a journey of taste
            <br /> and discovery. Whether you are a seasoned coffee <br />
            connoisseur or just starting your coffee adventure,
            <br /> there is a perfect blend{" "}
            <span className="text-red-500 font-bold">waiting for you.</span>
          </p>
        </div>
      </div>

      {/* 3rd section */}

      <div className="mt-[80px]">
        <h1 className="sm:text-[50px] text-[30px] text-blue-600 font-bold">
          Our Place<span className="text-red-500">...</span>
        </h1>
        <div className="sm:w-[100px] w-[80px] h-1 sm:h-2 bg-red-500 rounded-full"></div>
        <div className="min-[835px]:flex sm:gap-24">
          <p className="font-thin leading-7 tracking-wide min-[835px]:mt-[120px] mt-[40px] text-[18px]">
            Our cozy and inviting atmosphere is an extension of your living
            <br /> room a place to unwind, connect, and create memories. The
            decor,
            <br /> a blend of modern comfort and rustic charm, sets the stage
            for <br />
            moments of inspiration. Local artists grace our walls, and shelves
            <br /> offer a curated collection of books for you to enjoy as you
            savor <br />
            your favorite brew.
          </p>
          <div className="sm:mt-[40px] max-[1090px]:mt-[-70px] max-[640px]:mt-[20px] flex justify-center items-center">
            <Image
              src="/coffe-stepin.jpg"
              width={600}
              height={600}
              alt="shop-img"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
