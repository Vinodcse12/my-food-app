import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "",
                location: "",
                avatar_url: ""
            }
        }

        console.log("child : constructor")
    }

    async componentDidMount() {
        const userData = await fetch("https://api.github.com/users/Vinodcse12");
        const jsonUserData = await userData.json();

        this.setState({
            userInfo: jsonUserData
        })



    }

    render() {
        console.log("child : render")
        return (
            <div className="user-card">
                <img src={this.state.userInfo?.avatar_url} className="team-img"/>
                <h2>Name: {this.state.userInfo?.name}</h2>
                <h2>Location: {this.state.userInfo?.location}</h2>
                <h3>Contact: vinod@gmail.com</h3>
            </div>
          )
    }
}

export default UserClass;