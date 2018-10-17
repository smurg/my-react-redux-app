import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { Redirect } from 'react-router-dom';
/*
 This should be a container component
 it's connected to redux, and does not handle much jsx/template code
 */
class CoursesPage extends Component { 
  constructor(props, context) {
    super(props, context);

    this.state = {
      gotoCourse: false
    }
  }
  courseRow(course, index) {
    // this is the map callback to create a course row
    return <div key={index}>{course.title}</div>
  }

  redirectToAddCoursePage = () => {
    // when a component is rendered by react-router, we receive as props: location, match and history
    // it can be used to i.e: programatically redirections
    this.setState({gotoCourse: true});
  }

  render() {
    const {courses} = this.props, 
      { gotoCourse } = this.state;
    return (
      gotoCourse ? 
        <Redirect to='/course' />  : 
        <div className='jumbotron bg-light'>
          <h1>Courses</h1>
          <input type="submit"
                value="Add Course"
                className="btn btn-primary"
                onClick={this.redirectToAddCoursePage} />
          <CourseList courses={courses} />
        </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  // state is the state inside Redux
  return {
    courses: state.courses // this property name was defined inside reducers/index.js 
  }
}

function mapDispatchToProps(dispatch) {
  return {
 /*   saveTitle: (course) => {
      dispatch(courseActions.createCourse(course)); // dispatch is the important function here
    } // dispatch is a function that allows you to fire off your actions   */
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
/**
 * connect is a higer-order component from react-redux
 * it will return a another function (stateless component) where we will pass our component
 */