//const API = "http://localhost:3000/jobs";
const API = "http://192.168.0.104:3000/jobs";

export const getJobs = async () => {
  const res = await fetch(API)
  return await res.json();
};