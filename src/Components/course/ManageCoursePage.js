import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { Redirect } from 'react-router-dom';

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);
    debugger;

    // we are going to set the inmutable state of this component. Here is the only place we can set it.
    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      backToCourses: false
    }
  }

  componentWillReceiveProps(nextProps) {
    // when we receive new props we need to update the course data.
    if (this.props.course && nextProps.course && this.props.course.id != nextProps.course.id) {
      // if the props course is different
      this.setState({ course: Object.assign({}, nextProps.course) })
    }
  }

  updateCourseState = event => {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse = event => {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.setState({backToCourses: true});
    /*
       as we are using `bindActionCreators` inside mapDispatchToProps function,
       we have access to all actions defined inside courseActions.js on prop `actions`.
    */
  }

  render() {
    const { backToCourses } = this.state;
    return (
        backToCourses ? 
          <Redirect to='/courses' />  : 
          <CourseForm 
            allAuthors={this.props.authors}
            course={this.state.course}
            errors={this.state.errors}
            onChange={this.updateCourseState}
            onSave={this.saveCourse} />
      
    );
  }
}
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired, 
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id); // it will return an array
  if (course.length) {
    return course[0];
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  // ownProps are the props the component receive from the outside
  const courseId = ownProps.match.params.id; // from the path `/course/:id`
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  if (courseId && state.courses.length) {
    course = getCourseById(state.courses, courseId);
  }
  // the state you want to expose to components
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  // the actions you want to expose to components
  return {
    actions: bindActionCreators(courseActions, dispatch) // we can also bind the dispatch manually here
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);