import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: 'Harry',
                location: 'Nepal'
            }
        };
        console.log("CONSTRUCTOR")
    }

    async componentDidMount() {
        console.log("COMPONENT DID MOUNT")
        const data = await fetch('https://api.github.com/users/sarkiharish')
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }

    render() {
        console.log("RENDER")
        console.log("Harish's Info:::", this.state.userInfo)

        return (
            <>
                <h1>Profile of Class component</h1>
                <img src={this.state.userInfo.avatar_url}/>
                <h5>Name : {this.state.userInfo.name}</h5>
                <h5>Location: {this.state.userInfo.location}</h5>
                
            </>
        )
    }
}

export default Profile;