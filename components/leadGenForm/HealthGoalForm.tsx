"use client";

import Image from "next/image";
import { useState, useEffect, Suspense, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface QuizItem {
  key: string;
  bar: string;
  question: string;
  options: string[];
  style: string;
  emoji: string[];
}

interface Quiz {
  custom: QuizItem[];
}

const quiz: Quiz = {
  custom: [
    {
      key: "intent",
      bar: "Goal",
      style: "md:w-[500px] w-full",
      question: "What is your goal for doing this course?",
      options: [
        "I want to kickstart my health coaching career",
        "I want to upskill",
      ],
      emoji: ["/assets/form-img/dart.svg", "/assets/form-img/chart.svg"],
    },
    {
      key: "investment",
      bar: "Budget",
      style: "md:w-[500px] w-full",
      question: "How much are you willing to invest in a course?",
      options: [
        "Budget is not an issue, looking for internationally recognized course",
        "I can invest around Rs 20000- Rs 30000 for a course",
        "I can only manage Rs 500- Rs 1000 ( Like a Coursera , Udemy  Course)",
        "Honestly, I can't pay anything",
      ],
      emoji: [
        "/assets/form-img/hand.svg",
        "/assets/form-img/money.svg",
        "/assets/form-img/coin.svg",
        "/assets/form-img/man-corss.svg",
      ],
    },
    {
      key: "level",
      bar: "Level",
      style: "md:w-[300px] w-full",
      question: "Is this your first course?",
      options: ["Yes", "No, I'm already certified "],
      emoji: ["/assets/form-img/yes.svg", "/assets/form-img/no.svg"],
    },
    {
      key: "source",
      bar: "Source",
      style: "md:w-[350px] w-full",
      question: "How did you hear about us?",
      options: ["Instagram", "Facebook", "Google", "MHB Academy Website"],
      emoji: [
        "/assets/form-img/iphone.svg",
        "/assets/form-img/wifi.svg",
        "/assets/form-img/mag.svg",
        "/assets/form-img/globe.svg",
      ],
    },
    {
      key: "age",
      bar: "Age",
      style: "md:w-[150px] w-full",
      question: "What's your age?",
      options: ["20s", "30s", "40+"],
      emoji: [
        "/assets/form-img/boy.svg",
        "/assets/form-img/man.svg",
        "/assets/form-img/male.svg",
      ],
    },
  ],
};

const CustomQuiz = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");

  useEffect(() => {
    setUtmSource(searchParams.get("utm_source") || "");
    setUtmMedium(searchParams.get("utm_medium") || "");
    setUtmCampaign(searchParams.get("utm_campaign") || "");
  }, [searchParams]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalQuestions = quiz.custom.length;
  const [showContactForm, setShowContactForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    acceptTerms: false,
  });
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);

  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      const activeButton = progressRef.current.querySelector(".active");
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [currentQuestion]);

  const handleOptionChange = (option: string) => {
    const currentKey = quiz.custom[currentQuestion].key;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [currentKey]: option,
    }));

    if (!completedQuestions.includes(currentQuestion)) {
      setCompletedQuestions([...completedQuestions, currentQuestion]);
    }

    changeQuestion(1);
  };

  const changeQuestion = (change: number) => {
    const nextQuestion = currentQuestion + change;
    if (nextQuestion === totalQuestions) {
      setShowContactForm(true);
    } else if (nextQuestion >= 0 && nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
      setShowContactForm(false);
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index);
    setShowContactForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const combinedFormData = {
      ...selectedOptions,
      ...formData,
      utmSource,
      utmMedium,
      utmCampaign,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // sheetID: "1rqEh0q4abT2r9L7sFWW9YjWxopx20KZ_ApR-UDxmyko",
          data: combinedFormData,
          // sheetName: "sheet1",
        }),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        router.push("/thank-you/");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="relative lg:h-auto max-w-[1440px] mx-auto break-words my-20">
        <div className="text-center md:mt-40 pb-5 md:pb-20">
          <h2 className="font-semibold text-2xl md:text-3xl xl:text-5xl px-5">
            Hey, Just a few questions to know more about you
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center">
          <div>
            <div className="flex overflow-auto relative mx-5" ref={progressRef}>
              <div className="flex gap-5 md:gap-8 flex-grow">
                {quiz.custom.map((item, index) => (
                  <button
                    key={item.key}
                    className={`md:px-4 md:py-2 px-2 border rounded-full md:h-[50px] w-[140px] flex items-center justify-center shrink-0 bg-white z-10 ${
                      currentQuestion >= index
                        ? "border-custom-purple text-custom-purple font-bold border-2 active"
                        : "border-gray-400 text-gray-400 font-bold"
                    }`}
                    onClick={() => goToQuestion(index)}
                    disabled={
                      !completedQuestions.includes(index) &&
                      index !== currentQuestion
                    }
                  >
                    {selectedOptions[item.key] &&
                    currentQuestion > index - 1 ? (
                      <Image
                        className="mr-2"
                        height={40}
                        width={40}
                        src="/assets/form-img/purpleTick.svg"
                        alt="tick"
                      />
                    ) : (
                      <span
                        className={` ${
                          currentQuestion === index
                            ? "text-custom-purple border-custom-purple border-2"
                            : "text-gray-400"
                        } px-[11px] py-1 rounded-full font-bold border-2 mr-2`}
                      >
                        {index + 1}
                      </span>
                    )}
                    {item.bar}
                  </button>
                ))}
                <button
                  className={`px-5 py-2 border rounded-full h-[50px] w-[140px] flex items-center justify-center shrink-0 bg-white z-10 ${
                    showContactForm
                      ? "border-custom-purple text-custom-purple font-bold border-2 active"
                      : "border-gray-400 text-gray-400 font-bold"
                  }`}
                  disabled={!completedQuestions.includes(totalQuestions - 1)}
                >
                  {showContactForm ? (
                    <Image
                      height={40}
                      width={40}
                      src="/assets/form-img/purpleTick.svg"
                      alt="tick"
                    />
                  ) : (
                    <span className="border-gray-400 text-gray-400 px-[11px] py-1 rounded-full font-bold border-2 mr-2">
                      6
                    </span>
                  )}
                  Contact
                </button>
              </div>
              <div className="absolute w-full top-1/2 transform -translate-y-1/2 border-t-2 border-dotted border-custom-purple z-0"></div>
            </div>
            <div className="flex justify-center mt-5 md:mt-20">
              <div className="flex flex-col justify-center items-center gap-12 mx-5 sm:mx-10 pb-10 md:pb-16 pt-10 md:pt-[56px] px-5 md:px-[56px] rounded-3xl w-full xl:max-w-[881px] h-full md:h-auto shadow-2xl">
                {currentQuestion < totalQuestions && !showContactForm && (
                  <div className="relative flex flex-col justify-between h-full">
                    <div className="flex flex-col items-center justify-center gap-8 sm:gap-12">
                      <p className="lg:font-bold font-medium md:leading-[44px] text-2xl md:text-[32px] lg:w-[440px] xl:w-[610px] text-center">
                        {quiz.custom[currentQuestion].question}
                      </p>
                      <div
                        className="flex flex-col gap-5 mb-10 md:mb-0"
                        id="question-options"
                      >
                        {quiz.custom[currentQuestion].options.map(
                          (option, index) => (
                            <div
                              key={index}
                              className={`form-check option-block border rounded-2xl cursor-pointer ${
                                selectedOptions[
                                  quiz.custom[currentQuestion].key
                                ] === option
                                  ? "border-custom-purple border-2 shadow-3xl shadow-custom-purple"
                                  : "border-gray-500"
                              } ${quiz.custom[currentQuestion].style}`}
                            >
                              <label className="form-check-label flex justify-between items-center cursor-pointer">
                                <input
                                  type="radio"
                                  name={quiz.custom[currentQuestion].key}
                                  className="form-check-input hidden peer"
                                  value={option}
                                  checked={
                                    selectedOptions[
                                      quiz.custom[currentQuestion].key
                                    ] === option
                                  }
                                  onChange={() => handleOptionChange(option)}
                                />
                                <div className="flex items-center">
                                  {quiz.custom[currentQuestion].emoji[
                                    index
                                  ] && (
                                    <Image
                                      className="mr-3 h-auto w-10 py-[14px] pl-[14px]"
                                      height={40}
                                      width={40}
                                      src={
                                        quiz.custom[currentQuestion].emoji[
                                          index
                                        ]
                                      }
                                      alt="emoji"
                                    />
                                  )}
                                  <span className="md:text-base text-sm font-medium cursor-pointer">
                                    {option}
                                  </span>
                                </div>
                                {selectedOptions[
                                  quiz.custom[currentQuestion].key
                                ] === option && (
                                  <Image
                                    className="ml-2"
                                    height={40}
                                    width={40}
                                    src="/assets/form-img/purpleTick.svg"
                                    alt="tick"
                                  />
                                )}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {showContactForm && (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-between md:h-[500px]"
                  >
                    <div className="font-medium text-2xl pp-5 md:p-8 text-center text-grap-600 md:w-[600px]">
                      Enter Your Details
                    </div>
                    <div className="relative flex flex-col justify-between h-full">
                      <div className="flex flex-col gap-10">
                        <div className="flex flex-col md:flex-row gap-6 ">
                          <div className="flex flex-col gap-2 w-full">
                            <label className="font-medium" htmlFor="firstName">
                              First Name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              className=" border border-gray-400 rounded-xl h-12 w-full pl-2"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="flex flex-col gap-2 w-full">
                            <label className="font-medium" htmlFor="lastName">
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              className=" border border-gray-400 rounded-xl h-12 w-full pl-2"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex flex-col justify-between w-full">
                            <label className="font-medium" htmlFor="email">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className=" border border-gray-400 rounded-xl h-12 w-full pl-2"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="flex flex-col gap-2 w-full">
                            <label
                              className="font-medium"
                              htmlFor="phoneNumber"
                            >
                              Phone Number (Whatsapp enabled)
                            </label>
                            <input
                              type="tel"
                              id="phoneNumber"
                              name="phoneNumber"
                              className=" border border-gray-400 rounded-xl h-12 w-full pl-2"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <label className="flex gap-2">
                            <input
                              type="checkbox"
                              name="acceptTerms"
                              checked={formData.acceptTerms}
                              onChange={handleInputChange}
                              required
                            />
                            I accept the Terms &amp; Conditions of MHB Academy
                          </label>
                        </div>
                      </div>
                    </div>
                    <input type="hidden" name="utm_source" value={utmSource} />
                    <input type="hidden" name="utm_medium" value={utmMedium} />
                    <input
                      type="hidden"
                      name="utm_campaign"
                      value={utmCampaign}
                    />
                    <div className="flex justify-between md:pt-0 pt-5">
                      <button
                        className="py-3 px-6 bg-custom-purple text-custom-light font-semibold"
                        onClick={() => changeQuestion(-1)}
                        type="button"
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        className="py-3 px-6 bg-custom-purple text-custom-light font-semibold"
                        disabled={submitting}
                      >
                        {submitting ? "Loading..." : "Submit"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

const HealthGoalForm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <CustomQuiz />
  </Suspense>
);

export default HealthGoalForm;
