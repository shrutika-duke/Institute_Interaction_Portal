import React, { Component } from 'react'
import PostService from '../services/PostService';
import 'react-dropdown/style.css';
import CategoryServices from '../services/CategoryServices';
import ReactSession from 'react-client-session';



export default class AddPostComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ' ',
            title: ' ',
            user:{}
            // category_id: localStorage.getItem("category")


        }
        this.changeContentNameHandler = this.changeContentNameHandler.bind(this);
        this.changeTitleNameHandler = this.changeTitleNameHandler.bind(this);
        this.changecategoryIdHandler = this.changecategoryIdHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.savePost = this.savePost.bind(this);
    }
    savePost = (p) => {
        p.preventDefault();
        let post = { content: this.state.content, title: this.state.title ,user:{id:localStorage.getItem("user_id")}};//publish_date:this.state.publish_date category_id: this.state.category_id 
        console.log('post =>' + JSON.stringify(post));
        PostService.addPost(post).then(res => {
            this.props.history.push('/posts');
        });
    }
    changeContentNameHandler = (event) => {
        this.setState({ content: event.target.value });
    }
    changeTitleNameHandler = (event) => {
        this.setState({ title: event.target.value });
    }
    changecategoryIdHandler = (event) => {

        // this.setState({ categories_id: abc});
    }
    changeUserIdHandler = (event) => {
        this.setState({ user_id: event.target.value });
    }

    cancel() {
        this.props.history.push('/category');
    }

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Post</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Post Title</label>
                                    <input placeholder="Post Name" name="title" className="form-control"
                                        value={this.state.title} onChange={this.changeTitleNameHandler} />

                                </div>
                                <div className="form-group">
                                    <label>Content</label>
                                    <input placeholder="Content" name="content" className="form-control"
                                        value={this.state.content} onChange={this.changeContentNameHandler} />

                                </div>

                                <button className="btn btn-success" onClick={this.savePost}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

