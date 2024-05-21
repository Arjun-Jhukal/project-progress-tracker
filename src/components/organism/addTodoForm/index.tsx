"use client";

import React, { useContext } from "react";
import * as Yup from "yup";
import { CiCalendarDate } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./addTodo.scss";
import UserSelector from "@/components/molecule/userSelector";
import { useFormik } from "formik";
import { ConfirmationContext } from "@/context/confirmationPopup";
import { AlertContext } from "@/context/alertProvider";
import { useRouter } from "next/navigation";
import { db } from "../../../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const validationSchema = Yup.object({
  projectTitle: Yup.string().required("Project name is required").min(2, "Name must be minimum 2 character long"),
  projectDeadline: Yup.string().required("Deadline is required"),
  taskTodo: Yup.array().min(1, "There must be at least one task"),
});

const NewProjectInitialValues = {
  projectTitle: "",
  projectDeadline: "",
  taskTodo: [{ value: "" }],
  participant: [],
  getAlert: false,
};

export default function AddTodoForm() {
  const [notifyChecked, setNotifyChecked] = React.useState<boolean>(false);

  const route = useRouter();

  const handleTaskRemoval = (index: number) => {
    const newArrayAfterRemoval = formik.values.taskTodo.filter((_, i) => index !== i);
    formik.setFieldValue("taskTodo", [...newArrayAfterRemoval]);
  };

  const { handlePopupChange } = useContext(ConfirmationContext);
  const { showNotification } = useContext(AlertContext);

  const formik = useFormik({
    initialValues: NewProjectInitialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const collectionRef = collection(db, "projects");

        const docRef = await addDoc(collectionRef, {
          ...formik.values,
          projectTitle: formik.values.projectTitle,
          projectCreated: serverTimestamp(),
          projectDeadline: formik.values.projectDeadline,
          getAlert: formik.values.getAlert,
          projectParticipants: formik.values.participant,
          projectTask: formik.values.participant,
        });

        formik.resetForm();

        showNotification({
          open: true,
          variant: "success",
          message: `${docRef.id}`,
          autoClose: true,
        });
        route.replace("/");
      } catch (e) {
        console.log(e);
        showNotification({
          open: true,
          variant: "error",
          message: "Something went wrong. Try again later",
        });
      }
    },
  });

  return (
    <div className="form">
      <label htmlFor="projectTitle">Project Title</label>
      <div className="input__field">
        <input type="text" placeholder="Project Title" name="projectTitle" onChange={formik.handleChange} value={formik.values.projectTitle} />
        {formik.touched.projectTitle && formik.errors.projectTitle && <span className="text-red-600">{formik.errors.projectTitle}</span>}
      </div>

      <label htmlFor="projectDeadline">Project Deadline</label>
      <div className="input__field date">
        <input
          type="date"
          placeholder="MM-DD-YYYY"
          name="projectDeadline"
          value={formik.values.projectDeadline} // Adjust value to match the date format YYYY-MM-DD
          onChange={formik.handleChange}
          className="z-[2]"
        />
        <button type="button" className="input__icon">
          <CiCalendarDate className="text-black" />
        </button>
        {formik.touched.projectDeadline && formik.errors.projectDeadline && <span className="text-red-600">{formik.errors.projectDeadline}</span>}
      </div>

      <label>Participants</label>
      <UserSelector />

      <label>Tasks</label>
      <div className="task__list ">
        {formik.values.taskTodo.length > 0 ? (
          formik.values.taskTodo.map((item, index) => (
            <div className="grid grid-cols-12 mb-4" key={index.toString()}>
              <div className="col-span-11">
                <div className="input__field">
                  <input
                    type="text"
                    placeholder="To Do"
                    name="taskTodo"
                    onChange={(e) => {
                      formik.setFieldValue(`taskTodo[${index}].value`, e.target.value);
                    }}
                    value={formik.values.taskTodo[index].value}
                  />
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <button type="button" onClick={() => handleTaskRemoval(index)}>
                  <IoCloseCircleOutline size={24} className="text-red-500" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p>
              No tasks added yet.{" "}
              <button
                type="button"
                className="text-black"
                onClick={() => formik.setFieldValue("taskTodo", [...formik.values.taskTodo, { value: "" }])}
              >
                click here
              </button>{" "}
              to add new task
            </p>
          </div>
        )}

        {formik.values.taskTodo.length > 0 && (
          <div className="text-center mt-4">
            <button className="btn bg-blue-600" onClick={() => formik.setFieldValue("taskTodo", [...formik.values.taskTodo, { value: "" }])}>
              Add More Task
            </button>
          </div>
        )}
      </div>
      {formik.touched.taskTodo && formik.errors.taskTodo && <span className="text-red-600 ">{formik.errors.taskTodo}</span>}

      <div className={`flex justify-between items-center my-4 alert ${!notifyChecked ? "active" : ""}`}>
        <p className="text-[14px] capitalize">Get alert for this project</p>
        <button
          className="switch"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setNotifyChecked((prev) => !prev);
            formik.setFieldValue("getAlert", notifyChecked);
          }}
        >
          <span className="slider"></span>
        </button>
      </div>

      <div className="flex justify-start items-center gap-2 pb-8">
        <button
          type="button"
          className="btn bg-red-500 hover:bg-red-400 disabled:cursor-not-allowed disabled:bg-red-400"
          disabled={!formik.dirty}
          onClick={handlePopupChange}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn bg-green-500 hover:bg-green-300  disabled:cursor-not-allowed disabled:bg-green-400"
          disabled={!formik.dirty}
          onClick={() => formik.handleSubmit()}
        >
          Save
        </button>
      </div>
    </div>
  );
}
