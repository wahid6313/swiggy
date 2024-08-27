import React from "react";

class userClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  async componentDidMount() {
    // console.log("child didmount");
    const data = await fetch("https://api.github.com/users/wahid6313");
    const json = await data.json();

    console.log(json);
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="p=10px ">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increase value
        </button>
        <h2>name:{name}</h2>
        <h3>location:{location}</h3>
        <h4>contact: 7260858566</h4>
      </div>
    );
  }
}

export default userClass;
