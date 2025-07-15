'use client'
import { useState } from "react";
import CaretIcon from "../svg/CaretIcon";
import { FacetProps } from "../product/FilterBar";
import CheckIcon from "../svg/CheckIcon";

const Facet = ({ title, options, selectedValues, onFilterChange }: FacetProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleReset = () => {
       onFilterChange('');
      };
    
    return (
        <div className="relative z-20 ">
        <button 
          className="flex justify-between items-center cursor-pointer py-2 gap-2 w-full z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-normal text-xs hover:underline">{title}</span>
          <CaretIcon />
        </button>
  
        {isOpen && (
          <div className="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-Abyss shadow-lg overflow-y-scroll max-h-[400px] m-2 py-2 z-50">
            <div className="flex justify-between">
            <button 
              className="text-gray-800 dark:text-white text-xs hover:font-bold underline my-1 px-2"
              onClick={handleReset}
            >
              حذف فیلترها
            </button>
            {selectedValues.length > 0 ? (
                <span className="text-xs text-gray-700 dark:text-white px-2 py-0.5 ">
                  {selectedValues.length} انتخاب شده
                </span>
              ):<span className="text-xs text-gray-700 px-2 py-0.5 dark:text-white">0 انتخاب شده</span>}
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
                <div className={`w-4 h-4 flex items-center justify-center 
                  ${selectedValues.includes(option.slug) ? '' : ''}`}>
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