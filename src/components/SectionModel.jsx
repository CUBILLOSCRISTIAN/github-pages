import { div } from "@tensorflow/tfjs";

export function SectionModel() {
  return (
    <div className=" ">
      <div className="z-10 w-full p-6  ">
        <h1 className="mt-4 mb-5 text-4xl font-medium text-white font-heading md:text-6xl xl:text-11xl">
          Analyzes{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-600">
            {" "}
            model{" "}
          </span>
        </h1>
        <p className="w-full text-gray-100 mb-9 sm:text-base opacity-60 text">
          The following code illustrates the creation of a machine learning
          model for predicting temperature using an open dataset of temperature
          data. This model aims to analyze historical temperature records and
          forecast future temperatures based on various features such as time of
          day, seasonality, and other relevant factors. By leveraging machine
          learning algorithms, the model can provide valuable insights into
          temperature trends and help anticipate future weather conditions,
          facilitating informed decision-making in various domains such as
          agriculture, energy management, and urban planning.
        </p>
        <div className="flex flex-wrap mb-20 -m-3 justify-end">
          <div className="w-full p-3 lg:w-auto">
            <a
              href="/github-pages/#/Model"
              className="font-heading block w-full transform hover:scale-[1.02] transition ease-in-out px-6 py-4 text-base bg-gradient-to-r from-orange-600 via-fuchsia-500 text-gray-100 font-medium to-indigo-600 rounded-md gradientHover"
            >
              Go to code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
