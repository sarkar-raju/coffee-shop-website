import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="mt-10">
      <p className="font-thin leading-7 tracking-wide mt-4 text-[18px]">
        Thank you for reaching out to{" "}
        <span className="font-bold text-blue-600">Brew Haven</span>. We are
        thrilled to hear from you! Whether you have a question, suggestion, or
        just want to say hello, we are here to help.
      </p>

      <div>
        <div className="flex justify-center items-center mt-8">
          <Image src="/contact.png" width={600} height={600} alt="img" 
          className="rounded-lg"
          />
        </div>
      </div>
      <div className="sm:flex gap-3 sm:justify-center sm:items-center mt-14">
        <div className="sm:w-[220px] w-[360px] h-[120px] bg-red-100 text-center rounded-lg shadow-md hover:shadow-2xl cursor-pointer transition ease-in-out delay-150 ">
          <h1 className="text-blue-600 font-bold mt-2">Visit Us :-</h1>
          <div className="ml-4 mt-1 text-left text-red-900">
            <p>Brew Haven</p>
            <p>456 Park Avenue</p>
            <p>New York</p>
          </div>
        </div>
        <div className="sm:w-[220px] w-[360px] h-[120px] bg-red-100 text-center rounded-lg shadow-md hover:shadow-2xl cursor-pointer transition ease-in-out delay-150 ">
          <h1 className="text-blue-600 font-bold mt-2">Contact Information:</h1>

          <div className="ml-4 mt-1 text-left text-red-900">
            <p className="flex">
              <Image src="/phone.svg" width={20} height={20} img="phone" />{" "}
              Phone :- 1-212-1234567
            </p>
            <p className="flex">
              <Image src="/email.svg" width={20} height={20} img="phone" />{" "}
              Enail :- brew@haven.com
            </p>
          </div>
        </div>
        <div className="sm:w-[220px] w-[360px] h-[120px] bg-red-100 text-center rounded-lg shadow-md hover:shadow-2xl cursor-pointer transition ease-in-out delay-150 ">
          <h1 className="text-blue-600 font-bold mt-2">Operating Hours:</h1>
          <div className="ml-4 mt-1 text-left text-red-900">
            Monday to Sunday : <br /> 7:00 AM to 10:00 PM
          </div>
        </div>
      </div>
    </div>
  );
}
