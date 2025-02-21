import CaretIcon from "../svg/CaretIcon";

const SortSelect = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
    <div className="relative text-right">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-28 pl-4 py-2 pr-8 bg-transparent 
         rounded-md appearance-none focus:outline-none focus:ring-0
         selection:bg-gray-100 hover:bg-gray-100 dark:hover:bg-[#16181E] dark:selection:bg-[#16181E] text-sm" 
      >
        <option className="" value="manual">فروش ویژه</option>
        <option value="best-selling">پرفروشترین ها</option>
        <option value="price-ascending">قیمت: کم به زیاد</option>
        <option value="price-descending">قیمت: زیاد به کم</option>
        <option value="created-descending">جدیدترین</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <CaretIcon />
      </div>
    </div>
  );
export default SortSelect