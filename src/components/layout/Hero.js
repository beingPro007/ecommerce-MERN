import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div className="py-8">
        <h1 className="text-4xl font-semibold">
          Everything is Better with Better <Span className ="text-primary"></Span>
        </h1>
        <p className="m-4 text-grey-500">
          Pizza is the missing piece you want in your life, a simple yet
          delicious joy in the day.
        </p>
        <div className="flex gap-4">
          <button className="flex items-center gap-3 px-4 py-2 text-sm text-white uppercase duration-100 rounded-full bg-primary hover:scale-90 animation-all">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 py-2 font-semibold text-grey-500">
            Learn More
            <Right />
            </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout="fill"
          objectFit="contain"
          alt={"Pizza"}
        />
      </div>
    </section>
  );
}
