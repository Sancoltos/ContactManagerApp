import React, {useState} from 'react';
import {ContactProvider} from './src/utils/ContactContext';
import ContactListScreen from './src/screens/ContactList/ContactListScreen';
import AddContactScreen from './src/screens/AddContact/AddContactScreen';
import ContactDetailsScreen from './src/screens/ContactDetails/ContactDetailsScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('ContactList');
  const [params, setParams] = useState(null);

  const navigation = {
    navigate: (screen, screenParams) => {
      setCurrentScreen(screen);
      setParams(screenParams || null);
    },
    goBack: () => {
      setCurrentScreen('ContactList');
      setParams(null);
    },
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'ContactList':
        return <ContactListScreen navigation={navigation} />;
      case 'AddContact':
        return <AddContactScreen navigation={navigation} route={{params}} />;
      case 'ContactDetails':
        return <ContactDetailsScreen navigation={navigation} route={{params}} />;
      default:
        return <ContactListScreen navigation={navigation} />;
    }
  };

  return (
    <ContactProvider>
      {renderScreen()}
    </ContactProvider>
  );
};

export default App;