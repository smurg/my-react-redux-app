import React from 'react'
import PropTypes from 'prop-types'
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

/*
  when creating stateless components it's better to use a destructuring approch of the props object
  you can clearly see what props are required, and also it's cleaner instead of accessing each prop.property later
 */
const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput 
        name='title'
        label='Title'
        value={course.title}
        onChange={onChange}
        error={errors.title} />

      <SelectInput
        name='authorId'
        label='Author'
        value={course.authorId}
        defaultOption='Select Author'
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId} />

      <TextInput 
        name='category'
        label='Category'
        value={course.category}
        onChange={onChange}
        error={errors.category} />

      <TextInput 
        name='length'
        label='Length'
        value={course.length}
        onChange={onChange}
        error={errors.length} />
      
      <input 
        type='submit'
        disabled={loading}
        value={loading ? 'Saving...': 'Save'}
        className='btn btn-primary'
        onClick={onSave} />

    </form>
  )
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;

