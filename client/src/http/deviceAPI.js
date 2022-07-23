import {$authHost, $host} from "./index";

export const createDevices = async (device) => {
  const {data} = await $authHost.post('api/device', device)
  return data
}
export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
  const {data} = await $host.get('api/device', {
    params: {
      typeId, brandId, page, limit
    }
  })
  return data
}
export const fetchOneDevices = async (id) => {
  const {data} = await $host.get('api/device/' + id)
  return data
}
