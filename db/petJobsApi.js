export {host} from '../config'
const API = 'http://localhost:3000' + '/petJobs'

export const getPetJobs = async () => {
  const res = await fetch(API)
  return await res.json();
};

export const getPetJobByJobId = async (id) => {
  const res = await fetch(`${API}/job-pets/${id}`)
  return await res.json();
};

export const savePetJob = async (object) => {
  const res = await fetch(`${API}/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  return await res.json();
};

export const deletePetJob = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const updatePetJob = async (id, object) => {
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
