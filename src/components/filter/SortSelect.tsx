import CaretIcon from "../svg/CaretIcon";

const SortSelect = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full py-2 pl-3 pr-8 border bg-transparent
         rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-gray-500
         selection:bg-gray-100 hover:bg-gray-100"
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