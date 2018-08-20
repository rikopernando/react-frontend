import React, { Component } from 'react';
import axios from '../../axios'
import { Link } from 'react-router-dom'

class Book extends Component {
  
  constructor() {
      super()
      this.state = {
        books : []
      }

  }

  render() {
    const urlEdit = 'edit'
    return (
            <div>
              <Link to="/create" > Create Book </Link> 
              <table>
                <thead>
                  <tr>
                  <th> Title </th>
                  <th> Author </th>
                  <th> Page </th>
                  <th> Years </th>
                  <th> Aksi </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.books.map((book,index) => {
                      return (
                        <tr key={index}>
                          <td> {book.title} </td>
                          <td> {book.author} </td>
                          <td> {book.page} </td>
                          <td> {book.years} </td>
                          <td> 
                              <button onClick={() => this.handleDelete(book.id) }> 
                                      Delete 
                              </button> 
                          </td>
                          <td> 
                              <Link to={urlEdit+'/'+book.id}> Edit </Link> 
                          </td>
                        </tr>
                     )
                    })
                  }
                </tbody>
              </table>
            </div>
    );
  }

  handleDelete = (id) => {
    axios.delete('books/delete/'+id)
    .then((resp) => {
      console.log(resp)
      this.loadData()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  loadData = () => {
      axios.get('/books/')
      .then((resp) => {
         console.log(resp.data)
         this.setState({ books : resp.data.data })
         console.log(this.state.books)
      })
      .catch((err) => {
         console.log(err)
      })
  }

  componentDidMount() {
      this.loadData()
  }

}

export default Book
