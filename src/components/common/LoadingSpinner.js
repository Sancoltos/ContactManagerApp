import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Colors, GlobalStyles} from '../../styles/globalStyles';

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.container,
    ...GlobalStyles.centered,
  },
});

export default LoadingSpinner;