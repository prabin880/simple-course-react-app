import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component{
    componentDidMount() {
        this.props.actions.loadCourses().catch(error=> {
            alert("Loading courses failed: " + error);
        })
    }
    render(){
        return(
            <>
                <h2>Courses</h2>
                {this.props.courses.map(course => <h2 key={course.title}>{course.title}</h2>)}
            </>
        )
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);