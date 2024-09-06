"use client"; // This should be at the top of the file

import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import Link for navigation
import { useState } from 'react'; // Import useState to manage state
import { ChevronRight } from "lucide-react"; // Import ChevronRight icon
import Card from "@/components/Card"; // If you're using this, ensure it's used in the component
import "./computer.css";
import Image from "next/image";

const Candidates = () => {
  // State for storing the clicked button information
  const [clickedButton, setClickedButton] = useState(null);

  return (
    <section className="py-2 xl:py-10 h-[140vh] xl:pt-10 bg-no-repeat bg-bottom dark:bg-none relative flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        {/* Image with Description */}
        <div className="w-full max-w-md mx-auto p-4">
          <img 
            src="./hero/port2.png" 
            alt="Descriptive Alt Text" 
            className="w-full h-auto object-cover"
          />
          <p className="mt-4 text-md font-light text-gray-700 dark:text-gray-300 text-justify">
          Graphic Design Training Activities with the theme "Explore Your Passion, Build Your Imagination with Your Design Creation", organized by the Science Department Student Association, Faculty of Mathematics and Natural Sciences, Surabaya State University
          </p>
          <p className="mt-8 text-sm font-bold text-gray-700 dark:text-gray-300 text-justify">
          • 20 October 2022
          </p>
        </div>

        <div className="absolute top-4 left-4 md:top-8 md:left-8">
          <Link href="/projects">
            <Button 
              variant="outline" 
              size="icon" 
              className="flex items-center bg-gray-300 dark:bg-gray-700"
            >
              <ChevronRight className="h-4 w-4 transform rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Candidates;
