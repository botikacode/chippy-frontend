export {host} from '../config'
const API = 'http://localhost:3000' + '/jobs'


export const getJobs = async () => {
  const res = await fetch(API)
  return await res.json();
};

export const getJob = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const saveJob = async (object) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  return res
  return await res.json();
};

export const deleteJob = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const updateJob = async (id, object) => {
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

export const getJobsUser = async (id) => {
  const res = await fetch(`${API + '-User'}/${id}/`);
  return await res.json();
}

export const getJobsNotUser = async (id) => {
  const res = await fetch(`${API + '-Not-User'}/${id}/`);
  return await res.json();
}

export const getJobsCount = async () => {
  const res = await fetch(`${API}/Count`);
  return await res.json();
}

//Dada la id de un Job devuelve las Pets asiganadas a dicho Job
export const getPetsJob = async (id) => {
  const res = await fetch(`${API + '-Pets'}/${id}/`);
  return await res.json();
}

//Asigna la id de un Job a la id de un pet
export const setPetJob = async (jobID, petID) => {
  const object = () => {
    const jobId = jobID
    const petId = petID
  }
  const res = await fetch(API + '-Pets', {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  return await res.json();
};
