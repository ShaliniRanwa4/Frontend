import React from "react";

const SectionList = ({ sections, onSectionClick }) => {
  return (
    <>
      {sections.map((section) => (
        <div
          key={section.key}
          className="border-y border-blue-300 my-3 flex justify-between py-7 cursor-pointer"
          onClick={() => onSectionClick(section.key)}
        >
          <h3 className="font-bold text-lg text-blue-600">{section.label}</h3>
          <h3 className="text-xl">✙</h3>
        </div>
      ))}
    </>
  );
};

export default SectionList;
