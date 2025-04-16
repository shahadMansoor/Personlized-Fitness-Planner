import React, { useState } from 'react';
import TrainerLayout from '../components/TrainerLayout';
import { FiUpload } from 'react-icons/fi';

const UploadExerciseVideo = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleUpload = () => {
    alert(`Video Uploaded!\nTitle: ${title}\nDetails: ${details}`);
  };

  return (
    <TrainerLayout pageTitle="Manage Client">
      <h2 className="text-xl font-semibold text-center mb-10">Upload new video</h2>

      <div className="bg-[#B7E4C7] p-6 rounded-xl w-full max-w-lg mx-auto space-y-4">
        <div>
          <label className="block font-bold mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter video title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded shadow text-sm"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Details</label>
          <textarea
            placeholder="Enter workout details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-4 py-2 rounded shadow text-sm"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleUpload}
          className="bg-[#95D5B2] hover:bg-[#74c69d] px-6 py-2 rounded shadow font-medium flex items-center gap-2 text-black"
        >
          <FiUpload className="text-lg" />
          Upload
        </button>
      </div>
    </TrainerLayout>
  );
};

export default UploadExerciseVideo;