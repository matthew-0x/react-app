import React from 'react';
import  { Button }  from 'react-bootstrap';
import { Greeting } from './Greeting';
import { BookList } from './BookList';

export class Button1 extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           isToggleOn : false
       };
        this.handleClick = this.handleClick.bind(this);
   }
    handleClick(){
        this.setState(prevState => ({ isToggleOn : !prevState.isToggleOn }))
    }

    render(){
        
        const isToggleOn = this.state.isToggleOn;
        return(
            <div>
             <Button bsStyle="success" bsSize="default" block onClick={this.handleClick} >
                 {isToggleOn ? 'On': 'Off'} 
             </Button>
             <Greeting isLoggedIn = {isToggleOn} />
             <BookList key="2"/>
            </div>
        );
    }

}


