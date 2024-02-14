import React from "react";
import { LOGO_FOOTER } from "./constant/constants";

const Footer = () => {
  return (
    <div className="py-5 flex flex-col justify-center">
      <div className="mx-auto">
        <img src={LOGO_FOOTER} alt="footer-icn" />
      </div>
      <div className="flex text-cyan-700 gap-4">
        <div>Terms and Privacy Notice</div>
        <div>Send us Feedback</div>
        <div>Help</div>
      </div>
      <div className="text-zinc-500 mx-auto my-2">
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
};

export default Footer;
