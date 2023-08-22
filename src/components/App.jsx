import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactsList } from "./ContactsList";
import { Filter } from "./Filter";
import {ContactForm} from "./ContactForm"
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = e =>{
   
    this.setState((state) => {
      
     return {[e.target.name]: e.target.value}
    })
   
  } 
  
addNewContact = ({name,number}) => {
  if(this.state.contacts.find(el => el.name === this.state.name)){
    alert(`${this.state.name} is already in contacts`)
   } else{
  this.setState((prevState) => ({contacts: [...prevState.contacts,{id: nanoid(), name, number}]}))}
}

  // handleSubmit = (e) =>{
  //   e.preventDefault();
  //  if(this.state.contacts.find(el => el.name === this.state.name)){
  //   alert(`${this.state.name} is already in contacts`)
  //  } else {
  //   this.setState((state) => {
  //     console.log(this.state)
  //    return {contacts:[ ...state.contacts, {id:nanoid(), name : state.name, number: state.number}]}
  //   })
  //   console.log(this.state.contacts)
  // }}


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
<ContactForm onSubmit={this.addNewContact} ></ContactForm>
<h2>Contacts</h2>

<Filter handleFilter={this.handleChange}></Filter>
<ContactsList contacts={this.state.contacts} filteredNames={this.filterNames()} contactDelete={this.contactDelete} ></ContactsList>

</div>
    )
   }
}
