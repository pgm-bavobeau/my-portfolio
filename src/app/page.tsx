import Container from "@/components/container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-100 to-neutral-950 overflow-hidden">
      <div className="h-dvh place-content-center">
        <Container props="text-white grid grid-cols-2">
          <div className="pl-20 -mt-24">
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-800 via-indigo-900 to-indigo-950">
              Welkom,
              <br/>
              Ik ben Bavo
              <br/>
              Full stack 
              <br />
              web developer
            </h1>
          </div>
          <div className="flex justify-end bg-blue-800 rounded-full">
            {/* <Image src="" alt="" width={400} height={400} /> */}
          </div>
        </Container>
      </div>
      <div className="relative -mt-48 min-h-dvh py-48 bg-gradient-to-br from-blue-800 via-indigo-900 to-indigo-950">
        <div className="absolute inset-0 w-0 h-0 border-t-[160px] border-t-blue-100 border-l-[100vw] border-l-transparent"></div>
        <Container props="">
          <h2 className="text-2xl font-bold">About me</h2>
          <p className="text-lg">I am a full stack developer.</p>
        </Container>
      </div>
    </div>
  );
}
