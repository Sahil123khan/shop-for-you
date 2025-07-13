import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="">
      <footer className="bg-gray-900 text-white py-8 px-4 ">
        <div className="flex justify-evenly">
          <div>
            <h3 className="font-bold text-lg mb-2">ShopKart</h3>
            <p>© 2025 ShopKart. All rights reserved.</p>
            <p>Created by Sahil Khan</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul>
              <li >
                <a className="  hover:text-sky-300" href="/">Home</a>
              </li>
              <li>
                <a className="  hover:text-sky-300" href="/about">About</a>
              </li>
              <li>
                <a className="  hover:text-sky-300" href="/blogs">Blogs</a>
              </li>
              <li>
                <a className="  hover:text-sky-300" href="/detaile">Detaile</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <p>Email: support@shopkart.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
          <div>
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-4 text-xl">
              <a
              className=" hover:text-sky-300"
                href="https://github.com/Sahil123khan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
              className=" hover:text-sky-300"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaFacebook />
              </a>
              <a
              className=" hover:text-sky-300"
                href="https://x.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaTwitter />
              </a>
              <a
              className=" hover:text-sky-300"
                href="https://www.instagram.com/accounts/login/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
