import React , { Component } from 'react'
import axios from '../../axios'
import InputForm from '../form-input'

class EditBook extends Component {
  
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
      const id = this.props.match.params.id
      axios.put('/books/update/'+id, this.state)
      .then((resp) => {
        console.log(resp)
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    const id =  this.props.match.params.id
    axios.get('/books/find/'+id)
    .then((resp) => {
       this.setState({
          title : resp.data.data.title,
          author : resp.data.data.author,
          page : resp.data.data.page,
          years : resp.data.data.years
       })
    })
    .catch((err) => {
      console.log(err)
    })
  }

}

const styles = {
  margin : 10
}

export default EditBook
