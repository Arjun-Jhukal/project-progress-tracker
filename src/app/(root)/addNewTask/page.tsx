import BackButton from "@/components/molecule/backButton";
import AddTodoForm from "@/components/organism/addTodoForm";

export default function AddNewTask() {
  return (
    <section className="section">
      <div className="container">
        <BackButton />
        <div className="section__header pb-6">
          <h1>New Project</h1>
        </div>

        <AddTodoForm />
      </div>
    </section>
  );
}
