import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        // provided by router.
        const id = this.props.match.params.id;
        this.props.fetchPost(id);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("here!");
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;

        // to prevent error "cannot read property of undefined..."
        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link className="btn btn-primary" to="/">
                    Back to Index
                </Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <button onclick={this.handleClick}>Remove Post</button>
            </div>
        );
    }
}

// ownProps is the component's props reference.
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
