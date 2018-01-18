import React, { Component } from 'react';
// reduxForm is a function like connect helper, talks to formReducer.
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    render() {
        return (
            <form>
                <Field 
                    name="title"
                    component={}
                />
            </form>
        );
    }
}

export default reduxForm({
    // name of the form.
    form: 'PostsNewForm'
})(PostsNew);
