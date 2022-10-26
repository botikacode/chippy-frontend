import {config} from 'configdb'
const API = config.host + '/customers'

export const getCustomers = async () => {
  const res = await fetch(API)
  return await res.json();
};

export const saveCustomer = async (newCustomer) => {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    });
    return await res.json();
  };

  export const getCustomer = async (CustomerId) => {
    const res = await fetch(`${API}/${CustomerId}`);
    return await res.json();
  };