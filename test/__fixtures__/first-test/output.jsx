import * as React from "react";
export class Foo extends React.Component {
  componentDidMount() {
    console.log("foo");
  }

  render() {
    return <div>hello</div>;
  }

}