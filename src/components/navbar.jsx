import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Navbar() {
  return (
    <header class="bg-[#0A0D4E]">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block text-teal-600" href="/">
              <span class="sr-only">Home</span>
              <img src={logo} alt="Logo" className="h-12 w-100" />
            </a>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <a
                  class="rounded-2xl bg-[#6373A4] px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/generate"
                >
                  Generate
                </a>

                <a
                  class="rounded-2xl bg-[#6373A4] px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/gallery"
                >
                  Gallery
                </a>

                <a
                  class="rounded-2xl bg-[#6373A4] px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/login"
                >
                  Login
                </a>

                <a
                  class="rounded-2xl bg-[#6373A4] px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/signup"
                >
                  SignUp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
