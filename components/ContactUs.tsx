"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("");
  const [role, setRole] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
    checkFormValidity();
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    checkFormValidity();
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    checkFormValidity();
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNo(event.target.value);
    checkFormValidity();
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
    checkFormValidity();
  };

  const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTopic(event.target.value);
    checkFormValidity();
  };

  const checkFormValidity = () => {
    setIsFormValid(
      firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.trim() !== "" &&
        phoneNo.trim() !== "" &&
        message.trim() !== "" &&
        topic.trim() !== ""
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    setIsLoading(true);

    // Creating formData object
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phoneNo,
      message: message,
      topic: topic,
    };

    try {
      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sheetID: "1rqEh0q4abT2r9L7sFWW9YjWxopx20KZ_ApR-UDxmyko",
          data: formData,
          sheetName: "sheet2",
        }),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset all state values to initial state
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNo("");
        setMessage("");
        setTopic("");
        setIsFormValid(false);
        setSubmitted(true);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-custom-light border-t border-custom-gray">
        <div className="py-16 md:py-28 container max-w-[1440px] mx-auto flex gap-20 xl:gap-0 flex-col xl:flex-row justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-5xl font-bold">Contact us</h2>
              <p className="text-lg font-medium max-w-[600px]">
                If you have any questions about these Terms and Conditions,
                please contact us at
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Image
                  width={24}
                  height={24}
                  src="/assets/contact/envelope.svg"
                  alt="envelope"
                />
                <p className="font-medium">info@mhbacademy.com</p>
              </div>
              <div className="flex gap-4">
                <Image
                  width={19}
                  height={24}
                  src="/assets/contact/phoneno.svg"
                  alt="envelope"
                />
                <p className="font-medium">9326310402</p>
              </div>
              <div className="flex gap-4">
                <Image
                  width={16}
                  height={24}
                  src="/assets/contact/location.svg"
                  alt="envelope"
                />
                <p className="font-medium">
                  Arcadia, 404, South City II, Gurugram, Haryana 122018
                </p>
              </div>
              <p className="font-medium max-w-[600px]">
                By using the MyHealthBuddy Academy Platform, you acknowledge
                that you have read, understood, and agree to be bound by these
                Terms and Conditions.
              </p>
            </div>
          </div>
          <div className="box-border">
            <form
              className="font-medium text-custom-black"
              onSubmit={handleSubmit}
            >
              <fieldset className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName">First name</label>
                    <input
                      className="md:w-[296px] h-12 border-2 border-gray-400 pl-3"
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      className="w-auto md:w-[296px] h-12 border-2 border-gray-400 pl-3"
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                      className="w-auto md:w-[296px] h-12 border-2 border-gray-400 pl-3"
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone-number">Phone number</label>
                    <input
                      className="w-auto md:w-[296px] h-12 border-2 border-gray-400 pl-3"
                      type="tel"
                      id="phone-number"
                      name="phoneNo"
                      value={phoneNo}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="topic">Choose a topic:</label>
                  <br />
                  <select
                    className="h-12 w-full md:w-[616px] border-2 border-gray-400 pl-3"
                    id="topic"
                    name="topic"
                    value={topic}
                    onChange={handleTopicChange}
                  >
                    <option value="">Select one ...</option>
                    <option value="I'm looking for a job / collaboration">
                      I&apos;m looking for a job / collaboration
                    </option>
                    <option value="I have questions about your Courses">
                      I have questions about your Courses
                    </option>
                    <option value="I have other questions">
                      I have other questions
                    </option>
                    <option value="Other's">Other&apos;s</option>
                  </select>
                  <br />
                </div>
                <div className="flex flex-col gap-2">
                  <legend>Message</legend>
                  <textarea
                    className="pl-3 pt-3 w-auto md:w-[616px] h-48 text-custom-black border-2 border-gray-400"
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Type your message..."
                  ></textarea>
                </div>
                <div>
                  <input type="checkbox" id="terms" name="terms" required />
                  <label className="ml-2" htmlFor="terms">
                    I accept the{" "}
                    <span className="underline">
                      <Link href="/terms-and-conditions/">Terms</Link>
                    </span>
                  </label>
                </div>
                <div>
                  <button
                    className={`btn ${
                      isFormValid
                        ? "px-6 py-3 bg-custom-purple text-custom-light font-semibold"
                        : "opacity-50 px-6 py-3 bg-custom-purple text-custom-light font-semibold cursor-not-allowed"
                    }`}
                    type="submit"
                    disabled={!isFormValid}
                  >
                    {isLoading ? (
                      <span className="loading ">loading..</span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
