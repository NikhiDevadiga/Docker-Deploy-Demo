import { API_URL } from "../utils/constants";
import axios from "axios";

export const createEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/createEvent`, eventData);
  return response.data;
};

export const getEvent = async () => {
  const response = await axios.get(`${API_URL}/getEvent`);
  return response.data;
};

export const updateEvent = async (id, eventData) => {
  const response = await axios.put(`${API_URL}/updateEvent/${id}`, eventData);
  return response.data;
};

export const deleteEvent = async (id) => {
  const response = await axios.delete(`${API_URL}/deleteEvent/${id}`);
  return response.data;
};
