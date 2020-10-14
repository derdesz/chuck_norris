import React, { Component } from 'react';
import uuid from 'react-uuid';
import shortid from 'shortid';

class Dropdown extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     categories: [],
    //     isLoading: false,
    //   }
    //   this.handleChange = this.handleChange.bind(this)
    // }
    state = {
        categories: [],
        isLoading: false
    }
  
    handleChange(e) {
      console.log(e.target.value)
    }


    componentDidMount() {
        this.setState({ isLoading: true });
    
        fetch("https://api.chucknorris.io/jokes/categories")
          .then((res) => res.json())
          .then(
            (data) => {
              this.setState({
                categories: data,
              });
            },
    
            (error) => {
              this.setState({
                error,
              });
            }
          );
          console.log(this.state);
      }

  

    render() {
        const {categories} = this.state;
        return (
            <select className="dropdown" value="Categories" onChange={this.handleChange}>
                <option defaultValue="Categories" disabled hidden>Categories</option>
                {categories.map(category => {
                return (
                    <option key={shortid.generate()} value={category}> {category} </option>
                )
                })}
            </select>
        )
    }
  }
  export default Dropdown;