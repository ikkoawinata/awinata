// 'use client'; // This should be at the top of the file

// import { Button } from "@/components/ui/button";
// import { useState } from 'react'; // Import useState to manage state
// import Card from "@/components/Card";

// // Define separate components for different sections
// const ProjectSection = () => (
//   <div className="flex flex-row gap-3 overflow-x-auto">
//     <Card
//       title="Boost Your Conversion Rate"
//       date="Mar 16, 2020"
//       description="Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
//       author={{
//         role: 'Co-Founder / CTO',
//       }}
//       image="/work/1.png" // Path to the image
//       size="small" // Adjust size here

//     />
//     <Card
//       title="Boost Your Conversion Rate"
//       date="Mar 16, 2020"
//       description="Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
//       author={{
//         role: 'Co-Founder / CTO',
//       }}
//       image="/work/1.png" // Path to the image
//       size="small" // Adjust size here
//     />
//   </div>
// );

// const BlogSection = () => (
//   <div>
//     <h2 className="text-2xl font-bold text-primary">Blog</h2>
//     <p className="text-gray-600">Here you can find blog posts and articles.</p>
//     {/* Add more blog content if needed */}
//   </div>
// );

// const Candidates = () => {
//   // State for storing the clicked button information
//   const [clickedButton, setClickedButton] = useState(null);

//   // Function to handle button click
//   const handleButtonClick = (buttonName) => {
//     setClickedButton(buttonName);
//   };

//   return (
//     <section className="py-2 xl:py-10 h-[100vh] xl:pt-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row justify-between gap-x-8">
//           {/* Text */}
//           <div className="flex flex-col justify-center text-center xl:text-left mx-auto xl:mx-0 max-w-[600px]">
//             <div className="mb-5 font-normal text-primary font-light">
//               A showreel of my personal projects and work that I have done for various.
//             </div>

//             <div className="flex space-x-4 mb-6">
//               <Button
//                 className="slide-button"
//                 variant="default"
//                 size="sm"
//                 onClick={() => handleButtonClick('All My Project')}
//               >
//                 All My Project
//               </Button>
//               <Button
//                 className="slide-button"
//                 variant="outline"
//                 size="sm"
//                 onClick={() => handleButtonClick('Blog')}
//               >
//                 Blog
//               </Button>
//             </div>

//             <div className="flex flex-col mt-6 xl:mt-10">
//               {/* Additional content here */}
//               <div className="container mx-auto p-4">
//                 {/* Conditional Rendering based on clickedButton */}
//                 {clickedButton === 'All My Project' && <ProjectSection />}
//                 {clickedButton === 'Blog' && <BlogSection />}
//               </div>
//             </div>
//           </div>

//           {/* Candidates Section */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Candidates;
//KODE ASLIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

//KODE TAILWIND ASLIIII
// page.jsx
// 'use client'; // This should be the first line

// import React, { useState, useEffect, useRef } from 'react';
// import Card from '@/components/Card';
// import { Button } from '@/components/ui/button'; // Adjust import path if necessary

// const posts = [
//   {
//     id: 1,
//     title: 'Personal Website (AwinataX.)',
//     href: 'https://www.behance.net/gallery/198229151/Personal-Website-(AwinataX)',
//     description:
//       'Hi Folks! Introducing my first project Please scroll down for more detail👇 So the concept of this design is a personal web design that has 4 menus (about, portfolio, services, and contact) where the written part of the contact menu is a different color, because the user is in that menu. In this contact form section, the user can send a message to the website owner by entering their first name, last name, email and the message they want to convey, after that the user can send it using the submit button.',
//     date: 'May 10, 2024',
//     datetime: '2024-05-10',
//     category: { title: 'Link', href: 'https://www.behance.net/gallery/198229151/Personal-Website-(AwinataX)' },
//     author: {
//       name: 'Michael Foster',
//       role: 'Co-Founder / CTO',
//       href: 'https://www.behance.net/gallery/198229151/Personal-Website-(AwinataX)',
//       imageUrl: '/work/p1.png', // Gambar placeholder
//     },
//     marketingTags: ['Figma'] // Menambahkan tag marketing sebagai contoh
//   },
//   {
//     id: 2,
//     title: 'AwinataX. - New Logo',
//     href: 'https://www.behance.net/gallery/198230843/AwinataX-New-Logo',
//     description:
//       'Hi Folks! AwinataX. logo This is the first logo I created',
//     date: 'May 10, 2024',
//     datetime: '2024-05-10',
//     category: { title: 'Link', href: 'https://www.behance.net/gallery/198230843/AwinataX-New-Logo' },
//     author: {
//       name: 'Michael Foster',
//       role: 'Co-Founder / CTO',
//       href: 'https://www.behance.net/gallery/198230843/AwinataX-New-Logo',
//       imageUrl: '/work/p2.png', // Gambar placeholder
//     },
//     marketingTags: ['CorelDRAW'] // Menambahkan tag marketing sebagai contoh
//   },
// ];

// export default function Example() {
//   const [activeSection, setActiveSection] = useState('projects'); // Initialize with 'projects'
//   const cardRefs = useRef([]);

//   const handleButtonClick = (section) => {
//     setActiveSection(section);
//   };

//   useEffect(() => {
//     // Add fade-in effect to all card elements
//     cardRefs.current.forEach((card) => {
//       if (card) {
//         card.classList.add('opacity-100');
//       }
//     });
//   }, [activeSection]);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow py-10 sm:py-20">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl lg:mx-0">
//             {/* Title and description */}
//             <h2 className="text-[16px] pt-[12px] font-normal tracking-tight text-gray-900 dark:text-gray-100">
//               A showreel of my personal projects and work that I have done for various.
//             </h2>
//             <div className="mt-4">
//               <Button
//                 className="mr-4"
//                 variant={activeSection === 'projects' ? 'default' : 'outline'}
//                 onClick={() => handleButtonClick('projects')}
//               >
//                 All My Projects
//               </Button>
//               <Button
//                 className="mr-4"
//                 variant={activeSection === 'blog' ? 'default' : 'outline'}
//                 onClick={() => handleButtonClick('blog')}
//               >
//                 Blog
//               </Button>
//               <Button
//                 variant={activeSection === 'photos' ? 'default' : 'outline'}
//                 onClick={() => handleButtonClick('photos')}
//               >
//                 Photos
//               </Button>
//             </div>
//           </div>
//           <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-2 sm:mt-3 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//             {activeSection === 'projects' && posts.map((post, index) => (
//               <Card
//                 key={post.id}
//                 post={post}
//                 ref={(el) => (cardRefs.current[index] = el)}
//                 className="opacity-0"
//               />
//             ))}
//             {activeSection === 'blog' && (
//               <div className="text-gray-600 dark:text-gray-400">
//                 {/* Example Blog Content */}
//                 <h3 className="text-lg font-semibold">Blog Content Here</h3>
//                 <p>Here you can find blog posts and articles.</p>
//               </div>
//             )}
//             {activeSection === 'photos' && (
//               <div className="text-gray-600 dark:text-gray-400">
//                 {/* Example Photos Content */}
//                 <h3 className="text-lg font-semibold">Photos</h3>
//                 <p>Here you can find a collection of photos.</p>
//                 {/* Add photo elements here */}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//       {/* <footer className="bg-gray-800 text-white py-4 text-center">
//         {}
//       </footer> */}
//     </div>
//   );
// }

//KODE TAILWIND

"use client"; // This should be the first line

import React, { useState, useEffect, useRef } from "react";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button"; // Adjust import path if necessary
import { motion } from "framer-motion";
import "./styles.css"; // Import the CSS file
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: " Design Personal Website (AwinataX.)",
    href: "https://www.behance.net/gallery/198229151/Personal-Website-(AwinataX)",
    description:
      "Hi Folks! Introducing my first project Please scroll down for more detail👇 So the concept of this design is a personal web design that has 4 menus (about, portfolio, services, and contact) where the written part of the contact menu is a different color, because the user is in that menu. In this contact form section, the user can send a message to the website owner by entering their first name, last name, email and the message they want to convey, after that the user can send it using the submit button.",
    date: "May 10, 2024",
    datetime: "2024-05-10",
    category: {
      title: "Link",
      href: "https://www.behance.net/gallery/198229151/Personal-Website-(AwinataX)",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/198229151/Personal-Website-(AwinataX)",
      imageUrl: "./hero/p1.png", // Gambar placeholder
    },
    marketingTags: ["Figma"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 2,
    title: "AwinataX. - New Logo",
    href: "https://www.behance.net/gallery/198230843/AwinataX-New-Logo",
    description: "Hi Folks! AwinataX. logo This is the first logo I created",
    date: "May 10, 2024",
    datetime: "2024-05-10",
    category: {
      title: "Link",
      href: "https://www.behance.net/gallery/198230843/AwinataX-New-Logo",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/198230843/AwinataX-New-Logo",
      imageUrl: "./hero/p2.png", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 3,
    title: "Sengoku Basara (UI Design)",
    href: "https://www.behance.net/gallery/198231291/Sengoku-Basara-(UI-Design)",
    description:
      "Hi Folks! This is my #2 Project Please scroll down for more detail👇 Sengoku Basara UI Project 🎮 Welcome to my design project featuring a new look for the Sengoku Basara website! Combining the epic feel of the Sengoku Jidai period with a modern aesthetic, the project aims to provide a more immersive web experience for fans of anime and history.",
    date: "May 10, 2024",
    datetime: "2024-05-10",
    category: {
      title: "Link",
      href: "https://www.behance.net/gallery/198231291/Sengoku-Basara-(UI-Design)",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/198231291/Sengoku-Basara-(UI-Design)",
      imageUrl: "./hero/p3.png",
    },
    marketingTags: ["CorelDRAW", "Figma"],
  },
  {
    id: 4,
    title: "2D Motion Graphic | Project 1",
    href: "https://www.behance.net/gallery/198520153/1-Logo-Animation",
    description:
      "In this video, I would like to introduce my first project, which is a Logo Animation. To create this 2D logo project, I used Adobe After Effects to bring it to life.",
    date: "May 14, 2024",
    datetime: "2024-05-14",
    category: {
      title: "Link",
      href: "https://www.behance.net/gallery/198520153/1-Logo-Animation",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/198520153/1-Logo-Animation",
      imageUrl: "./hero/L1.png",
    },
    marketingTags: ["Adobe After Effect"],
  },
  {
    id: 5,
    title: "Stomp Typography | After Effects Edit | Project 2",
    href: "https://www.behance.net/gallery/199109427/2-Stomp-Typography-After-Effects-Edit-Project-2",
    description:
      "Hi Folks! In this project, we are exploring simple kinetic stomp typography.",
    date: "May 21, 2024",
    datetime: "2024-05-21",
    category: {
      title: "Link",
      href: "https://www.behance.net/gallery/199109427/2-Stomp-Typography-After-Effects-Edit-Project-2",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/199109427/2-Stomp-Typography-After-Effects-Edit-Project-2",
      imageUrl: "./hero/intro.png", // Gambar placeholder
    },
    marketingTags: ["Adobe After Effect"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 6,
    title: "CloudBeauty - Register Page",
    href: "https://www.behance.net/gallery/200099671/CloudBeauty-Register-Page-(UI-Design)",
    description:
      "Hi Folks! Introducing the Register page for CloudBeauty project. Here we create a registration form with a new UI for the user. For this reason, we will also create a website menu section for CloudBeauty products which will be integrated into the user registration form. We hope you like it. Thank you for visiting our project!",
    date: "June 3, 2024",
    datetime: "2024-06-3",
    category: {
      title: "Link",
      href: "https://www.behance.net/gallery/200099671/CloudBeauty-Register-Page-(UI-Design)",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/200099671/CloudBeauty-Register-Page-(UI-Design)",
      imageUrl: "./hero/beauty.png", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW", "Figma"], // Menambahkan tag marketing sebagai contoh
  },

  {
    id: 7,
    title: "DESIGN Interactive Tab Bar Menu",
    href: "https://www.behance.net/gallery/201660997/Interactive-Tab-Bar-Menu",
    description:
      "This project is to create an interactive design animation on the menu bar tab as a reference idea that is suitable for various other project displays. hope you like this design. Thank you for visiting our project!",
    date: "June 24, 2024",
    datetime: "2024-06-24",
    category: {
      title: "Link",
      href: "https://www.behance.net/gallery/201660997/Interactive-Tab-Bar-Menu",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/201660997/Interactive-Tab-Bar-Menu",
      imageUrl: "./hero/p6.png", // Gambar placeholder
    },
    marketingTags: ["Figma"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 8,
    title: "Redesign Website Unilever Indonesia",
    href: "https://www.behance.net/gallery/202859285/Redesign-Website-Unilever-Indonesia",
    description:
      "Currently I am redoing the Unilever Indonesia website design. I hope you like this project. Thank you for visiting this project.",
    date: "July 9, 2024",
    datetime: "2024-07-9",
    category: {
      title: "Link",
      href: "https://www.behance.net/gallery/202859285/Redesign-Website-Unilever-Indonesia",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/202859285/Redesign-Website-Unilever-Indonesia",
      imageUrl: "./hero/p5.png", // Gambar placeholder
    },
    marketingTags: ["Figma"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 9,
    title: "MultiCalcPro",
    href: "https://github.com/ikkoawinata/MultiCalcPro-app/tree/ikkoawinata.github.io",
    description:
      "The MultiCalcPro project is designed to be a comprehensive calculator capable of handling a wide range of calculations, including temperature, mass units, and more",
    date: "August 10, 2024",
    datetime: "2024-08  -10",
    category: {
      title: "Link",
      href: "https://github.com/ikkoawinata/MultiCalcPro-app/tree/ikkoawinata.github.io",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://github.com/ikkoawinata/MultiCalcPro-app/tree/ikkoawinata.github.io",
      imageUrl: "./hero/multicalcpro.png", // Gambar placeholder
    },
    marketingTags: ["Bootstrap"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 10,
    title: "Computer Network",
    href: "./computernetwork/",
    description:
      "In this project, I designed a school computer network that covers 11 rooms using Cisco Packet Tracer. This project combines various network topologies to ensure optimal connectivity throughout the school area. Each room, including the computer lab, teachers room, administration room, and classrooms, is connected through a combination of star, bus, and mesh topologies. This infrastructure is designed to support various network services such as FTP, DNS, and DHCP",
    date: "November 29, 2023",
    datetime: "2024-08  -10",
    category: { title: "More", href: "/app/projects/computernetwork/" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/jaringan1.png", // Gambar placeholder
    },
    marketingTags: ["Cisco Packet Tracer"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 11,
    title: "First Personal Website",
    href: "https://awinatax.vercel.app/",
    description:
      "Build a simple first landing page website project using the Bootstrap framework",
    date: "November 30, 2023",
    datetime: "2024-08  -10",
    category: { title: "More", href: "https://awinatax.vercel.app/" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://awinatax.vercel.app/",
      imageUrl: "./hero/web1.png", // Gambar placeholder
    },
    marketingTags: ["Bootstrap"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 12,
    title: "Second Personal Website Development",
    href: "",
    description:
      " - ",
    date: "September 5, 2024",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/web2.png", // Gambar placeholder
    },
    marketingTags: ["Reactjs", "Tailwind", "Framer Motion"], // Menambahkan tag marketing sebagai contoh
  },
];

const design = [
  {
    id: 13,
    title: "PROTECT YOUR PRIVACY IF YOU WANNA ALIVE",
    href: "./app/design2/",
    description:
      'Cyber Security Competition Activities in 2022 with the theme "Protect Your Privacy For Millennial Generation" organized by the Informatics Engineering Student Association Faculty of Engineering, Surabaya State University',
    date: "June 25, 2022",
    datetime: "2022-06-25",
    category: { title: "More", href: "/app/design2/" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/port1.png", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 14,
    title: "3rd Place in Infographic Challenge",
    href: "./app/design2/",
    description:
      "Organized by the GEMA UNESA Campus Press Institute with the theme Take Your Infographic to the Next Level with Illustrations",
    date: "June 25, 2022",
    datetime: "2022-06-25",
    category: { title: "More", href: "/app/design2/" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/port3.png", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 15,
    title: "Perkembangan Teknologi Informasi Era Digital 5.0",
    href: "./app/design3/",
    description:
      'Graphic Design Training Activities with the theme "Explore Your Passion, Build Your Imagination with Your Design Creation", organized by the Science Department Student Association, Faculty of Mathematics and Natural Sciences, Surabaya State University',
    date: "October 20, 2022",
    datetime: "2022-06-25",
    category: { title: "More", href: "/app/design3/" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/port2.png", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 16,
    title: "Lestarikan Alam Hijau Untuk Masa Depan Bumi Kita ",
    href: "./app/design4/",
    description:
      "Graphic Design Webinar Activity organized by IMJ UNESA (Jombang Student Association, Surabaya State University)",
    date: "October 20, 2022",
    datetime: "2022-06-25",
    category: { title: "More", href: "/app/design4/" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/port4.jpg", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW"], // Menambahkan tag marketing sebagai contoh
  },
];

const photography = [
  {
    id: 17,
    title: "",
    description:
      '',
    date: "",
    datetime: "2024-08-10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/satu.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 18,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/dua.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 19,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/tiga.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 20,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/empat.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 21,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/lima.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 22,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/enam.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 23,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/tujuh.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 24,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/delapan.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 25,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/sembilan.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 26,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/sepuluh.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 27,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/sebelas.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 28,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/duabelas.png", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
 
];

export default function Example() {
  const [activeSection, setActiveSection] = useState("projects");
  const [selectedCardId, setSelectedCardId] = useState(null);
  const cardRefs = useRef([]);

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        card.classList.add("opacity-100");
      }
    });
  }, [activeSection]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-[16px] pt-[12px] font-normal tracking-tight text-gray-900 dark:text-gray-100">
              A showreel of my personal projects and work that I have done for various.
            </h2>
            <div className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Button
                  className={`button ${activeSection === "projects" ? "active" : ""}`}
                  onClick={() => handleButtonClick("projects")}
                >
                  All My Projects
                </Button>
                <Button
                  className={`button ${activeSection === "blog" ? "active" : ""}`}
                  onClick={() => handleButtonClick("blog")}
                >
                  Blog
                </Button>
                <Button
                  className={`button ${activeSection === "photos" ? "active" : ""}`}
                  onClick={() => handleButtonClick("photos")}
                >
                  Design
                </Button>
                <Button
                  className={`button ${activeSection === "photography" ? "active" : ""}`}
                  onClick={() => handleButtonClick("photography")}
                >
                  Photography
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-6 grid max-w-2xl gap-x-8 gap-y-16 pt-2 sm:mt-3 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {activeSection === "projects" &&
              posts.map((post, index) => (
                <Card
                  key={post.id}
                  post={post}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`card-container opacity-0 ${selectedCardId === post.id ? 'selected' : ''}`}
                  onClick={() => handleCardClick(post.id)}
                />
              ))}
            {activeSection === "blog" && (
              <div className="text-gray-600 dark:text-gray-400">
                <h3 className="text-lg font-semibold">Blog Content Here</h3>
                <p>Coming Soon :) </p>
              </div>
            )}
            {activeSection === "photos" &&
              design.map((post, index) => (
                <Card
                  key={post.id}
                  post={post}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`card-container opacity-0 ${selectedCardId === post.id ? 'selected' : ''}`}
                  onClick={() => handleCardClick(post.id)}
                />
              ))}
            {activeSection === "photography" &&
              photography.map((post, index) => (
                <div
                  key={post.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`card-container opacity-0 ${selectedCardId === post.id ? 'selected' : ''}`}
                >
                  <a href={post.href}>
                    <img
                      src={post.author.imageUrl}
                      alt={post.title}
                      className="card-image w-full h-auto rounded-lg"
                    />
                  </a>
                </div>
              ))}
          </div>
          {selectedCardId === 10 && (
            <section className="mt-6 p-4 border rounded-lg bg-gray-100">
              <h3 className="text-lg font-semibold">
                Detailed View of Computer Project
              </h3>
              <p>
                This detailed view provides additional insights into the
                Computer project, which involves designing a school computer
                network. You can explore the network topology, learn about the
                services included, and understand the overall infrastructure.
              </p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
