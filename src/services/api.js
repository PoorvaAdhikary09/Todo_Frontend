import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // FastAPI backend

export const getTasks = async () => {
  const res = await axios.get(`${BASE_URL}/tasks`);
  return res.data;
};

export const addTask = async (task) => {
  await axios.post(`${BASE_URL}/tasks`, task);
};

export const deleteTask = async (slno) => {
  await axios.delete(`${BASE_URL}/tasks/${slno}`);
};

// Add update logic as needed
export const updateTask = async (slno, task) => {
  await axios.put(`${BASE_URL}/tasks/${slno}`, task);
};
