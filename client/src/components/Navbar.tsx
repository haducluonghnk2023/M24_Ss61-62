import React, { useState, useRef } from "react";
import axios from "axios";
import "./navbar.css";

interface Job {
  id?: number;
  name: string;
}

export default function Navbar() {
  const [jobName, setJobName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const jobInputRef = useRef<HTMLInputElement>(null);

  const handleAddJob = async () => {
    if (!jobName.trim()) {
      setError("Tên công việc không được phép để trống");
      jobInputRef.current?.focus();
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/listJobs", {
        name: jobName,
      });

      setJobs(response.data);
      setJobName("");
      setError(null);
      jobInputRef.current?.focus();
    } catch (error) {
      console.error("Error adding job:", error);
      setError("Đã xảy ra lỗi khi thêm công việc");
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setJobName(inputValue);
    if (inputValue.trim() === "") {
      setError("Tên công việc không được phép để trống");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <div className="flex flex-col w-[80%]  justify-center rounded-lg items-center h-[100px]">
        <input
          className="w-[90%] border-2 border-green-600 rounded-md mb-[20px] h-[40%]"
          type="text"
          id="jobInput"
          placeholder="Nhập tên công việc"
          value={jobName}
          onChange={handleInputChange}
          ref={jobInputRef}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="border-2 w-[90%] rounded-lg bg-blue-600"
          onClick={handleAddJob}
        >
          Thêm công việc
        </button>
      </div>
    </div>
  );
}
