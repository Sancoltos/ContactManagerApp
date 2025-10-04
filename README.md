# Contact Manager App

Welcome to Adams Contact Manager App. Please read through this entire read me to get an 
understanding of what you need to install and what prereqs you need to run the app. Thanks!

## Features

- View and manage contact list
- Search contacts by name, email, or company
- Add new contacts with form validation
- Edit existing contact details
- Delete contacts
- Mark contacts as favorites
- Pull-to-refresh functionality
- Persistent storage
- Accessible UI with screen reader support

## Prerequisites

- Node.js (v14 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- Java Development Kit (JDK 11 or higher)

## Installation intructions

1. Clone the repository:
```bash
git clone https://github.com/Sancoltos/ContactManagerApp
cd ContactManagerApp
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install react-native-vector-icons
npm install @react-native-async-storage/async-storage
npm install react-native-image-picker
```

4. Link vector icons for Android:
Add this line to `android/app/build.gradle`:
```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

5. Install iOS pods (this is for mac only not windows):
```bash
npx pod-install
```

## Running the App

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

## Project Structure

```
ContactManagerApp/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── ContactListItem.js
│   │   │   ├── CustomButton.js
│   │   │   ├── CustomInput.js
│   │   │   └── LoadingSpinner.js
│   │   └── forms/
│   ├── data/
│   │   └── contactsData.js
│   ├── screens/
│   │   ├── AddContact/
│   │   │   └── AddContactScreen.js
│   │   ├── ContactDetails/
│   │   │   └── ContactDetailsScreen.js
│   │   └── ContactList/
│   │       └── ContactListScreen.js
│   ├── styles/
│   │   └── globalStyles.js
│   └── utils/
│       └── ContactContext.js
├── App.js
└── package.json
```

## Key Components

### ContactContext
Manages global contact state

### CustomInput
Reusable input component with:
- Animated floating labels
- Icon support
- Error validation display
- Accessibility features

### ContactListScreen
Main screen displaying:
- Searchable contact list
- Floating action button for adding contacts
- Performance optimizations with FlatList

### AddContactScreen
Form for adding/editing contacts with:
- Real-time validation
- Form field navigation
- Error handling

### ContactDetailsScreen
Simple edit screen for updating contact information.

## Data Model

Each contact contains:
- `id`: Unique identifier
- `firstName`: Contact's first name
- `lastName`: Contact's last name
- `email`: Email address
- `phone`: Phone number
- `company`: Company name (optional)
- `avatar`: Profile image URL (optional)
- `notes`: Additional notes (optional)
- `favorite`: Boolean favorite status
- `createdAt`: Creation timestamp



## Performance Optimizations

- `useMemo` for filtered/sorted contact lists
- `useCallback` for event handlers
- `memo` wrapper on ContactListItem
- `FlatList` optimizations



## Tech Used

- React Native
- React Context API
- AsyncStorage for local persistence
- React Native Vector Icons
- React Hooks (useState, useEffect, useMemo, useCallback)


## Lab Information

**Course:** CPAN 213 - Cross-Platform Mobile Application Development  
**Lab:** Lab 3 - Building Interactive UI with Core Components  
**Date:** October 4th
**Instructor:** Horia Humaila
