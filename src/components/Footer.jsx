import React, { Component } from "react";
import logoText from "../assets/logo-text.png";

export class Footer extends Component {
  render() {
    return (
      <footer className="border-t border-[#edf0f4] bg-white pt-[53px] max-[760px]:pt-10">
        <div className="mx-auto w-[min(1090px,calc(100%-48px))] max-[760px]:w-[calc(100%-28px)]">
          <div className="grid grid-cols-[2.3fr_1fr_1fr_1fr] gap-12 pb-[42px] max-[760px]:grid-cols-2 max-[760px]:gap-x-5 max-[760px]:gap-y-[30px] max-[760px]:pb-[35px] max-[460px]:grid-cols-1">
            <div className="max-[760px]:col-span-full max-[460px]:col-auto">
              <a className="inline-flex items-center" href="#home">
                <img className="block h-auto w-[91px] object-contain" src={logoText} alt="Dev Stack" />
              </a>
              <p className="mt-[13px] max-w-[300px] text-[9.5px] leading-[1.65] text-[#8996a8] max-[760px]:max-w-full">
                Curated tools, technologies, and resources for developers building modern software.
              </p>
              <div className="mt-[17px] flex gap-[15px]">
                <a className="text-[9px] font-semibold text-[#4f5d70]" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
                <a className="text-[9px] font-semibold text-[#4f5d70]" href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
                <a className="text-[9px] font-semibold text-[#4f5d70]" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="mb-1 text-[9px] font-semibold tracking-[.5px] text-[#263143]">PRODUCT</h4>
              <a className="text-[9px] text-[#8a96a7]" href="#home">Home</a>
              <a className="text-[9px] text-[#8a96a7]" href="#technologies">Technologies</a>
              <a className="text-[9px] text-[#8a96a7]" href="#projects">Projects</a>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="mb-1 text-[9px] font-semibold tracking-[.5px] text-[#263143]">COMPANY</h4>
              <a className="text-[9px] text-[#8a96a7]" href="#about">About</a>
              <a className="text-[9px] text-[#8a96a7]" href="#contact">Contact</a>
              <a className="text-[9px] text-[#8a96a7]" href="#careers">Careers</a>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="mb-1 text-[9px] font-semibold tracking-[.5px] text-[#263143]">LEGAL</h4>
              <a className="text-[9px] text-[#8a96a7]" href="#privacy">Privacy Policy</a>
              <a className="text-[9px] text-[#8a96a7]" href="#terms">Terms of Service</a>
            </div>
          </div>

          <div className="flex min-h-[58px] items-center justify-between border-t border-[#edf0f4] text-[9px] text-[#a0aabb] max-[460px]:min-h-0 max-[460px]:flex-col max-[460px]:items-start max-[460px]:gap-[9px] max-[460px]:py-[15px]">
            <span>© 2026 Dev Stack. All rights reserved.</span>
            <div className="flex gap-[19px]">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
