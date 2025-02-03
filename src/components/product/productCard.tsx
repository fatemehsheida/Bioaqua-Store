import { Product } from "@/types/type";
import AddToCart from "../cart/AddToCart";
import Link from "next/link";


interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (

    <div className="w-full">
      <div className="lg:px-40 2xl:px-80 ">

        <Link href={`/productsپ/${product.code}`}>
          <div className="w-48 h-[305px] flex flex-col justify-between cursor-pointer group">
            <div className="relative group-hover:rounded-3xl w-48 h-48">
              <img src={product.images.list[0]} className=" rounded-xl group-hover:hidden object-cover w-48 h-48" />
              <img src={product.images.list[1]} className=" rounded-xl hidden group-hover:block object-cover w-48 h-48" />
              <AddToCart product={product} quantity={1} style={"w-full bg-white ring-1 ring-[#2E2A39] hover:ring-2 px-4 py-3 rounded-lg text-[#2E2A39] text-sm font-normal"} />
            </div>

            <div>
              <span className="flex flex-row items-center flex-1 group-hover:underline
                     justify-start gap-3 py-2 text-base font-medium">
                {product.titleFa}
              </span>
              <div className="gap-2 flex flex-row justify-start items-center px-4 text-sm font-normal" dir="ltr">
                <span>
                  $ 3.656
                </span>

              </div>
            </div>

          </div>

        </Link>
      </div>
    </div >

  );
};

export default ProductCard;
