import React, { Component } from "react";

export class Loading extends Component {
  render() {
    return (
      <div className="grid min-h-[240px] place-items-center text-[#8794a7]">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 animate-spin rounded-full border-[3px] border-[#edf0f4] border-t-[#d91b82]" />
          <p className="text-sm">Loading technology...</p>
        </div>
      </div>
    );
  }
}

export default Loading;
