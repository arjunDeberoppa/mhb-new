import React from "react";
import Link from "next/link";

export const metadata = {
  title: "MHB Academy | Thank You",
};

export default function page() {
  return (
    <div>
      <section>
        <div className="pt-[100px] pb-[76px] bg-gray-100 border-t border-gray-200">
          <div className="flex flex-col items-center justify-between max-w-[471] h-[424px]">
            <p className="text-[32px] font-bold">Thank you for applying!</p>
            <div>
              <Link href="/">
                <button className="py-3 px-6 text-custom-light bg-custom-purple">
                  Back to home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
