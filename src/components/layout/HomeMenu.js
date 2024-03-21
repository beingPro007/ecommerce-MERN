import Image from "next/image";
import MenuItem from "./Menu/MenuItem";
import SectionHeadrs from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section>
      <div className="absolute left-0 right-0 justify-start w-full h-full overflow-x-hidden">
        <div className="absolute -left-10 w-48 h-48 -z-10 ">
          <Image
            src={"/sallad.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"Sallad"}
          />
        </div>
        <div className="absolute -right-10 w-48 h-48 -z-10 scale-x-[-1]">
          <Image
            src={"/sallad.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"Sallad"}
          />
        </div>
      </div>
      <div className="text-center mb-7">
        <SectionHeadrs subHeader={'check out'} mainHeader={'Menu'}/>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
