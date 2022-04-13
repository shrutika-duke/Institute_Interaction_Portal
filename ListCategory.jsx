import React, { Component } from 'react'
import CategoryServices from '../services/CategoryServices';

export default class ListCategoryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
        this.post = this.post.bind(this);
    }
    componentDidMount() {
        CategoryServices.getAllCategories().then((res) => {
            this.setState({ categories: res.data });
        });
    }
    
    post(id) {
        console.log(id);
        localStorage.setItem("category", id);
        this.props.history.push('/addPost');
    }

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                
                <h2 className="text-center">All Categories</h2>
                <br/>
                <br/>
                <div className="row">

                </div>
                <div className="row">
               
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Category name</th>
                                <th>Category description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                         
                        <tbody>
                            {
                                this.state.categories.map(
                                    categories =>
                                        <tr key={categories.id}>
                                            <td>{categories.name}</td>
                                            <td>{categories.description}</td>
                                            <td><button style={{ marginLeft: "20px" }} onClick={() => this.post(categories.id)} className="btn btn-danger">Add Query </button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                  
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}
