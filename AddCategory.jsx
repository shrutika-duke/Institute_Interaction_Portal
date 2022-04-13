import React, { Component } from 'react'
import CategoryServices from '../services/CategoryServices';

export default class AddCategoryComponent extends Component {
  constructor(props){
      super(props)
      this.state={
        name: ' ',
        description: ' '
      }
      this.changeNameHandler=this.changeNameHandler.bind(this);
      this.changeDescriptionNameHandler=this.changeDescriptionNameHandler.bind(this);
      this.savePost=this.savePost.bind(this);
  }
  
  savePost=(p)=>{
    p.preventDefault();
    let category={name:this.state.name,description:this.state.description};//publish_date:this.state.publish_date ,user_id:this.state.user_id
    console.log('catergory =>' +JSON.stringify(category));
    CategoryServices.addCategory(category).then(res => {
        this.props.history.push('/category');
    });
  }
  changeNameHandler=(event)=>{
      this.setState({name :event.target.value});
  }
  changeDescriptionNameHandler=(event)=>{
    this.setState({description :event.target.value});
}

cancel(){
    this.props.history.push('/posts');
}

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Add Category</h3>
                    <div className="card-body">
                        <form>
                            {/* <div className="form-group">
                                <label>Category name</label>
                                <input placeholder="Name" name="name" className="form-control"
                                value={this.state.name} onChange = {this.changeNameHandler} />
                               
                            </div> */}
                            <div className="form-group">
                                <label>Description</label>
                                <input placeholder="Content" name="content" className="form-control"
                                value={this.state.description} onChange = {this.changeDescriptionNameHandler} />
                               
                            </div>
                            <div className="form-group">
                             <label>Name</label>
                            <input placeholder="Name" name="name" className="form-control"
                             value={this.state.name} onChange = {this.changeNameHandler} />
                               
                            </div>
                            {/* <div className="form-group">
                                <label>Publish date</label>
                                <input placeholder="Publish On" name="publish_date" className="form-control"
                                value={this.state.addedOn} onChange = {this.changePublishDateHandler} />
                                
                            </div> */}
                            {/* <div className="form-group">
                                <label>User id</label>
                                <input placeholder="User Id" name="user_id" className="form-control"
                                value={this.state.price} onChange = {this.changeUserIdHandler} />
                            </div> */}
                            {/* <div className="form-group">
                                <label>Insert Image</label>
                                <input type="file" name="image" accept="image/*" multiple={false} className="form-control"
                               
                               defaultValue={this.state.image} onChange = {this.changeImageHandler} />
                            </div> */}
                            <button className="btn btn-success" onClick={this.savePost}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
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
