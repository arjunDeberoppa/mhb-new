"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close the mobile menu when navigating to another page
    const handleRouteChange = () => {
      if (pathname !== prevPathname) {
        setIsMenuOpen(false);
        setPrevPathname(pathname);
      }
    };

    handleRouteChange();

    // Listen for route changes
    const handleRouteChangeStart = () => {
      handleRouteChange();
    };

    window.addEventListener("popstate", handleRouteChangeStart);

    return () => {
      window.removeEventListener("popstate", handleRouteChangeStart);
    };
  }, [pathname, prevPathname]);

  return (
    <header
      className={`${
        pathname !== "/courses" && "sticky"
      } top-0 left-0 w-full bg-white z-50 shadow-md`}
    >
      <div className="flex container max-w-[1440px] mx-auto py-3 md:py-4 justify-between">
        <div className="flex gap-5 items-center">
          <Link href={`/`} className="w-auto ">
            <Image
              width={102}
              height={41}
              className="w-[101px] h-10"
              src="/assets/logo.svg"
              alt="logo"
            />
          </Link>
          {/* border-r-2 pr-5 border-gray-400 flex gap-8 */}
          {/* <Link href={`/`}>
            <Image
              width={37}
              height={32}
              className="w-[36.36px] h-[31.42px]"
              src="/assets/second_logo.svg"
              alt="logo"
            />
          </Link> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-8">
          <div className="flex lg:gap-8 items-center">
            <Link href="/blogs/">
              <Button href="" text="Blogs" />
            </Link>
            <Link href="/courses/">
              <Button href="" text="Courses" />
            </Link>
            <Link href={`/about-us/`}>
              <Button href="" text="About us" />
            </Link>
            <Link href={`/contact-us/`}>
              <Button href="" text="Contact us" />
            </Link>
          </div>
          <div className="flex items-center space-x-4 text-custom-light">
            <Button
              href="#"
              className="bg-custom-gray text-black px-4 py-2 loginButton login"
              text="Log In"
            />
            <Button
              className="bg-custom-purple text-custom-light px-4 py-2 loginButton signup"
              href="#"
              text="Sign up"
            />
            <Button
              className="bg-custom-purple text-custom-light px-4 py-2 postLogin goToAccountButton"
              href="#"
              text="My Account"
              style={{ display: "none" }}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="outline-none mobile-menu-button"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 text-gray-500 hover:text-custom-purple"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-500 hover:text-custom-purple"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-5 md:px-16 pt-5 pb-3 space-y-1 h-[800px]">
          <div className="flex flex-col gap-3">
            <Link
              href="/blogs/"
              className="block py-1 my-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 max-w-[70px]"
            >
              Blogs
            </Link>
            <Link
              href="/courses/"
              className="block py-1 my-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 max-w-[70px]"
            >
              Courses
            </Link>
            <Link
              href="/about-us/"
              className="block py-1 my-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 max-w-[80px]"
            >
              About us
            </Link>
            <Link
              href="/contact-us/"
              className="block py-1 my-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 max-w-[90px]"
            >
              Contact us
            </Link>
          </div>
          <div className="py-6">
            <div className="flex flex-col max-w-[335px] gap-5">
              <Button
                className="bg-custom-gray text-black px-4 py-2 loginButton login"
                href="courses.html"
                text="Log In"
              />
              <Button
                className="bg-custom-purple text-custom-light px-4 py-2 loginButton signup"
                href="courses.html"
                text="Sign up"
              />
              <Button
                className="bg-custom-purple text-custom-light px-4 py-2 postLogin goToAccountButton"
                href="#"
                text="My Account"
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
