import { Members } from "../components/MembersCards";
import { NavBar } from "../components/NavBar";
import { SectionModel } from "../components/SectionModel";
import { Model } from "./Model";

export function Home() {
  return (
    <section>
      <NavBar />
      <div className="container px-4 mx-auto max-w-8xl">
        <div className="flex flex-wrap justify-between pt-20 sm:pl-20 sm:-m-6">
          <div className="circlePosition w-[200px] h-[200px] left-[60%] absolute bg-[#eb26fd] rounded-[100%] z-1 blur-[80px] overflow-x-hidden"></div>
          <div className="z-10 w-full p-6 sm:-mt-10 lg:w-5/12 xl:w-1/2">
            <p className="inline px-3 py-1 mb-5 text-xs font-medium text-gray-400 border-2 rounded-lg font-heading sm:text-sm opacity-40 border-white/10">
              Group #2 Optimazación
            </p>
            <h1 className="mt-4 mb-5 text-4xl font-medium text-white font-heading md:text-6xl xl:text-11xl">
              Analyzes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-600">
                {" "}
                temperature{" "}
              </span>
              data
            </h1>
            <p className="max-w-lg text-gray-100 mb-9 sm:text-lg opacity-60">
              In this project, we have conducted a comprehensive analysis of
              temperature data in Colombia for the years 2021, 2022 and 2023.
              Our main goal has been to train machine learning models in order
              to estimate future temperatures more accurately. Explore our work
              and discover how we are using data science to predict tomorrow's
              climate.
            </p>
            <div className="flex flex-wrap mb-20 -m-3">
              <div className="w-full p-3 lg:w-auto">
                <a
                  href="/github-pages/#/Model"
                  className="font-heading block w-full transform hover:scale-[1.02] transition ease-in-out px-6 py-4 text-base bg-gradient-to-r from-orange-600 via-fuchsia-500 text-gray-100 font-medium to-indigo-600 rounded-md gradientHover"
                >
                  Go to charts
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 hidden w-full lg:w-7/12 xl:w-1/2 sm:block">
            <div className="pr-2 mx-auto -mt-16 max-w-max">
              <div className="flex items-center justify-around">
                <div className="mt-20 ml-10">
                  <Members />
                  <p className="inline px-3 py-1   mb-5 text-xs font-medium text-gray-400 border-2 rounded-lg font-heading sm:text-sm opacity-40 border-white/10">
                    Swipt to see more members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Model />
      </div>
    </section>
  );
}
