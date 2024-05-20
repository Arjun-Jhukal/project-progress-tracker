import Link from "next/link";

interface Props {
  classes: string;
  title: string;
  totalTask: string | number;
  icon: React.ReactElement;
}
export default function ProjectStatus(props: Readonly<Props>) {
  return (
    <div className={`${props.classes} grid grid-cols-6 rounded-[10px] py-4 px-4 items-center gap-2 `}>
      <div className="col-span-2 sm:col-span-1">
        <div className="icon__wrapper w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[50%] bg-black grid place-items-center bg-opacity-25">
          {props.icon}
        </div>
      </div>
      <div className="col-span-4 sm:col-span-5">
        <h3>{props.title}</h3>

        <p className="text-gray-700">{props.totalTask} Projects</p>
      </div>
    </div>
  );
}
