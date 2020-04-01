import React, {Component} from 'react';
import Header from './Components/Header'
import Posts from './Components/Posts'
import AddPost from './Components/AddPost'


class App extends Component {
  state= {
    blogposts: [{
      heading: 'Post One', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nesciunt voluptatum pariatur culpa facere voluptates nulla cupiditate sint autem fuga, expedita, ducimus ea voluptas id magni! Odio consectetur corrupti voluptates."
    },
    {
      heading: 'Post Two', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nesciunt voluptatum pariatur culpa facere voluptates nulla cupiditate sint autem fuga, expedita, ducimus ea voluptas id magni! Odio consectetur corrupti voluptates."
    },
    {
      heading: 'Post Three', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nesciunt voluptatum pariatur culpa facere voluptates nulla cupiditate sint autem fuga, expedita, ducimus ea voluptas id magni! Odio consectetur corrupti voluptates."
    },]
  }

handleState = (post)=>{
this.setState({
  blogposts: [...this.state.blogposts, post]
})
}

deletePost = (id)=>{
  let afterDelete = this.state.blogposts.filter((blogpost, i) =>{
    return i !== id
  })
  this.setState({
    blogposts: afterDelete
  })
}

  render() {
    return (
      <div>
        <Header />
        <Posts deletePost={this.deletePost} blogposts= {this.state.blogposts}/>
        <AddPost handleState={this.handleState} />
      </div>
    )
  }
}


export default App;
