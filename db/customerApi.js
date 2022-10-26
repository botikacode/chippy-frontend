import {config} from 'configdb'
const API = config.host + '/customers'

export const getCustomers = async () => {
  const res = await fetch(API)
  return await res.json();
};