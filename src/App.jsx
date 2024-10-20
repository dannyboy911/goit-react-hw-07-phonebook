import React from 'react';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';

const App = () => {
  return (
    <div>
      <h1>Contact Book</h1>
      <ContactForm />
      <ContactsList />
    </div>
  );
};

export default App;
