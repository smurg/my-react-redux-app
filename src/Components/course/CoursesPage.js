import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component { 
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave() {
   this.props.saveTitle(this.state.course);
  }

  courseRow(course, index) {
    // this is the map callback to create a course row
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div className='jumbotron'>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title} />

        <input type="submit"
          onClick={this.onClickSave}
          value='Save' />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  saveTitle: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  // state is the state inside Redux
  return {
    courses: state.courses // this property name was defined inside reducers/index.js 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveTitle: (course) => {
      dispatch(courseActions.createCourse(course)); // dispatch is the important function here
    } // dispatch is a function that allows you to fire off your actions
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
/**
 * connect is a higer-order component from react-redux
 * it will return a another function (stateless component) where we will pass our component
 */