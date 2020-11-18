import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component{
    state = {
        course: {
            title: ""
        }
    }

    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h2>Courses</h2>
                <h3>Add Courses</h3>
                
                <input type="text" value={this.state.course.title} onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
                {this.props.courses.map(course => <h2 key={course.title}>{course.title}</h2>)}
            </form>
            
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