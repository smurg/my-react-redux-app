import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
/*
 This should be a container component
 it's connected to redux, and does not handle much jsx/template code
 */
class CoursesPage extends Component { 
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    // this is the map callback to create a course row
    return <div key={index}>{course.title}</div>
  }

  render() {
    const {courses} = this.props;
    return (
      <div className='jumbotron bg-light'>
        <h1>Courses</h1>
        <CourseList courses={courses} />
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