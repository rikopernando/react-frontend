import React , { Component } from 'react'

class InputForm extends Component {
  
  render() {
    return (
            <div>
              <form style={styles} onSubmit={this.submitForm}>
               <label> Title </label>
               <br/>
               <input type="text" className="form-control" name="title" onChange={ this.handleChange } value={this.props.title}/>
               <br/>
               
               <label> Author </label>
               <br/>
               <input type="text" className="form-control" name="author" onChange={ this.handleChange } value={this.props.author}/>
               <br/>
               
               <label> Jumlah Halaman </label>
               <br/>
               <input type="text" className="form-control" name="page" onChange={ this.handleChange } value={this.props.page}/>
               <br/>
               
               <label> Tahun </label>
               <br/>
               <input type="text" className="form-control" name="years" onChange={ this.handleChange } value={this.props.years}/>
               <br/>
               
               <button type="submit" className="btn"> Submit </button>
              </form>
            </div>
    );
  }

  handleChange = (e) => {
      this.props.handleChange(e.target.name, e.target.value)
  }

  submitForm = (event) => {
      event.preventDefault()
      this.props.submitForm()
  }

}

const styles = {
  margin : 10
}

export default InputForm
