import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createBrand = async (brand) => {
  const {data} = await $authHost.post('api/brand', brand)
  return data
}
export const fetchBrand = async () => {
  const {data} = await $host.get('api/brand')
  return data
}
