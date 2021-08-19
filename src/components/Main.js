import students from "../data/students.json";
import Student from "./Student";
import AddStudent from "./AddStudent";
import { Component } from "react";

class Main extends Component {
  state = {
    studentsArr: students,
  };

  addStudentHandler = (theStudent) => {
    const studentsCopy = [...this.state.studentsArr];
    studentsCopy.push(theStudent);
    this.setState({
      studentsArr: studentsCopy,
    });
  };

  render() {
    return (
      <>
        <AddStudent addTheStudent={this.addStudentHandler} />
        <div className="student-list">
          <h2>List of Students</h2>
          {this.state.studentsArr.map((studentObj) => {
            return <Student {...studentObj} />;
          })}
        </div>
      </>
    );
  }
}

export default Main;
