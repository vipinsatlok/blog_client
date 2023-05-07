import React from "react";
import Paragraph from "../Paragraph";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-between">
        <Paragraph>Copyright © 2023 Techfans. All rights reserved.</Paragraph>
        <div className="flex gap-3 cursor-pointer">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}
