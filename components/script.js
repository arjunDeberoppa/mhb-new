// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export function animateCards() {
//   const cards = gsap.utils.toArray(".custom-card");

//   cards.forEach((card, index) => {
//     gsap.to(card, {
//       y: -500,
//       rotate: -9,
//       stagger: 2,
//       scrollTrigger: {
//         duration: 3,
//         trigger: card,
//         start: `center ${index * 5 + 20}%`,
//         pin: true,
//         end: "bottom 90%",
//         scrub: 2,
//         // markers: true,
//       },
//     });
//   });

//   ScrollTrigger.create({
//     trigger: ".desc-section",
//     start: "top 20%", // Adjusted start value
//     end: "top 10%",
//     pin: true,
//     // markers: true,
//   });
// }
