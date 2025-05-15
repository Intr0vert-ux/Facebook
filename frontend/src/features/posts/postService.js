import axios from "axios";
const base_url = "http://localhost:5173/api/posts";

export const addPost = async (postData) => {
  const response = await axios.post(
    `${base_url}/addPost/${postData?.user_id}`,
    postData
  );
  return response.data;
};
