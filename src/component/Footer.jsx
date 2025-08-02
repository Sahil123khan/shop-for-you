import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="">
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Stack vertically, Desktop: Flex with space between */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
            {/* ShopKart Info */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2">ShopKart</h3>
              <p className="text-sm md:text-base">© 2025 ShopKart. All rights reserved.</p>
              <p className="text-sm md:text-base">Created by Sahil Khan</p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 md:mb-2">Quick Links</h4>
              <ul className="space-y-2 md:space-y-1">
                <li>
                  <a className="hover:text-sky-300 transition-colors duration-200" href="/">Home</a>
                </li>
                <li>
                  <a className="hover:text-sky-300 transition-colors duration-200" href="/about">About</a>
                </li>
                <li>
                  <a className="hover:text-sky-300 transition-colors duration-200" href="/blogs">Blogs</a>
                </li>
                <li>
                  <a className="hover:text-sky-300 transition-colors duration-200" href="/detaile">Detaile</a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 md:mb-2">Contact</h4>
              <p className="text-sm md:text-base">Email: support@shopkart.com</p>
              <p className="text-sm md:text-base">Phone: +91 9876543210</p>
            </div>
            
            {/* Social Media */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 md:mb-2">Follow Us</h4>
              <div className="flex justify-center md:justify-start gap-4 text-xl">
                <a
                  className="hover:text-sky-300 transition-colors duration-200"
                  href="https://github.com/Sahil123khan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="hover:text-sky-300 transition-colors duration-200"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  className="hover:text-sky-300 transition-colors duration-200"
                  href="https://x.com/?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className="hover:text-sky-300 transition-colors duration-200"
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
