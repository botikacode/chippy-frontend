const API = "http://localhost:3000/jobs";

export const getJobs = async () => {
  const res = await fetch(API)
  return await res.json();
};