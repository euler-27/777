import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src="/images/resume.png"
        alt="work icons"
        height={1000}
        width={1000}
      />
    </div>
  );
}