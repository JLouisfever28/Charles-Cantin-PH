import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import "../Styles/contact.css"

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgnelld");
  if (state.succeeded) {
      return <p>Merci pour le message!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="contact">
       CONTACT
      </label>
      <div className='identité'>
      <input 
      id="nom"
      type="nom"
      placeholder='Nom'
      />
      <ValidationError
      prefix="Nom"
      field="nom"
      errors={state.errors}
      />
      <input 
      id="prenom"
      type="prenom"
      placeholder='Prenom'
      />
      <ValidationError
      prefix="Prenom"
      field="prenom"
      errors={state.errors}
      />
      </div>

      <input
        id="email"
        type="email" 
        name="email"
        placeholder="your email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <textarea
        id="message"
        name="message"
        placeholder="Your message to us..."
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function Contact () {
    return(
        <div className='form-container'>
         <div>
            <ContactForm />
            <Link to="/" className='button-link'>Accueil</Link>
        </div>
        </div>
    );
}

export default Contact;