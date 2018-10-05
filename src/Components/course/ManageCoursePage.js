import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    // we are going to set the inmutable state of this component. Here is the only place we can set it.
    this.state = {
      course: Object.assign({}, props.initialCourse),
      errors: {}
    }
  }

  render() {
    return (
      <CourseForm 
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors} />
    );
  }
}
ManageCoursePage.propTypes = {
  initialCourse: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  let initialCourse = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  return {
    initialCourse: initialCourse
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch) // we can also bind the dispatch manually here
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);