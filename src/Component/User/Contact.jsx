import React from "react";

const Contact = () => {
 

  return (
    <section id="contact" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              Contact 
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Contact
            </h1>
          </div>
          <div className="text-slate-500 ">
            <p>
             <span className="font-bold"> Email :</span> Jillamalaimalai@gmail.com
            </p>
            <p><span className="font-bold"> +91 </span>
             7358330158
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
