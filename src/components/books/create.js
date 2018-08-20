import React , { Component } from 'react'
import axios from '../../axios'
import InputForm from '../form-input'

class CreateBook extends Component {
  
  constructor() {
      super()
      this.state = {
        title : '',
        author : '',
        page : '',
        years : ''
      }

  }

  render() {
    return (
            <div>
              <InputForm 
                title={this.state.title}
                author={this.state.author}
                page={this.state.page}
                years={this.state.years} 
                handleChange={this.handleChange}
                submitForm={this.submitForm} 
              />
            </div>
    );
  }

  handleChange = (name,value) => {
    this.setState({[name] : value })
  }

  submitForm = () => {
      axios.post('/books/create', this.state)
      .then((resp) => {
        console.log(resp)
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

}


export default CreateBook
