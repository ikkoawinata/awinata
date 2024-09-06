"use client";
import { IconName } from "react-icons/ai";
import { LuFigma } from "react-icons/lu";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiBehanceFill,
  RiInstagramFill,
  RiMailFill,
} from "react-icons/ri";

import Link from "next/link";

// import React from 'react'

const icons = [
  // {
  //   path: "/",
  //   name: <LuFigma />,
  // },
  {
    path: "https://www.linkedin.com/in/ikko-cahya-awinata-182926253/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/ikkoawinata",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.behance.net/gallery/198231291/Sengoku-Basara-(UI-Design)",
    name: <RiBehanceFill />,
  },
  {
    path: "https://www.instagram.com/ikkoc_awinata/",
    name: <RiInstagramFill />,
  },
  {
    path: "mailto:ikkocahyaawinata@gmail.com",
    name: <RiMailFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
