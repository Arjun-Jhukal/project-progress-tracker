import ProjectStatus from "@/components/organism/projectStatusItem";
import Todo from "@/components/organism/todoItem/todo";
import { GrPowerCycle } from "react-icons/gr";
import { GoClock } from "react-icons/go";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaRegFileExcel } from "react-icons/fa";
import Image from "next/image";
import AddButton from "@/components/molecule/AddButton";
import AddNewTask from "./addNewTask/page";
import Header from "@/components/template/header";
export default function Home() {
  const ProjectStatusData = [
    {
      className: "blue",
      title: "On going",
      totalTask: 24,
      icon: <GrPowerCycle className="icon" size={18} />,
    },
    {
      className: "yellow",
      title: "In Process",
      totalTask: 12,
      icon: <GoClock className="icon" size={18} />,
    },
    {
      className: "lightGreen",
      title: "Completed",
      totalTask: 42,
      icon: <IoCheckmarkDoneCircleOutline className="icon" size={18} />,
    },
    {
      className: "lightOrange",
      title: "Canceled",
      totalTask: 8,
      icon: <FaRegFileExcel className="icon" size={18} />,
    },
  ];
  const Task = [
    {
      className: "blue",
      progress: 95,
      projectName: "Gabbinbar",
      brief: "",
      totalTask: 6,
    },
    {
      className: "yellow",
      progress: 40,
      projectName: "Dotcom Global",
      brief: "",
      totalTask: 12,
    },
    {
      className: "lightGreen",
      progress: 75,
      projectName: "Siphox",
      brief: "",
      totalTask: 42,
    },
    {
      className: "lightOrange",
      progress: 50,
      projectName: "WDN",
      brief: "",
      totalTask: 8,
    },
  ];
  return (
    <>
      <Header />
      <main>
        <section className="section py-10">
          <div className="container">
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-2 gap-y-4">
              {ProjectStatusData.map((status) => (
                <div className="col-span-1" key={status.title}>
                  <ProjectStatus title={status.title} classes={status.className} totalTask={status.totalTask} icon={status.icon} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section pb-10">
          <div className="container">
            <div className="section__title">
              <h2>Recent Task</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              {Task.map((item) => (
                <div className="col-span-1" key={item.projectName}>
                  <Todo
                    projectName={item.projectName}
                    brief={item.brief}
                    className={item.className}
                    totalTask={item.totalTask}
                    progress={item.progress}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <AddButton /> */}
      </main>
    </>
  );
}
