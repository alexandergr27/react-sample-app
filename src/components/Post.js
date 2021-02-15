import React, {Component} from 'react';

class Post extends Component {

    state = {
        post: []
    }

    async componentDidMount() {
       const res = await fetch('https://jsonplaceholder.typicode.com/posts')
       const data = await res.json();
       this.setState({post:data})

    }

    render() {
        return (
            <div>
                <h3>Posts:</h3>
                {
                    this.state.post.map(post => {
                        return <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Post;