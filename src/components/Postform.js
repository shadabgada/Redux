import React, { Component } from 'react'

class Postform extends Component {

    constructor(props){
        super(props);
        this.state ={
            title:'',
            body:''
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    onSubmit = (e) =>{
        e.preventDefault();
        const post = {
            title:this.state.title,
            body:this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    //onchange can also be written inline
    //for ex:                         
    // <input type='text' name='title' 
    // onChange={(e)=>this.setState({[e.target.name]:e.target.value})}
    // value={this.state.title}>    </input>
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <br></br>
                        <input type='text' name='title' 
                        onChange={this.onChange}
                        value={this.state.title}></input>
                    </div>

                    <div>
                        <label>Body:</label>
                        <br></br>
                        <textarea name='body' 
                        onChange={this.onChange}
                        value={this.state.body}></textarea>
                    </div>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default Postform;