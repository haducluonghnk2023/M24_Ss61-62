import { useState } from "react";
import "./Job.css";
interface Job {
  id: number;
  name: string;
}

type DeleteJob = (jobId: number) => void;

export default function Job({
  jobs,
  deleteJob,
}: {
  jobs: Job[];
  deleteJob: DeleteJob;
  updateJobList: () => void;
}) {
  const [selectedJobName, setSelectedJobName] = useState<string>("");
  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  const handleDelete = (id: number, name: string) => {
    setSelectedJobId(id);
    setSelectedJobName(name);
    setShowConfirmationModal(true);
  };
  const confirmDelete = () => {
    if (selectedJobId !== null) {
      deleteJob(selectedJobId);
      setShowConfirmationModal(false);
    }
  };

  return (
    <div>
      <div>
        <ul className="job-list">
          {jobs.map((job) => (
            <li key={job.id} className="mb-[20px]">
              <div className="flex justify-between items-center rounded-md h-[50px] border-2 px-[20px]">
                <div className="flex items-center">
                  <input type="checkbox" />
                  <span className="ml-[10px]">{job.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button>
                    <i className="fa-solid fa-pen text-yellow-300"></i>
                  </button>
                  <button onClick={() => handleDelete(job.id, job.name)}>
                    <i className="fa-solid fa-trash text-red-600"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showConfirmationModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Xác nhận xóa công việc</h2>
            <p>Bạn có chắc muốn xóa công việc {selectedJobName} không?</p>
            <div>
              <button onClick={() => setShowConfirmationModal(false)}>
                Hủy
              </button>
              <button onClick={confirmDelete} className="bg-red-600">
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
