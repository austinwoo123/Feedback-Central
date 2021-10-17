import NewEmployeeForm from "../../src/components/newEmployeeForm";
import { useHistory } from "react-router";

function NewEmployeePage() {
  const history = useHistory();

  function addEmployeeHandler(employeeData) {
    fetch("http://localhost:7979/employee", {
      method: "POST",
      body: JSON.stringify(employeeData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/employees");
    });
  }

  return (
    <section>
      <NewEmployeeForm onEmployeeAdd={addEmployeeHandler} />
    </section>
  );
}

export default NewEmployeePage;
