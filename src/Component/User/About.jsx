import React, { useState } from "react";

const About = () => {
  const [showMore, setshowMore] = useState(false);

  const handleClick = () => {
    setshowMore(!showMore);
  };

  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500">
            <p>
              I am a highly motivated and dedicated Junior Associate with 1 year
              of experience in sales & Enthusiastic in Large Account
              Management. Strong customer advocacy, communication and
              cross-group collaboration skills. Industry experience across,
              Mobility and Storage Sales.
            </p>
            <br />
            <p>
              Responsible for assigned sales targets (monthly, quarterly and
              annually) and Maintain good relation with client.
            </p>
            <br />
            {showMore && (
              <p>
                Recognized for successlly meet targets, proficiently formulating
                and implementing budgets, building high-performing teams and
                nurturing fruitful relationships with customers.
              </p>
            )}

            <div className=" flex flex-row items-center gap-5">
              <div className="">
                <button
                  className="inline-block primary-btn !my-3"
                  onClick={handleClick}
                >
                  Learn More
                </button>
              </div>
              <div className="">
                
                <a href="/#contact" className="outline-btn my-4">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
