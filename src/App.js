import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter';
import Header from './components/header/header';
import Wrapper from './wrapper.styled';
import { useSelector } from 'react-redux';

const App = () => {
  const visibleContacts = useSelector(state => state.contacts.items);
  return (
    <Wrapper>
      <Header />
      <ContactForm />

      {visibleContacts.length > 0 && (
        <div>
          <Filter />
          <ContactList />
        </div>
      )}
    </Wrapper>
  );
};

export default App;
