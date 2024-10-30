import Image from "next/image";

export default function Score() {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-wrap">
    
      <Image
        src="/images/0.png"
        alt="work icons"
        height={1000}
        width={1000}
        className="w-[50%]"
      />
      <Image
        src="/images/1.png"
        alt="work icons"
        height={1000}
        width={1000}
        className="w-[50%]"
      />
      <Image
        src="/images/2.png"
        alt="work icons"
        height={1000}
        width={1000}
        className="w-[50%]"
      />
      <Image
        src="/images/3.png"
        alt="work icons"
        height={1000}
        width={1000}
        className="w-[50%]"
      />
      <Image
        src="/images/4.png"
        alt="work icons"
        height={1000}
        width={1000}
        className="w-[50%]"
      />
    </div>
  );
}
