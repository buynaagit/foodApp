//import liraries
import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../context';

// create a component
const ProfileScreen = () => {
  const {signOut} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default ProfileScreen;
