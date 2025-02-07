'use client'
import { useState } from "react";
import CaretIcon from "../svg/CaretIcon";
import { FacetProps } from "../product/FilterBar";
import CheckIcon from "../svg/CheckIcon";

const Facet = ({ title, options, selectedValues, onFilterChange }: FacetProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleReset = () => {
        selectedValues.forEach(value => onFilterChange(value));
      };
    
    return (
        <div className="relative">
        <button 
          className="flex justify-between items-center cursor-pointer py-2 gap-2 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium  hover:underline">{title}</span>
          <CaretIcon />
        </button>
  
        {isOpen && (
          <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg overflow-y-scroll max-h-[400px] m-2 py-2 border z-50">
            <div className="flex justify-between">
            <button 
              className="text-gray-800 text-xs hover:font-bold underline my-1 px-2"
              onClick={handleReset}
            >
              حذف فیلترها
            </button>
            {selectedValues.length > 0 ? (
                <span className="text-xs text-gray-700 px-2 py-0.5 ">
                  {selectedValues.length} انتخاب شده
                </span>
              ):<span className="text-xs text-gray-700 px-2 py-0.5">0 انتخاب شده</span>}
              </div>
            <hr></hr>
            {options.map((option) => (
              <label 
                key={option.id}
                className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 rounded-md"
              >
                <input
                  type="checkbox"
                  value={option.slug}
                  checked={selectedValues.includes(option.slug)}
                  onChange={() => onFilterChange(option.slug)}
                  className="hidden"
                />
                <div className={`w-4 h-4 border flex items-center justify-center 
                  ${selectedValues.includes(option.slug) ? 'border-gray-500' : 'border-gray-300'}`}>
                  {selectedValues.includes(option.slug) && <CheckIcon />}
                </div>
                <span className="text-sm">{option.titleFa}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default Facet