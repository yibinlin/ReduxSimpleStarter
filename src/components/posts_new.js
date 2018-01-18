import React, { Component } from 'react';
// reduxForm is a function like connect helper, talks to formReducer.
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field) {
        return (
            <div>
                <input
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field 
                    name="title"
                    component={this.renderTitleField}
                />
            </form>
        );
    }
}

export default reduxForm({
    // name of the form.
    form: 'PostsNewForm'
})(PostsNew);
