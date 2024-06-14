import Image from "next/image";

interface Props {
  updateSearch: any;
  search: string;
}
export default function SearchBanner({ updateSearch, search }: Props) {
  return (
    <section
      className="relative w-full md:h-auto text-white bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('./assets/section-2.webp')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-custom-purple opacity-80 z-0 flex flex-col gap-20"></div>
      <div className="container max-w-[1440px] mx-auto">
        <div className="max-w-3xl py-10 md:py-20 z-10">
          <div className="relative flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Explore
              <span className="text-custom-light-green"> Courses</span>
            </h2>
            <div className="w-[300px] sm:w-[500px] flex flex-col gap-6">
              <p className="md:text-lg">
                Authentic and high quality courses, specilly curated by
                experienced teachers for deep study.
              </p>
              <div className="relative">
                <div className="relative z-10 w-[300px] sm:w-[500px]">
                  <input
                    onChange={(e) => updateSearch(e.target.value)}
                    className="relative text-custom-black z-0 py-4 pl-[28px] w-full"
                    type="text"
                    placeholder="Search Courses"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/search.svg"
                    alt="search"
                    className="w-[30px] h-[30px] absolute inset-y-0 right-0 my-auto mr-4 py-1 px-1 cursor-pointer z-10" // Adjusted positioning
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
