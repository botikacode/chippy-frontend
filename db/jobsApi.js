import {config} from 'configdb'
const API = config.host + '/jobs'

export const getJobs = async () => {
  const res = await fetch(API)
  return await res.json();
};

export const saveJob = async (newJob) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return await res.json();
};