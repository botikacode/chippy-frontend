export {host} from '../config'
const API = 'http://localhost:3000' + '/messages'


export const getMessages = async () => {
  const res = await fetch(API)
  return await res.json();
};

export const getMessage = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const saveMessage = async (object) => {
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

export const deleteMessage = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

