import React, { Component } from "react";
import logoText from "../assets/logo-text.png";

export class Navbar extends Component {
  state = { menuOpen: false };

  closeMenu = () => this.setState({ menuOpen: false });

  toggleMenu = () =>
    this.setState((previous) => ({ menuOpen: !previous.menuOpen }));

  render() {
    const { menuOpen } = this.state;

    return (
      <header className="sticky top-0 z-50 h-[70px] border-b border-[#edf0f4] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-full w-[min(1090px,calc(100%-48px))] items-center justify-between gap-[25px] max-[760px]:w-[calc(100%-28px)]">
          <a
            className="inline-flex shrink-0 items-center whitespace-nowrap"
            href="#home"
            onClick={this.closeMenu}
            aria-label="Dev Stack home"
          >
            <img className="block h-auto w-[91px] object-contain" src={logoText} alt="Dev Stack" />
          </a>

          <nav
            className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-7 max-[760px]:absolute max-[760px]:top-[63px] max-[760px]:left-[14px] max-[760px]:right-[14px] max-[760px]:m-0 max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:rounded-[10px] max-[760px]:border max-[760px]:border-[#e7ebf0] max-[760px]:bg-white max-[760px]:p-2 max-[760px]:shadow-[0_15px_30px_rgba(16,24,40,.12)] ${menuOpen ? "max-[760px]:flex" : "max-[760px]:hidden"}`}
          >
            <a className="text-[11px] font-medium text-[#2563eb] transition-colors hover:text-[#1d4ed8] max-[760px]:px-3 max-[760px]:py-[11px]" href="#home" onClick={this.closeMenu}>Home</a>
            <a className="text-[11px] font-medium text-[#667085] transition-colors hover:text-[#2563eb] max-[760px]:px-3 max-[760px]:py-[11px]" href="#technologies" onClick={this.closeMenu}>Technologies</a>
            <a className="text-[11px] font-medium text-[#667085] transition-colors hover:text-[#2563eb] max-[760px]:px-3 max-[760px]:py-[11px]" href="#projects" onClick={this.closeMenu}>Projects</a>
            <a className="text-[11px] font-medium text-[#667085] transition-colors hover:text-[#2563eb] max-[760px]:px-3 max-[760px]:py-[11px]" href="#about" onClick={this.closeMenu}>About</a>
            <a className="text-[11px] font-medium text-[#667085] transition-colors hover:text-[#2563eb] max-[760px]:px-3 max-[760px]:py-[11px]" href="#contact" onClick={this.closeMenu}>Contact</a>
          </nav>

          <div className="ml-[50px] flex items-center gap-3.5 max-[980px]:ml-5 max-[760px]:ml-auto max-[760px]:gap-2">
            <button className="border-0 bg-transparent text-[11px] text-[#475467] max-[760px]:hidden" type="button">Sign In</button>
            <button className="h-9 rounded-full bg-linear-to-r from-[#2563eb] via-[#6366f1] to-[#a855f7] px-[17px] text-[11px] font-semibold text-white max-[760px]:h-[34px] max-[760px]:px-[13px]" type="button">Sign Up</button>
            <button
              className="hidden h-9 w-9 flex-col items-center justify-center gap-[5px] border-0 bg-transparent max-[760px]:flex"
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={this.toggleMenu}
            >
              <span className="h-0.5 w-5 rounded-sm bg-[#111827]" />
              <span className="h-0.5 w-5 rounded-sm bg-[#111827]" />
              <span className="h-0.5 w-5 rounded-sm bg-[#111827]" />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
