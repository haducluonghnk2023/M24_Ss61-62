export default function Navi() {
  return (
    <div className="w-[80%] h-[100px] flex items-center border-4 bg-red-200 rounded-lg border-indigo-600">
      <div className="flex justify-evenly rounded-lg w-[100%]   items-center">
        <button className="border-2 w-[20%] rounded-lg h-[40px] bg-red-300 text-white">
          Tất cả
        </button>
        <button className="border-2 w-[30%] rounded-lg h-[40px]">
          Hoàn thành
        </button>
        <button className="border-2 w-[35%] rounded-lg h-[40px]">
          Đang thực hiện
        </button>
      </div>
    </div>
  );
}
