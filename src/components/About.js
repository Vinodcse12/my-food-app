import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("parent : constructor");
    }

    componentDidMount() {
        console.log("parent: componentDidMount");
    }

    render() {
        console.log("parent : render")
        return (
            <div className="">
                <h1>About</h1>
                <h2>hello from react</h2>
                <UserClass name={"vinod Sharma"}/>
            </div>
        )
    }
}

export default About;