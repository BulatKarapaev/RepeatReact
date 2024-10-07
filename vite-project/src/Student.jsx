import PropTypes from "prop-types"
function Student(props) {

    return(

        <div className="student">
            <p>
                Name: {props.name}
            </p>
            <p>
                Age: {props.age}
            </p>
            <p> 
                Student: {props.isStudent ? "Yes" : "No"}
            </p>
          



        </div>
    )
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
 
 }

 Student.propTypes =  {

    name: PropTypes.string,
    age:  PropTypes.age,
    isStudent: PropTypes.bool,
 }

export default Student