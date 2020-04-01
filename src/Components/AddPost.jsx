import React, { Component } from 'react';

class AddPost extends Component {
state= {
    heading: "" ,
    body: ""
}

handleChange = (e) =>{
    this.setState({
        [e.target.id] : e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleState(this.state)
}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='insert post title here' name='heading' id='heading' onChange={this.handleChange}/> <br />
                    <textarea rows="10" cols='30' placeholder='insert post body here' name='body' id='body' onChange={this.handleChange} ></textarea>
                    <button type="submit">Submit </button>
                </form>
            </div>
        );
    }
}

export default AddPost;
