export default function SectionHeadrs({ subHeader, mainHeader }) {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {subHeader}
      </h3>
      <h2 className="text-4xl italic font-bold transition-all duration-200 text-primary">
        {mainHeader}
      </h2>
    </>
  );
}
