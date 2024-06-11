import JobManager from "./JobManager";

export default function ListJobs() {
  return (
    <div className="w-[80%]">
      <ul>
        <JobManager></JobManager>
      </ul>
    </div>
  );
}
