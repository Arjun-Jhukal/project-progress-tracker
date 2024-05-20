import { CiCircleCheck } from "react-icons/ci";
import "./todo.scss";
import Link from "next/link";

interface Props {
  className: string;
  projectName: string;
  brief: string;
  totalTask: string | number;
  progress: string | number;
}
export default function Todo(props: Props) {
  return (
    <div className="grid grid-cols-12 justify-between border-[1px] border-black rounded-[10px] todo__item bg-white relative p-4">
      <div className="col-span-8">
        <Link href={"/project/2"}>
          <h3>{props.projectName}</h3>
        </Link>
        <p>{props.brief || "Web app development"}</p>
        <div className="flex justify-start items-center gap-1">
          <CiCircleCheck className="lg:text-[24px]" />
          <strong>{props.totalTask} Tasks</strong>
        </div>
      </div>
      <div className="col-span-4 flex justify-end">
        <div
          className="progress-bar relative"
          style={{
            background: `radial-gradient(
                closest-side,
                white 79%,
                transparent 80% 100%
              ), conic-gradient(#ff0000 ${props.progress}%, #ddd 0)`,
          }}
        >
          <progress value={80} max={100} style={{ visibility: "hidden", height: 0, width: 0 }}></progress>
          <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold">{props.progress}%</span>
        </div>
      </div>
    </div>
  );
}
