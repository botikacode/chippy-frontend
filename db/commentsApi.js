export {host} from '../config'
const API = 'http://localhost:3000' + '/comments'

export const getComments = async () => {
  const res = await fetch(API)
  return await res.json();
};

export const getComment = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const saveComment = async (object) => {
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

export const deleteComment = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const updateComment = async (id, object) => {
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
