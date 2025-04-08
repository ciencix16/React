import PropTypes from "prop-types";

function UserGreeting(props) {
    if (props.isLoggedIn) {
        return <h2 className="welcomeMessage">Welcome {props.username}</h2>
    }
    else {
        return <h2 className="loginPrompt">Please log in to continue</h2>
    }
}

export default UserGreeting