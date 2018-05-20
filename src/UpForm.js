import React from 'react';

export class UpForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', selected: 'grapefruit' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeOption = this.changeOption.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value.toUpperCase()});
    }
    handleSubmit(event){
        alert( 'Name:' + this.state.value);
        event.preventDefault();
    }

    changeOption(event){
        this.setState({selected: event.target.value});
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label> Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <select value ={this.state.selected} onChange={this.changeOption}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <input type="submit" value="Submit" />
        </form>);
    }


}