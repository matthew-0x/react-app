import React from 'react';
import JQuery from 
export class BookList extends React.Component{

 constructor(props){
     super(props);
     this.state = {posts: []};
     
 }

retrievePosts(){
    $.get

 }
 render(){
     const posts = this.state.posts.map( (post)=> 
     <li key={post.id.toString()}> {post.body} </li> )
  return( 
      <ul>{ posts }</ul>
     );
 }
}

