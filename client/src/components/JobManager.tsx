import { useState, useEffect } from "react";
import axios from "axios";
import Job from "./Job";
import Loading from "./Loading";

interface Job {
  id: number;
  name: string;
}

type DeleteJob = (jobId: number) => void;

export default function JobManager() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    axios
      .get("http://localhost:8080/listJobs")
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteJob: DeleteJob = (jobId: any) => {
    axios
      .delete(`http://localhost:8080/listJobs/${jobId}`)
      .then(() => fetchJobs())
      .catch((err) => console.log(err));
  };

  const updateJobList = () => {
    axios
      .put(`http://localhost:8080/listJobs`)
      .then(() => fetchJobs)
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {loading ? (
        <div className="loading-overlay">
          <Loading />{" "}
        </div>
      ) : (
        <Job jobs={jobs} deleteJob={deleteJob} updateJobList={updateJobList} />
      )}
    </div>
  );
}
