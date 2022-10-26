export {host} from '../config'
const API = host + '/pets'

export const getPets = async () => {
  const res = await fetch(API)
  return await res.json();
};

export const getPet = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const savePet = async (object) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  return await res.json();
};

export const deletePet = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const updatePet = async (id, object) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  return res;
};