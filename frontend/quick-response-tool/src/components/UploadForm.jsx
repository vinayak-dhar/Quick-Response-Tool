import { useState } from "react";
import { uploadFile } from "../api";

function UploadForm() {

  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus("Processing...");

    try {

      await uploadFile(file, email);

      setStatus("Success! Email sent.");

    } catch {

      setStatus("Error occurred");

    }

  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">
        Upload
      </button>

      <p>{status}</p>

    </form>

  );
}

export default UploadForm;