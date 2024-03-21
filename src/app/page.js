import Image from "next/image";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeadrs from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="my-16 text-center">
        <SectionHeadrs subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="flex flex-col max-w-2xl gap-4 mx-auto mt-4 font-semibold text-center text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            dolore officiis deserunt ex vel provident odit quae cupiditate ipsum
            sequi esse tenetur, laudantium iste. Est necessitatibus odio impedit
            iusto autem fuga ut, adipisci fugiat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            dolore officiis deserunt ex vel provident odit quae cupiditate ipsum
            sequi esse tenetur, laudantium iste. Est necessitatibus odio impedit
            iusto autem fuga ut, adipisci fugiat!
          </p>
        </div>
      </section>
      <section className="max-w-2xl mx-auto mt-4 text-center">
        <SectionHeadrs subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
        <div className="mt-8 mb-8 text-4xl text-gray-500 underline">
          <a href="tel :+919664513886">
            +91 96645 13886
          </a>
        </div>
      </section>
      <footer className="p-8 font-semibold text-center border-t mt-18 text-slate-500">
        &copy; 2024 All Rights Reserved To Our Team
      </footer>
    </>
  );
}
