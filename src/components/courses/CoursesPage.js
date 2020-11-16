import React from 'react';

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
        alert(this.state.course.title);
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h2>Courses</h2>
                <h3>Add Courses</h3>
                
                <input type="text" value={this.state.course.title} onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
            
        )
    }
}

export default CoursesPage;