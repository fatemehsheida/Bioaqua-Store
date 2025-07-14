 import { Product } from "@/types/type";
import AddToCart from "../cart/AddToCart";
import Link from "next/link";


interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
return(
    <div className="px-8 pb-12 pt-2">
      <div className="justify-between">
        <div className=" group ">
          <Link href={`/products/${product.code}`}>
            <div className="w-44 h-[260px]  flex flex-col justify-start cursor-pointer">
              <div className=" group-hover:rounded-3x">
                <img src={product.images.list[0]} className=" rounded-xl group-hover:hidden object-cover w-44 h-44" />
                <img src={product.images.list[1]} className=" rounded-xl hidden group-hover:block object-cover w-44 h-44" />
              </div>

              <div className="text-DarkPurple dark:text-slate-300 pb-4 pt-2">
                <span className="flex flex-row items-start flex-1 group-hover:underline
                     justify-start gap-3 text-sm font-noraml w-full ">
                  {product.titleFa}
                </span>
                <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-normal">
                  <span>
                     {product.bestSeller.lastPrice}.000 تومان
                  </span>

                </div>
              </div>

            </div>
          </Link>
          <AddToCart product={product} quantity={1} style={" w-full bg-white dark:bg-[#16181E]/85 ring-1 ring-DarkPurple dark:ring-slate-400/80 hover:ring-2 px-4 py-3 rounded-lg dark:text-[#F9FAFB] dark:text-slate-200 text-sm font-normal"} />
        </div>
      </div>
    </div >
  );
};

export default ProductCard;

