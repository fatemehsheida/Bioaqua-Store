"use server";
import axios from 'axios';
import { auth } from "@/lib/session";
import { OrderRequest } from '@/types/type';

const apiClient = axios.create({
	baseURL: 'http://localhost:8000/', headers: {
		'Content-Type': 'application/json',
	},
});
export default apiClient;


apiClient.interceptors.request.use(async (config) => {
  const { accessToken } = await auth().catch(() => ({ accessToken: "" }));
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

async function axiosHandler(method: 'get' | 'post' | 'put' | 'delete', url: string, data?: any) {
  try {
    const response = await apiClient[method](url, data);
    return [true, response.data];
  } catch (error: any) {
    return [false, error.response?.data || error.message];
  }
}

export async function getOrders() {
  return axiosHandler('get', '/orders');
}
export async function createOrder(formData:OrderRequest){
	return axiosHandler('post','/orders', JSON.stringify(formData))
}
export async function getUserData(){
	return axiosHandler('get','/auth/user')
}
