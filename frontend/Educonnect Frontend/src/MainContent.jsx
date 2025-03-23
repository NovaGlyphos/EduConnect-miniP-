import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const MainContent = ({ posts, setPosts }) => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      const fileURL = URL.createObjectURL(uploadedFile);
      setFile(fileURL);

      // Determine file type
      if (uploadedFile.type.startsWith("image")) {
        setFileType("image");
      } else if (uploadedFile.type.startsWith("video")) {
        setFileType("video");
      } else if (uploadedFile.type.startsWith("audio")) {
        setFileType("audio");
      } else {
        setFileType("document");
      }
    }
  };

  const removeFile = () => {
    setFile(null);
    setFileType(null);
  };

  const handlePostSubmit = () => {
    if (text.trim() || file) {
      setPosts([{ text, file, fileType, id: Date.now(), timestamp: new Date() }, ...posts]);
      setText("");
      setFile(null);
      setFileType(null);
    }
  };

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to 🚀EduConnect</h1>

      <fieldset className="p-4 border rounded-lg shadow-md bg-base-200">
        <div className="flex items-center gap-3 mb-3">
          <FaUserCircle className="text-4xl text-gray-500" />
          <span className="text-lg font-semibold">Ayush Guleria</span>
        </div>

        <textarea
          className="textarea textarea-bordered w-full h-24"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* File Upload */}
        <div className="flex items-center gap-2 mt-3">
          <label className="btn btn-outline btn-sm cursor-pointer">
            Attach 😎
            <input
              type="file"
              accept="image/*, video/*, audio/*, .pdf, .docx, .txt"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>

          {file && (
            <button className="btn btn-error btn-sm" onClick={removeFile}>
              Remove File
            </button>
          )}
        </div>

        {/* File Preview */}
        {file && (
          <div className="mt-3 flex justify-center">
            {fileType === "image" && (
              <img src={file} alt="Preview" className="rounded-lg shadow-lg w-64 h-40 object-cover" />
            )}
            {fileType === "video" && (
              <video controls className="rounded-lg shadow-lg w-64">
                <source src={file} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            )}
            {fileType === "audio" && (
              <audio controls className="w-full">
                <source src={file} type="audio/mpeg" />
                Your browser does not support audio playback.
              </audio>
            )}
            {fileType === "document" && (
              <a href={file} download className="btn btn-outline mt-2">
                Download File
              </a>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button className="btn btn-primary w-full mt-3" onClick={handlePostSubmit}>
          Post
        </button>
      </fieldset>
    </div>
  );
};

export default MainContent;
