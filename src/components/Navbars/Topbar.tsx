/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

import { FaRegUser, FaChevronDown } from "react-icons/fa";
export const Toolbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto  w-full bg-white flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
      <div className="inline-flex items-center space-x-2">
        <span className="font-medium sm:text-2xl text-base">Welcome</span>

        <span>
          <img src="assets/icons/wave.png" alt="wave" />
        </span>
      </div>

      <div className="space-x-2 flex items-center">
        <div className="text-gray-400">8 Jul, 2024</div>
        <img
          src="assets/icons/bell-notification.png"
          alt="bell"
          className="w-6 h-6"
        />

        <div className="hidden lg:flex  items-center space-x-2">
          <img
            src="https://images5.alphacoders.com/325/325672.jpg"
            alt="user"
            className="h-5 w-5 rounded-full"
          />
          <span className="flex gap-2 items-center ">
            <span className="text-sm  font-medium text-gray-900">
              Dan Abromov
            </span>
            <span>
              <FaChevronDown />
            </span>
          </span>
        </div>

        <div className="lg:hidden sm:block">
          <img
            src="https://images5.alphacoders.com/325/325672.jpg"
            alt="user"
            className="h-6 w-6 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};