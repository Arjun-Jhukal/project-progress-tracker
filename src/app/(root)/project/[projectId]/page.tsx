import { BsThreeDots } from "react-icons/bs";
import StatusButton from "@/components/molecule/statusButton";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { LuAlarmPlus } from "react-icons/lu";
import "@/components/organism/todoItem/todo.scss";
export default function Project() {
  return (
    <>
      <section className="section py-4">
        <div className="container">
          <div className="flex justify-end items-center">
            <StatusButton variant="lightGreen" status="In Progress" />
          </div>
        </div>
      </section>
      <section className="detail">
        <div className="container">
          <h1 className="pb-4">Gabbinbar</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias distinctio non aperiam qui nulla deserunt natus sint ipsa! Totam, amet?
          </p>

          <div className="flex justify-start items-center gap-2 my-6">
            <button className="rounded-[10px] py-1 px-4 bg-gray-300 text-black text-bold hover:bg-red-500 hover:text-white">Attachment</button>
            <button className="rounded-[10px] py-1 px-4 bg-gray-300 text-black text-bold hover:bg-red-500 hover:text-white">Comment</button>
          </div>

          <h3>Team Assign</h3>
          <div className="grid grid-cols-2 pt-4 mb-6">
            <div className="col-span-1 flex ">
              <div className="participant__profile border-[1px] border-solid border-gray-900 rounded-[50%] w-[30px] h-[30px]">
                <Image src={"/logo-no-background.png"} alt="" width={30} height={30} />
              </div>
              <div className="participant__profile border-[1px] border-solid border-gray-900 rounded-[50%] w-[30px] h-[30px] ml-[-10px]">
                <Image src={"/logo-no-background.png"} alt="" width={30} height={30} />
              </div>
              <div className="participant__profile border-[1px] border-solid border-gray-900 rounded-[50%] w-[30px] h-[30px] ml-[-10px]">
                <Image src={"/logo-no-background.png"} alt="" width={30} height={30} />
              </div>
              <div className="participant__profile border-[1px] border-solid border-gray-900 rounded-[50%] w-[30px] h-[30px] grid place-items-center bg-yellow-300 text-white ml-[-10px]">
                {/* <Image src={"/logo-no-background.png"} alt="" width={40} height={40} /> */}
                <FaPlus />
              </div>
            </div>
            <div className="col-span-1">
              <button className="rounded-[10px] py-1 px-2 bg-gray-300 text-black flex justify-start items-center">
                <LuAlarmPlus />
                <span className="pl-2">Deadline:</span> <span className="font-bold text-[14px] text-nowrap">February 6</span>
              </button>
            </div>
          </div>

          <h3>Checklist</h3>
          <div className="task__wrapper relative mt-4">
            <div className="todo__item grid grid-cols-12 justify-between items-center border-[1px] border-black rounded-[10px] todo__item bg-white relative py-2 px-3 gap-2">
              <div className="col-span-2">
                <input type="checkbox" name="" id="" className="w-[25px] aspect-[1/1] border-[1px] rounded-lg border-black  " />
              </div>
              <div className="col-span-9">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="col-span-1 flex justify-end">
                <BsThreeDots />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
