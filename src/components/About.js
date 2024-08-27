import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("parent contructor");
  }

  componentDidMount() {
    // console.log("parent didmount");
  }

  render() {
    // console.log("parent render");

    return (
      <div className="text-center text-xl mt-6">
        <h1>About</h1>
        <h2>this is my about</h2>
        {/* <User name={"wahidali raza"} /> */}

        <UserClass name={"wahid ali"} location={"munger"} />
      </div>
    );
  }
}

export default About;
