import Container from "@/components/container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-100">
      <div className="h-[calc(100dvh-1rem)] bg-gradient-to-tr from-blue-800 via-indigo-900 to-indigo-950 place-content-center shadow-2xl shadow-blue-800 rounded-b-3xl ">
        <Container props="relative text-white grid grid-cols-2">
          <div className="pl-20">
            <h1 className="text-8xl font-bold">Home</h1>
            <p className="text-lg">Welcome to my website!</p>
          </div>
          <div className="flex justify-end bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-900 rounded-xl">
            <Image src="" alt="" width={400} height={400} />
          </div>
        </Container>
      </div>
      <div className="min-h-dvh py-48">
        <Container>
          <h2 className="text-2xl font-bold">About me</h2>
          <p className="text-lg">I am a full stack developer.</p>
        </Container>
      </div>
    </div>
  );
}
