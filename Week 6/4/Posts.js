import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  loadPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                const postsArray = data.map((item) => new Post(item.title, item.body));
                this.setState({ posts: postsArray });
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    componentDidMount() {
        this.loadPosts();
    }

    
    render() {
        return (
            <div>
                <h2>Blog Posts</h2>
                {this.state.posts.map((post, index) => (
                    <div key={index} style={{ marginBottom: "20px", border: "10px solid #ccc", padding: "1px" }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }

    componentDidCatch(error, info) {
        alert("Something went wrong: " + error);
        console.error("Error info:", info);
    }
}

export default Posts;