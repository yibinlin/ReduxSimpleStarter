import React, { Component } from 'react';
// reduxForm is a function like connect helper, talks to formReducer.
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

// This class cannot be rewritten to remove Redux because it uses redux-form.
class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className=`form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    // All framework-defined callback functions & properties here.
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        // prop provided by redux form, validating the form, etc.
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">
                    Cancel
                </Link>
            </form>
        );
    }
}

function validate(values) {
    // console.log(values) -> {title: 'asdf', categories: 'asdf', content: 'asdf'}
    const errors = {};

    // Validate inputs from 'values'
    if (!values.title) {
        // the property "title" must  match Field name "title".
        errors.title = "Enter a title";
    }

    if (!values.categories) {
        errors.categories = "Enter some categories";
    }

    if (!values.content) {
        errors.content = "Enter some content please";
    }

    // If errors is empty, the form is fine to submit.
    // If errors has *any* properties, redux form assumes forms is invalid.
    return errors;
}


export default reduxForm({
    validate,
    // name of the form.
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);
