import { Product } from "@/types/type";
import AddToCart from "../cart/AddToCart";
import Link from "next/link";


interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (

    <div className="px-8 py-10">
      <div className="justify-between">

        <Link href={`/products/${product.code}`}>
          <div className="w-44 h-[260px]  flex flex-col justify-start cursor-pointer group ">
            <div className=" group-hover:rounded-3x">
              <img src={product.images.list[0]} className=" rounded-xl group-hover:hidden object-cover w-44 h-44" />
              <img src={product.images.list[1]} className=" rounded-xl hidden group-hover:block object-cover w-44 h-44" />
              
            </div>

            <div className="text-[#2E2A39] pb-4 pt-2">
              <span className="flex flex-row items-start flex-1 group-hover:underline
                     justify-start gap-3 text-sm font-noraml w-full ">
                {product.titleFa}
              </span>
              <div className="gap-2 flex flex-row justify-start items-center px-4 text-sm font-normal" dir="ltr">
                <span>
                  $ 3.656
                </span>

              </div>
            </div>

          </div>
          <AddToCart product={product} quantity={1} style={" w-full bg-white ring-1 ring-[#2E2A39] hover:ring-2 px-4 py-3 rounded-lg text-[#2E2A39] text-sm font-normal"} />   


        </Link>
      </div>
    </div >

  );
};

export default ProductCard;
