import React, { Component } from "react";

export class TechnologyCard extends Component {
  render() {
    const { technology, isAdded, onAdd } = this.props;

    return (
      <article className="flex min-h-[240px] flex-col rounded-[13px] border border-[#e8edf3] bg-white p-[17px] shadow-[0_4px_15px_rgba(16,24,40,.045)] transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_9px_22px_rgba(16,24,40,.08)] hover:border-blue-400 hover:shadow-[0_0_18px_rgba(59,130,246,0.45)] transition-all duration-300">
        <div className="flex min-h-[38px] items-start justify-between">
          <img className="h-[25px] w-[25px] object-contain" src={technology.icon} alt={`${technology.name} logo`} />
          <span className="rounded-full border border-[#d5f2fc] bg-[#eefaff] px-2 py-[3px] text-[8px] font-semibold text-[#0b9ed4]">
            {technology.badge}
          </span>
        </div>

        <h3 className="mt-[9px] text-[14px] font-semibold tracking-[-.25px]">{technology.name}</h3>
        <p className="mt-1.5 min-h-[47px] text-[9.5px] leading-[1.55] text-[#8390a2]">{technology.description}</p>

        <div className="mt-auto grid grid-cols-[auto_1fr_auto] items-center gap-1.5 border-t border-[#eef1f5] pt-[10px] pb-[9px] text-[8px] text-[#8794a7]">
          <span className="w-fit rounded-[3px] bg-[#f1f4f7] px-1.5 py-[3px]">{technology.category}</span>
          <span>{technology.difficulty}</span>
          <span className="text-[#68778b]">★ {technology.rating}</span>
        </div>

        <button
          className={`h-[34px] w-full rounded-[6px] text-[9px] font-semibold transition-colors ${isAdded ? "cursor-default bg-[#eef1f5] text-[#667085]" : "bg-[#080d1b] text-white hover:bg-[#151d2e]"}`}
          type="button"
          disabled={isAdded}
          onClick={() => onAdd(technology)}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </article>
    );
  }
}

export default TechnologyCard;
