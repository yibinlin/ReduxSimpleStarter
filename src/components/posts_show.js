import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';
import { ROOT_URL, API_KEY } from '../constants/api';

class PostsShow extends Component {
    constructor(props) {
        super(props);
        this.state = { post: {} };

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        // provided by router.
        const id = this.props.match.params.id;
        axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
            .then((response) => {
                this.setState({ post: response.data });
            });
    }

    handleDeleteClick() {
        console.log("here!");
        const { id } = this.props.match.params;
        const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
            .then(() => this.props.history.push('/'));
    }

    render() {
        const { post } = this.state;

        // to prevent error "cannot read property of undefined..."
        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link className="btn btn-primary" to="/">
                    Back to Index
                </Link>
                {/* note the onClick is case sensitive!! */}
                <button 
                    className="btn btn-danger pull-xs-right" 
                    onClick={this.handleDeleteClick}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// ownProps is the component's props reference.
// function mapStateToProps({ posts }, ownProps) {
//     return { post: posts[ownProps.match.params.id] };
// }

//export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
export default PostsShow;
