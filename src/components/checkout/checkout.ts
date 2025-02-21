"use server";

import { auth } from "@/lib/session";
import { OrderRequest } from "@/types/type";
import Swal from "sweetalert2";

export async function createOrder(formData:OrderRequest){
    const { accessToken } = await auth().catch(() => ({ accessToken: "" }));
    console.log(accessToken)
    try {
        const response = await fetch('http://localhost:8000/orders', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
    ...(accessToken && { Authorization: `Bearer ${accessToken}` })
          },
          body: JSON.stringify(formData),
        });
        return [true,response.status]
        
      } catch (error) {
        return [false,error]
       
      }
    }