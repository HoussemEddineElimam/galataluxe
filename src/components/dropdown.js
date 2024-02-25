"use client"
import Link from 'next/link';
import { useState } from 'react';

const Footer = ({categories}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg">Your Footer Content Here</p>
        
       
      </div>
    </footer>
  );
};

export default Footer;