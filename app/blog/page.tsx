import React from "react";

export default function page() {
  return <div>page</div>;
}

// import React from "react";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import Header from "@/components/homePage/header";
// import FooterSection from "@/components/homePage/footer";
// import CareerSection from "@/components/careerSection";
// import BlogPost from "@/components/blogsPost";
// import FeaturedMediaSection from "@/components/homePage/featuredCompanies";
// import StartTransformation from "@/components/homePage/transformation";

// export default function Blog() {
//   return (
//     <div>
//       {/* header section */}
//       <Header />
//       {/* 1st section */}
//       <section>
//         <div className="py-16 container max-w-[1440px] mx-auto md:py-24 flex flex-col gap-8 sm:gap-14">
//           <div className="flex flex-col gap-6">
//             <div className="flex gap-3.5 items-center">
//               <p>Blog</p>
//               <Image
//                 width={7}
//                 height={10}
//                 src="/assets/arrowDark.svg"
//                 alt="arrow"
//               />
//               <p>Category</p>
//             </div>
//             <div className="flex flex-col gap-10">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 The Benefits of Regular Exercise for
//                 <span className="block">Mental Health</span>
//               </h2>
//               <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
//                 <div className="flex gap-4">
//                   <Image
//                     src="/assets/blogs/dp-image.jfif"
//                     alt="dp"
//                     className="rounded-full w-14 h-14"
//                     width={56}
//                     height={56}
//                   />
//                   <div className="flex flex-col gap-1">
//                     <p>Dhrumil Bhojani</p>
//                     <div className="flex gap-2 items-center">
//                       <p>11 Jan 2022</p>
//                       <Image
//                         width={4}
//                         height={4}
//                         src="/assets/dot.svg"
//                         alt="dot"
//                       />
//                       <p>5 min read</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <Image
//                     width={20}
//                     height={24}
//                     src="/assets/link.svg"
//                     alt="link"
//                   />
//                   <Image
//                     width={24}
//                     height={24}
//                     src="/assets/linkedinDark.svg"
//                     alt="linkedin"
//                   />
//                   <Image
//                     width={24}
//                     height={24}
//                     src="/assets/xDark.svg"
//                     alt="x"
//                   />
//                   <Image
//                     width={20}
//                     height={24}
//                     src="/assets/facebookDark.svg"
//                     alt="facebook"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Image
//             src="/assets/blogs/blog-placeholder-1.png  "
//             alt="placeholder"
//             width={1440}
//             height={600}
//           />
//         </div>
//       </section>
//       {/* 2nd section */}
//       <section className="bg-custom-light">
//         <div className="flex flex-col xl:flex-row gap-2 xl:gap-20 pb-16 container max-w-[1440px] mx-auto md:pb-28">
//           <div className="max-w-3xl flex flex-col gap-6">
//             <h2 className="text-[40px] font-bold pb-6">Introduction</h2>
//             <p>
//               Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
//               suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
//               quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
//               posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
//               feugiat sapien varius id.
//             </p>
//             <p>
//               Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
//               mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
//               quis fusce augue enim. Quis at habitant diam at. Suscipit
//               tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
//               molestie aliquet sodales id est ac volutpat.
//             </p>
//             <div className="py-12 flex flex-col gap-4">
//               <Image
//                 width={1000}
//                 height={400}
//                 src="/assets/blogs/place-holder-2.png"
//                 alt="placeholder"
//               />
//               <p className="text-sm pl-2 border-l-2 border-custom-black">
//                 Image caption goes here
//               </p>
//             </div>
//             <p className="text-xl font-bold">
//               Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
//               nulla odio nisl vitae. In aliquet pellentesque aenean hac
//               vestibulum turpis mi bibendum diam. Tempor integer aliquam in
//               vitae malesuada fringilla.
//             </p>
//             <p>
//               Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
//               commodo consectetur convallis risus. Sed condimentum enim
//               dignissim adipiscing faucibus consequat, urna. Viverra purus et
//               erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
//               congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
//               neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
//               id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
//             </p>
//             <p className="my-9 pl-5 border-l-2 border-custom-black text-xl italic">
//               &quot;Ipsum sit mattis nulla quam nulla. Gravida id gravida ac
//               enim mauris id. Non pellentesque congue eget consectetur turpis.
//               Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
//               aenean tempus.&quot;
//             </p>
//             <p>
//               Tristique odio senectus nam posuere ornare leo metus, ultricies.
//               Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
//               Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
//               suscipit accumsan. Cursus viverra aenean magna risus elementum
//               faucibus molestie pellentesque. Arcu ultricies sed mauris
//               vestibulum.
//             </p>
//             <h3 className="text-[32px] font-bold mt-6">Conclusion</h3>
//             <p>
//               Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
//               id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
//               blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
//               at scelerisque amet nulla purus habitasse.
//             </p>
//             <p>
//               Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
//               condimentum mi massa. In tincidunt pharetra consectetur sed duis
//               facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
//               dictum eget nibh tortor commodo cursus.
//             </p>
//             <p>
//               Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
//               aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
//               id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
//               dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
//               tortor.Nulla adipiscing erat a erat. Condimentum lorem posuere
//               gravida enim posuere cursus diam.
//             </p>
//           </div>
//           <div className="bg-white shadow-lg flex flex-col gap-4 px-8 py-8 mt-32 rounded-sm w-auto h-auto md:w-[464px] md:h-96 xl:h-[340px]">
//             <p className="text-xl font-bold">Subscribe to newsletter</p>
//             <p>
//               Subscribe to receive the latest blog posts to your inbox every
//               week.
//             </p>
//             <input
//               className="px-3 py-2.5 border-2 border-gray-300"
//               type="text"
//               placeholder="Enter your email"
//             />
//             <button className="bg-custom-green text-custom-light py-2 uppercase font-medium">
//               Subscribe
//             </button>
//             <div>
//               <p className="text-xs">By subscribing you agree to with our</p>
//               <p className="text-xs underline">Privacy Policy.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* 3rd section */}
//       <section>
//         <div className="container max-w-[1440px] mx-auto py-16 md:py-28 flex flex-col gap-20">
//           <div className="flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between md:items-end">
//             <div className="flex flex-col gap-6">
//               <h2 className="text-5xl font-bold">Related posts</h2>
//               <p className="text-lg">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 <br />
//               </p>
//             </div>
//             <div>
//               <button className="px-6 py-3 bg-gray-300 uppercase font-medium">
//                 View all
//               </button>
//             </div>
//           </div>
//           <div className="flex flex-col gap-12">
//             <div className="flex flex-col md:flex-row gap-16">
//               <BlogPost
//                 className="xl:flex-row"
//                 imgClassName="w-[296px]"
//                 topic="Fitness"
//                 imgSrc="/assets/Blogs/Blog Placeholder Image-4.png"
//                 title="The Impact of Sleep on Fitness Performance"
//                 description="Discover how quality sleep can enhance your fitness performance and recovery."
//                 divWidth="flex flex-col gap-4 md:w-72 lg:w-auto"
//                 heading="text-xl md:text-2xl"
//               />
//               <BlogPost
//                 className="xl:flex-row"
//                 imgClassName="w-[296px]"
//                 topic="Fitness"
//                 imgSrc="/assets/Blogs/Blog Placeholder Image-4.png"
//                 title="The Impact of Sleep on Fitness Performance"
//                 description="Discover how quality sleep can enhance your fitness performance and recovery."
//                 divWidth="flex flex-col gap-4 md:w-72 lg:w-auto"
//                 heading="text-xl md:text-2xl"
//               />
//             </div>
//             <div className="flex flex-col md:flex-row gap-16">
//               <BlogPost
//                 className="xl:flex-row"
//                 imgClassName="w-[296px]"
//                 topic="Fitness"
//                 imgSrc="/assets/Blogs/Blog Placeholder Image-4.png"
//                 title="The Impact of Sleep on Fitness Performance"
//                 description="Discover how quality sleep can enhance your fitness performance and recovery."
//                 divWidth="flex flex-col gap-4 md:w-72 lg:w-auto"
//                 heading="text-xl md:text-2xl"
//               />
//               <BlogPost
//                 className="xl:flex-row"
//                 imgClassName="w-[296px]"
//                 topic="Fitness"
//                 imgSrc="/assets/Blogs/Blog Placeholder Image-4.png"
//                 title="The Impact of Sleep on Fitness Performance"
//                 description="Discover how quality sleep can enhance your fitness performance and recovery."
//                 divWidth="flex flex-col gap-4 md:w-72 lg:w-auto"
//                 heading="text-xl md:text-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* 4th section */}
//       <CareerSection />
//       {/* 5th section */}
//       <StartTransformation />
//       {/* 6th section */}
//       <FeaturedMediaSection />
//       {/* Footer Section */}
//       <FooterSection />
//     </div>
//   );
// }
