import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import { ROOT_URL, API_KEY } from '../constants/api'


class PostsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: {}
        }
    }

    componentDidMount() {
        axios.get(`${ROOT_URL}/posts${API_KEY}`)
            .then((response) => {
                const posts_by_id = _.mapKeys(response.data, 'id');
                this.setState({ posts: posts_by_id });
            })
    }

    renderPosts() {
        return _.map(this.state.posts, (post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return { posts: state.posts };
// }

export default PostsIndex;

//export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
