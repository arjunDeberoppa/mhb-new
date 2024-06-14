import React from "react";

export default function PolicyDescription() {
  return (
    <section>
      <div className="container max-w-[1440px] mx-auto py-10 md:py-20">
        <h2 className="text-[32px] font-bold">Information We Collect:</h2>
        <p className="text-lg  ">
          We may collect several types of information from and about you:
        </p>
        <h3 className="text-[20px] font-bold pt-10">Personal Information:</h3>
        <p className="font-medium">
          This includes information that can identify you as an individual, such
          as your name, email address, phone number, postal address, weight,
          medical conditions/history, photograph, video; IP address, browser
          type, operating system, language preferences, and browsing history on
          our Website.
        </p>
        <h3 className="text-[20px] font-bold pt-10">
          Non-Personal Information:
        </h3>
        <p className="font-medium">
          This includes information that does not identify you as an individual,
          such as demographic data, usage data, and aggregate statistics.
        </p>
        <h2 className="text-[32px] font-bold mt-10">
          How We Collect Information
        </h2>
        <p className="font-medium">
          We collect information from you in several ways:
        </p>
        <div className="flex items-start">
          <div className="mr-2">1.</div>
          <p className="font-medium">
            Directly from you: When you provide information to us through our
            Website/Social media handles&rsquo; forms, such as when you create
            an account, subscribe to our newsletter, or contact us.
          </p>
        </div>
        <div className="flex items-start ">
          <div className="mr-2">2.</div>
          <p className="font-medium">
            Automatically: As you navigate the Website, we may automatically
            collect information using standard internet technologies, such as
            cookies and web beacons. This information may include your IP
            address, browser type, operating system, language preferences, and
            browsing history on our Website.
          </p>
        </div>
        <div className="flex items-start ">
          <div className="mr-2">3.</div>
          <p className="font-medium">
            From Third Parties: We may receive information about you from
            third-party sources, such as social media platforms or public
            databases.
          </p>
        </div>
        <h2 className="text-[32px] font-bold mt-16">
          How We Use Your Information:
        </h2>
        <p className="font-bold mt-4">
          We use your information for various purposes, including:
        </p>
        <div className="flex items-start">
          <div className="mr-2">1.</div>
          <p className="font-medium">
            To provide and improve our Website and services.
          </p>
        </div>
        <div className="flex items-start">
          {" "}
          <div className="mr-2">2.</div>
          <p className="font-medium">
            To personalize your experience on our Website.
          </p>
        </div>
        <div className="flex items-start">
          {" "}
          <div className="mr-2">3.</div>
          <p className="font-medium">
            To send you communications, such as newsletters, marketing emails,
            and customer support messages.
          </p>
        </div>
        <div className="flex items-start">
          {" "}
          <div className="mr-2">4.</div>
          <p className="font-medium">
            To analyze how you use our Website and to improve our services.
          </p>
        </div>
        <div className="flex items-start">
          {" "}
          <div className="mr-2">5.</div>
          <p className="font-medium">To fulfill legal obligations.</p>
        </div>
        <h3 className="font-bold mt-4">Sharing Your Information:</h3>
        <div className="flex items-start">
          <div className="mr-2">1.</div>
          <p className="font-medium">
            Cookies: You can control cookies through your browser settings.
          </p>
        </div>
        <div className="flex items-start">
          {" "}
          <div className="mr-2">2.</div>
          <p className="font-medium">
            Marketing Emails: You can opt out of receiving marketing emails from
            us by clicking the &quot;unsubscribe&quot; link in any of our
            marketing emails.
          </p>
        </div>
        <div className="flex items-start">
          {" "}
          <div className="mr-2">3.</div>
          <p className="font-medium">
            Access and Deletion: You may request access to or deletion of your
            personal information by contacting us.
          </p>
        </div>
        <h3 className="text-[32px] font-bold mt-6">Data Security:</h3>
        <p className="font-medium mt-6">
          We take reasonable precautions to protect your information from
          unauthorized access, disclosure, alteration, or destruction. However,
          no internet transmission is completely secure, and we cannot guarantee
          the security of your information. International Transfers
        </p>
        <p className="font-medium">
          Your information may be transferred to and processed in countries
          other than your own, which may have different data protection laws. We
          will take steps to ensure that your information is treated in
          accordance with this Policy and applicable laws.
        </p>
        <h3 className="text-[32px] font-bold mt-10">
          Children&rsquo;s Privacy
        </h3>
        <p className="font-medium mt-6">
          Our Website is not intended for children under the age of 18. We do
          not knowingly collect personal information from children under the age
          of 18. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us.
        </p>
        <h3 className="text-[32px] font-bold mt-10">Changes to this Policy</h3>
        <p className="font-medium mt-6">
          We may update this Policy from time to time. We will notify you of any
          changes by posting the new Policy on this page.
        </p>
        <h3 className="text-[32px] font-bold mt-10">Contact Us</h3>
        <p className="font-medium mt-6">
          If you have any questions about this Policy, please contact us at
          info@myhealthbuddy.co
        </p>
      </div>
    </section>
  );
}
