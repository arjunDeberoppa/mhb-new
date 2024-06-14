"use client";

import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface QuizItem {
  key: string;
  question: string;
  options: string[];
}

interface Quiz {
  custom: QuizItem[];
}

const quiz: Quiz = {
  custom: [
    {
      key: "intent",
      question: "What is your goal for doing this course?",
      options: [
        "I want to kickstart my health coaching career",
        "I want to upskill",
      ],
    },
    {
      key: "investment",
      question: "How much are you willing to invest in a course?",
      options: [
        "Budget is not an issue, looking for internationally recognized course",
        "I can invest around Rs 20000- Rs 30000 for a course",
        "I can only manage Rs 500- Rs 1000 ( Like a Coursera , Udemy  Course)",
        "Honestly, I can't pay anything",
      ],
    },
    {
      key: "age",
      question: "What's your age",
      options: ["20s", "30s", "40+"],
    },
    {
      key: "gender",
      question: "Select your gender",
      options: ["Male", "Female", "Others"],
    },
    {
      key: "certification",
      question: "Is this your first course?",
      options: ["Yes", "No, i'm already certified"],
    },
    {
      key: "intend",
      question: "What do you intend to do with this certification?",
      options: ["Become a Fitness Coach", "Want to upskill", "Other"],
    },
    {
      key: "experience",
      question: "Working experience (Health and Fitness)",
      options: ["0-1 Years", "2-4 Years", "5-10 Years", "10+ Years"],
    },
    {
      key: "Referral",
      question: "How did you hear about us?",
      options: ["Instagram", "Facebook", "Google", "MHB Academy Website"],
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

  const handleOptionChange = (option: string) => {
    const currentKey = quiz.custom[currentQuestion].key;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [currentKey]: option,
    }));
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
      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sheetID: "1rqEh0q4abT2r9L7sFWW9YjWxopx20KZ_ApR-UDxmyko",
          data: combinedFormData,
          sheetName: "sheet1",
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
      <section className="relative lg:h-[800px] max-w-[1440px] mx-auto break-words">
        <div className="flex flex-col lg:flex-row">
          <div>
            <Image
              width={600}
              height={801}
              src="/assets/form_img.png"
              className="absolute object-cover object-center w-full lg:max-w-[599px] h-[320px] lg:h-[800px]"
              alt="placeholder"
            />
            <div className="absolute w-full h-[320px] lg:max-w-[599px] lg:h-[800px] inset-0 bg-gradient-to-r from-custom-purple to-custom-green opacity-80"></div>
            <div className="relative font-bold text-2xl xl:text-[32px] text-custom-light h-[320px] lg:h-full max-w-[599px] p-5 xl:p-16">
              <p>At MHB Academy, </p> <br />
              <p>
                We ensure fitness coaches have the knowledge and expertise to
                make a lasting impact on people&apos;s lives.{" "}
              </p>
            </div>
          </div>
          <div className="relative flex px-5 md:px-16 pt-10 pb-10 md:pt-20 md:pb-[142px] bg-custom-gray xl:max-w-[850px] h-full md:h-[750px] lg:h-[800px]">
            <div className="flex flex-col gap-12 pb-10 md:pb-16 pt-10 md:pt-[56px] px-5 md:px-[56px] bg-custom-light w-full xl:max-w-[881px] h-full md:h-[600px] shadow-2xl">
              {currentQuestion < totalQuestions && !showContactForm && (
                <div className="relative flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-10 sm:gap-12">
                    <div className="flex gap-2 md:gap-5">
                      {quiz.custom.map((question, index) => (
                        <button
                          key={index}
                          className={`w-full h-[10px] ${
                            currentQuestion === index
                              ? "bg-custom-purple"
                              : "bg-custom-gray"
                          }`}
                          onClick={() => goToQuestion(index)}
                        ></button>
                      ))}
                    </div>
                    <p className="font-bold md:leading-[44px] text-2xl md:text-[32px] lg:w-[440px] xl:w-[610px]">
                      {quiz.custom[currentQuestion].question}
                    </p>
                    <div
                      className="flex flex-col gap-[14px] mb-10 md:mb-0"
                      id="question-options"
                    >
                      {quiz.custom[currentQuestion].options.map(
                        (option, index) => (
                          <div key={index} className="form-check option-block">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="option"
                                id={`q${index}`}
                                value={option}
                                checked={
                                  selectedOptions[
                                    quiz.custom[currentQuestion].key
                                  ] === option
                                }
                                onChange={() => handleOptionChange(option)}
                              />
                              <span
                                className="ml-3 md:text-base text-sm font-medium"
                                id="optionval"
                              >
                                {option}
                              </span>
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button
                      className="py-3 px-6 bg-custom-purple text-custom-light font-semibold"
                      onClick={() => changeQuestion(-1)}
                    >
                      Previous
                    </button>
                    <button
                      className="py-3 px-6 bg-custom-purple text-custom-light font-semibold"
                      onClick={() => changeQuestion(1)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {showContactForm && (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-between md:h-[800px]"
                >
                  <div className="relative flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-10">
                      <div className="flex flex-col md:flex-row gap-6 xl:w-[610px] lg:w-[440px]">
                        <div className="flex flex-col gap-2 w-full">
                          <label className="font-medium" htmlFor="firstName">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="bg-custom-gray border border-gray-300 h-12 w-full pl-2"
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
                            className="bg-custom-gray border border-gray-300 h-12 w-full pl-2"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col gap-2 w-full">
                          <label className="font-medium" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="bg-custom-gray border border-gray-300 h-12 w-full pl-2"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                          <label className="font-medium" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="bg-custom-gray border border-gray-300 h-12 w-full pl-2"
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
          <div></div>
        </div>
      </section>
    </div>
  );
};

const WrappedCustomQuiz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <CustomQuiz />
  </Suspense>
);

export default WrappedCustomQuiz;
