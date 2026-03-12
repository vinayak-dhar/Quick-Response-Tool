import axios from "axios";

export const uploadFile = async (file, email) => {

  const formData = new FormData();

  formData.append("file", file);
  formData.append("email", email);

  return axios.post("https://quick-response-tool.onrender.com/api/analyze", formData);

};