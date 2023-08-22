import { render } from '@testing-library/react';
import { Component } from 'react';
import css from '../css/ContactForm.module.css'
class ContactForm extends Component { 
    state = {
        name: '',
        number: '',
      };
      handleChange = e =>{
   
        this.setState((state) => {
          
         return {[e.target.name]: e.target.value}
        })
       
      } 
      handleSubmit = e => {
        e.preventDefault();
        
        this.props.onSubmit({...this.state})
        this.setState({name:"", number: ""})
      }
   
    render(){
        return(
    <form className={css.form} onSubmit={this.handleSubmit}>
    <label className={css.label}>name
    <input
    value={this.state.name}
type="text"
name="name"
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required
onChange={this.handleChange}
/> </label>
<label className={css.label}>Number
<input
value={this.state.number}
type="tel"
name="number"
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
onChange={this.handleChange}
/></label>
<button >add contact</button>
</form>)}}

export {ContactForm}