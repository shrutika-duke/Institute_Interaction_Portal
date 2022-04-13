import React, { Component } from 'react';
import PostService from '../services/PostService';
import 'react-dropdown/style.css';




class ListPostComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listPost: []
        }
        this.post = this.post.bind(this);
    }
    componentDidMount() {
        PostService.getPosts().then((res) => {
            this.setState({ listPost: res.data });
        });
    }

    changeCategoryNameHandler = (event) => {
        this.setState({ category: event.target.value });
    }
    changeCategoryNameHandler = this.changeCategoryNameHandler.bind(this);

    post(id) {
        console.log(id);
        localStorage.setItem("Post", id);
        this.props.history.push('/addComment');
    }

    viewComments(id) {
        console.log(id);
        localStorage.setItem("Post", id);
        this.props.history.push('/viewComments');
    }
    render() {
        return (
            <div className="container-fluid">
                <br></br>
           <br></br>
                <h2 className="text-center">All Posts</h2>
                <div className="row ">
                    {/* <button class="btn btn-primary col-md-1 offset-8" onClick={this.post}>Add New Post</button> */}
                    <a class="btn btn-primary col-md-1 offset-8" href="/addComment" onClick={this.post}>Add Comment</a>
                </div>
                <div className="container">
                    <div className="col sm-6">
                        {this.state.listPost.map(listPost =>
                               <div class="main1 card border border-success shadow-0 mb-3" style={{maxWidth:"46rem"}}key={listPost.id}>
                                    <div class="card-header bg-transparent border-success"><h6 className="">{listPost.title}</h6></div>
                                    <div class="card-body ">
                                  {/* <h5 class="card-title">DES</h5> */}
                                    <p class="card-text">
                                        {listPost.content}
                                     </p>
                                     <p align="right" >  
                                        Posted By - {listPost.user.name}
                                     </p>
                                     <div class="card-footer bg-transparent border-success">
                                     <td>
                                     <button style={{ marginLeft: "20px" }} onClick={() => this.viewComments(listPost.id)}  href="./viewComments" className="btn btn-danger">View Comments</button>
                                     </td>
                                    <td> <button style={{ marginLeft: "20px" }} onClick={() => this.post(listPost.id)} href="./AddComment" className="btn btn-danger">Add Comment</button></td>
                                         </div> 
                                    {/* <h5 className="nameColor">{product.grams}gms</h5> */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <br></br>
           <br></br>
           <br></br>
           <br></br>
</div >
        );
    }
}


export default ListPostComponent;