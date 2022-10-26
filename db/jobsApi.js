import {config} from 'configdb'
const API = config.host + '/jobs'

export const getJobs = async () => {
  const res = await fetch(API)
  return await res.json();
};