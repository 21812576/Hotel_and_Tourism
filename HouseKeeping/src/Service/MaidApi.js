import axios from "axios";
const baseUrl = "http://localhost:5000/api/";

export const CreateMaid = async (maidData) => {
  try {
    const response = await axios.post(`${baseUrl}maid/create`, maidData);
    console.log("Maid created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating maid:", error);
    throw error;
  }
};

export const UpdateMaid = async (maidData, MaidId) => {
  try {
    const response = await axios.put(
      `${baseUrl}maid/update/${MaidId}`,
      maidData
    );
    console.log("Maid updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating maid:", error);
    throw error;
  }
};

export const FetchMaid = async () => {
  try {
    const response = await axios.get(`${baseUrl}maid/`);
    console.log("All Maids Fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching maid:", error);
    throw error;
  }
};

export const FetchOneMaid = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}maid/${id}`);
    console.log("Maid Fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching maid:", error);
    throw error;
  }
};

export const RemoveMaid = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}maid/delete/${id}`);
    console.log("Maid Removed:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error removing maid:", error);
    throw error;
  }
};
