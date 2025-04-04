import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";

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
                <div>
                    Logged in user:
                    <userContext.Consumer>
                        {({ loggedInUser }) => (
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </userContext.Consumer>
                </div>
                <UserClass name={"vinod Sharma"}/>
            </div>
        )
    }
}

export default About;