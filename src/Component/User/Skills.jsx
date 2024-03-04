import React from "react";


const Skills = () => { 

    const SkillsLevel = [
        {
            skillname: "Communication",
            percentage: "90%",
        },
        {
            skillname: "Accounting",
            percentage: "85%",
        },
        {
            skillname: "Problem solving",
            percentage: "90%",
        },
        {
            skillname: "Compliance and Financial Reporting",
            percentage: "95%",
        },
        {
            skillname: "Collaboration",
            percentage: "85%",
        },
    ]; 
  return (
    <section  id="skill" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="sm:order-2 font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Skills
            </h1>
          </div>
          <div className="text-slate-500 sm:order-1">
          {SkillsLevel.map((data, index) => {
                return (
                    <div className="mt-4 space-y-2" key={index}>
                    <div className="flex justify-between items-end">
                      <p className="text-xl font-bold">{data.skillname}</p>
                      <p className="text-sm text-right">{data.percentage}</p>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full">
                      <div
                        style={{ width: `${data.percentage}` }}
                        className={`h-2 bg-primary rounded-full`}
                      ></div>
                    </div>
                  </div>                  
                );
              })}
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;