import PropTypes from 'prop-types'

function Student(props){
    return(
        <div>
            <p> Name: {props.name} </p>
            <p> Graduated: {props.isGraduated ? "Yes" : "No"} </p>
        </div>
    )
}
Student.propTypes = {
    name: PropTypes.string,
    isGraduated: PropTypes.bool
}

Student.defaultProps = {
    name : "Guest",
    isGraduated : false
}
export default Student

//Child