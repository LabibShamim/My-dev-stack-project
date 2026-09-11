import React, { Component } from "react";
import bannerStack from "../assets/banner-stack.png";

export class Hero extends Component {
  render() {
    return (
      <section className="bg-white" id="home">
        <div className="mx-auto flex min-h-[570px] w-[min(1090px,calc(100%-48px))] items-center justify-between gap-[60px] py-[70px] pb-20 max-[980px]:gap-[25px] max-[760px]:w-[calc(100%-28px)] max-[760px]:min-h-0 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-5 max-[760px]:py-12 max-[760px]:pb-[50px]">
          <div className="max-w-[640px] max-[760px]:w-full max-[760px]:max-w-none">
            <h1 className="text-[clamp(46px,5vw,64px)] font-extrabold leading-[1.02] tracking-[-3px] max-[760px]:text-[clamp(39px,11vw,53px)] max-[760px]:tracking-[-2px] max-[460px]:text-[39px]">
              Build Your Ideal{" "}
              <span className="block bg-linear-to-r from-[#2563eb] via-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-[25px] max-w-[620px] text-[14px] leading-[1.65] text-[#68778b] max-[760px]:mt-[18px] max-[760px]:text-[12px] max-[460px]:text-[11.5px]">
              Explore frontend, backend, database, and tooling options,<br className="max-[760px]:hidden" />
              compare them side by side, and put together the stack that fits your<br className="max-[760px]:hidden" />
              next project.
            </p>

            <div className="mt-8 flex gap-2.5 max-[760px]:mt-6 max-[760px]:flex-wrap">
              <a className="inline-flex min-h-10 items-center justify-center rounded-[7px] bg-linear-to-r from-[#2563eb] via-[#6366f1] to-[#a855f7] px-4 text-[11px] font-semibold text-white" href="#technologies">
                Explore Technologies
              </a>
              <a className="inline-flex min-h-10 min-w-28 items-center justify-center rounded-[7px] border border-[#e1e6ed] bg-white px-4 text-[11px] font-semibold text-[#667085]" href="#technologies">
                Learn More
              </a>
            </div>
          </div>

          <div className="flex w-[390px] shrink basis-[390px] justify-center max-[980px]:w-[340px] max-[980px]:basis-[340px] max-[760px]:w-full max-[760px]:basis-auto">
            <img
              className="block h-[330px] w-full object-contain max-[980px]:h-[300px] max-[760px]:h-[260px] max-[760px]:w-full max-[760px]:max-w-[330px] max-[460px]:h-[235px]"
              src={bannerStack}
              alt="Development stack illustration"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
