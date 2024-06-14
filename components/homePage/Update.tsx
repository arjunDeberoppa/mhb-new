"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";

const StayTuned = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const FormData = () => ({
      email: email,
    });

    const formData = FormData();

    try {
      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sheetID: "1rqEh0q4abT2r9L7sFWW9YjWxopx20KZ_ApR-UDxmyko",
          data: formData,
          sheetName: "sheet3",
        }),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setSubmitted(true);
        setEmail(""); // Clear the email input field
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full h-full text-custom-light text-center">
      <div className="px-5 py-16 md:px-16 md:py-24 flex items-center justify-center">
        <div className="w-full shadow-2xl relative">
          <Image
            width={1440}
            height={593}
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/assets/section-14.webp"
            alt="bg-image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative p-8 flex flex-col gap-6 md:max-w-3xl md:mx-auto md:my-14">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-bold md:text-5xl">
                Stay Updated with MHB <span className="block">Academy</span>
              </h2>
              <p className="text-lg">
                Subscribe to our newsletter for the latest insights in the
                fitness industry.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="md:max-w-xl md:mx-24">
                <div className="flex flex-col gap-4 mb-4 mt-4 md:flex-row md:gap-4 ">
                  <input
                    type="email"
                    id="email"
                    className="w-full h-12 text-custom-black pl-4"
                    placeholder="Your email address"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={loading || submitted} // Disable input during loading or after submission
                  />
                  <button
                    type="submit"
                    className="bg-custom-green w-full md:w-48 h-12 border-2 border-custom-green text-custom-light flex px-6 py-3 justify-center self-center items-center cursor-pointer"
                    disabled={loading || submitted} // Disable button during loading or after submission
                  >
                    {loading
                      ? "LOADING..."
                      : submitted
                      ? "SUBMITTED"
                      : "JOIN NOW"}
                  </button>
                </div>
                <p className="text-xs flex">
                  By joining, you agree to our Terms and Conditions.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayTuned;
