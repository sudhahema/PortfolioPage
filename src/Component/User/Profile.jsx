import React from "react";
import image from "../../assest/elumalai.png";
import pdf from '../../assest/Elumalai Resume-2020.docx';

export default function Profile() {
  return (
    <>
      <main className="bg-secondary dark:bg-gray-900 w-full dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0">
          <div>
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase">Hello</p>
              <p className=" text-4xl md:text-6xl font-bold text-black/90 dark:text-white">
                I'm Elumalai
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Junior Associate
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                To secure an appropriate position, this will provide growth
                opportunities with effective utilization of my skills and
                experiences also the opportunity to learn more in professional
                Atmosphere.
              </p>
              {/* <button type="button" className="inline-block primary-btn !my-3">
                Resume
              </button> */}
              <button className="inline-block primary-btn !my-3">
                <a
                  className="button"
                  href={pdf}
                  download
                >
                Resume
                </a>
              </button>
            </div>
          </div>
          {/* image container */}
          <div>
            <img
              src={image}
              alt="not found"
              className="w-full md:max-w-sm mx-auto backdrop-blur-sm bg-orange-400 rounded-full"
            />
          </div>
        </div>
      </main>
    </>
  );
}
