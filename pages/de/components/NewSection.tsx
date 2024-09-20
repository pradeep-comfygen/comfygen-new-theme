export default function NewSection({ NewSection, }) {
  const data = NewSection;
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6  py-10">
        <div className="space-y-10 text-center">
          {NewSection.map((elem: any, index: any) => {
            const { title, decs  ,desc} = elem;
            return (
              <div key={index} className="space-y-4  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51] ">
                  {title}
                </h2>
                <p className="text-base text-slate-800">
                  {decs}
                </p>
                <p className="text-base text-slate-800">
                  {desc}
                </p>
              </div>
            );
          })}
         
        </div>
      </section>
    </>
  );
}