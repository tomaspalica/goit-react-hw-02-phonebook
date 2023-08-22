import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactsList } from "./ContactsList";
import { Filter } from "./Filter";
import {ContactForm} from "./ContactForm"
export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = e =>{
   
    this.setState((state) => {
      
     return {[e.target.name]: e.target.value}
    })
   
  } 
  
  handleSubmit = (e) =>{
    e.preventDefault();
   if(this.state.contacts.find(el => el.name === this.state.name)){
    alert(`${this.state.name} is already in contacts`)
   } else {
    this.setState((state) => {
      console.log(this.state)
     return {contacts:[ ...state.contacts, {id:nanoid(), name : state.name, number: state.number}]}
    })
    console.log(this.state.contacts)
  }}


 filterNames = () => {
  const {filter, contacts} = this.state
  if(!filter){
    return contacts
  }
  const filterValue = filter.toLowerCase();
  const filteredUsers = contacts.filter(({name}) => {
    const nameValue = name.toLowerCase();
    return nameValue.includes(filterValue)
  })
  return filteredUsers
 }

 contactDelete = (el) => {
  const data = this.state.contacts.filter(i => i.name !== el.target.name)
  console.log(el.target.name)
  this.setState({contacts : data})
 }
   render(){
    
    return(
      <div>
        <h2>Phonebook</h2>
<ContactForm ></ContactForm>
<h2>Contacts</h2>

<Filter handleFilter={this.handleChange}></Filter>
<ContactsList contacts={this.state.contacts} filteredNames={this.filterNames()} contactDelete={this.contactDelete} ></ContactsList>

</div>
    )
   }
}
