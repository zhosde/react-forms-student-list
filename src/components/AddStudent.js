import React, { Component } from "react";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      profileImg: "",
    };
  }

  handleChange = (event) => {
    let {name,value } = event.target;
      this.setState({
        [name]: value,
      });
  }

  handleFormSubmit = (event) => {
      event.preventDefault();
      this.props.addTheStudent(this.state)
      this.setState({
        name: "",
        age: "",
        profileImg: "",
      });
  }

  render() {
    return (
      <section>
        <h2>Add new Student</h2>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={(e) => this.handleChange(e)}
              />
            </label>

            <label>
              Age:
              <input
                type="text"
                name="age"
                value={this.state.age}
                onChange={(e) => this.handleChange(e)}
              />
            </label>

            <label>
              Image File:
              <input
                type="text"
                name="profileImg"
                value={this.state.profileImg}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <button>Create</button>
          </form>
        </div>
      </section>
    );
  }
}

export default AddStudent;
