import PropTypes from "prop-types";




function UserGreeting(props)  {

    const welcomeMessage = <h2 className="welcome-message">
            welcome {props.username}
    </h2>

    const loginP = <h2 className="login-p"> Please  login</h2>
/*
    if (props.isLoggedIn == true) {

        return  <h2> Welcome {props.username} </h2>
    
}
    else {
        return <h2> Please log in to continue  </h2>


    }

}

*/
 return(props.isLoggedIn ?  welcomeMessage : loginP );

}

UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool, 
    username: PropTypes.string,

}

UserGreeting.defaultProps = {

    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting