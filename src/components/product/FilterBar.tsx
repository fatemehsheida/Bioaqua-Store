'use client'
import { Brand, BrandsResponse, CategoriesResponse, Category } from '@/types/type';
import apiClient from '@/utils/apiClient';
import { useEffect, useState } from 'react';
import Facet from '../filter/Facet';
import SortSelect from '../filter/SortSelect';
import { RxCross1 } from "react-icons/rx";

export interface FilterOption {
  titleFa: string;
  slug: string;
  id: string;
}

export interface FacetProps {
  title: string;
  options: FilterOption[];
  selectedValues: string[];
  onFilterChange: (value: string) => void;
}

const FilterBar = () => {
  const [availabilityOptions, setAvailabilityOptions] = useState<Category[]>([]);
  const [productTypeOptions, setProductTypeOptions] = useState<Brand[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState('created-descending');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fetchData = async () => {
    try {
      const [responseCtgr, responseBrnd] = await Promise.all([
        apiClient.get('/categories'),
        apiClient.get('/brands')
      ]);

      const categoryResponse: CategoriesResponse = responseCtgr.data;
      const brandResponse: BrandsResponse = responseBrnd.data;

      setAvailabilityOptions(categoryResponse.results);
      setProductTypeOptions(brandResponse.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (facetType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [facetType]: prev[facetType]?.includes(value)
        ? prev[facetType].filter(v => v !== value)
        : [...(prev[facetType] || []), value]
    }));
  };

  console.log(selectedFilters)

  return (
    <div className="w-full lg:px-28 2xl:px-40 px-10 py-4">
      {/* Desktop Filters */}
      <div className="hidden md:block">
        <div className="space-y-4 flex justify-between  ">
          <div className='flex gap-8 items-center'>

            <h2 className="text-lg font-semibold">فیلتر:</h2>
            <Facet
              title="دسته بندی ها"
              options={availabilityOptions}
              selectedValues={selectedFilters.availability || []}
              onFilterChange={value => handleFilterChange('availability', value)}
            />

            <Facet
              title="برند ها"
              options={productTypeOptions}
              selectedValues={selectedFilters.productType || []}
              onFilterChange={value => handleFilterChange('productType', value)}
            />

          </div>
          <div className="mt-4 flex gap-8 items-center">
            <h3 className="text-lg font-semibold">مرتب سازی:</h3>
            <SortSelect value={sortBy} onChange={setSortBy} />
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden  mt-5 mr-4">
        <button
          className="flex items-center space-x-2 p-2 border rounded-lg"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4.833 6.5a1.667 1.667 0 113.334 0 1.667 1.667 0 01-3.334 0zM4.05 7H2.5a.5.5 0 010-1h1.55a2.5 2.5 0 014.9 0h8.55a.5.5 0 010 1H8.95a2.5 2.5 0 01-4.9 0zm11.117 6.5a1.667 1.667 0 10-3.334 0 1.667 1.667 0 003.334 0zM13.5 11a2.5 2.5 0 012.45 2h1.55a.5.5 0 010 1h-1.55a2.5 2.5 0 01-4.9 0H2.5a.5.5 0 010-1h8.55a2.5 2.5 0 012.45-2z" />
          </svg>
          <span>فیلتر و مرتب سازی</span>
        </button>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 pt-4">
            <div className="absolute right-0 top-0 h-full w-80 bg-white p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">فیلتر و مرتب سازی</h2>
                <button
                  className="p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <RxCross1 />
                </button>
              </div>
              <div className='py-6'>
                <Facet
                  title="موجودی"
                  options={availabilityOptions}
                  selectedValues={selectedFilters.availability || []}
                  onFilterChange={value => handleFilterChange('availability', value)}
                />

                <Facet
                  title="دسته بندی ها"
                  options={productTypeOptions}
                  selectedValues={selectedFilters.productType || []}
                  onFilterChange={value => handleFilterChange('productType', value)}
                />

                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">مرتب سازی</h3>
                  <SortSelect value={sortBy} onChange={setSortBy} />
                </div>

                <button
                  className="w-full mt-4 bg-[#94d2bd] text-white py-2 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  اعمال فیلترها
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar