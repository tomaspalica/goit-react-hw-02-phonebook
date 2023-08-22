import css from '../css/ContactsList.module.css'

export const ContactsList = ({contacts,filteredNames,contactDelete}) => {
  
  return (  <ul className={css.nameList}>
        {filteredNames.map(({ id, name,number }) => ( 
         <li key={id}>{name}: {number}  <button  name={name} onClick={contactDelete}>delete</button></li>
        ))}
    </ul>)
}