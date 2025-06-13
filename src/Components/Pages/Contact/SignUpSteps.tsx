const steps = [
  {
    number: 1,
    description: "Fill out the form below with the relevant information",
  },
  {
    number: 2,
    description: "Schedule a trial class",
  },
  {
    number: 3,
    description: "Take the trial class and see how you like our school and masters",
  },
  {
    number: 4,
    description: "Sign up with one of many packages",
  },
];

export const SignUpSteps = () => {
  return (
    <section className="py-12 bg-red-200 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Steps to Sign Up with TaeKwonMaru
          </h2>
          <p className="max-w-lg mx-auto mt-6 text-lg font-normal text-gray-600 font-pj">
            Start your path better with us
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-12 sm:px-10">
          {steps.map((step, index) => (
            <div key={index} className="relative pb-10">
              <div className="relative p-3 md:p-5 overflow-hidden bg-red-900 border border-gray-200 rounded-2xl">
                <div className="flex items-start sm:items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                    {step.number}
                  </div>
                  <p className="ml-6 text-xl font-medium text-white font-pj">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
