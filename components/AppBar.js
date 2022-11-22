import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AppBar = ({setModalVisible, modalVisible}) => (
 <Appbar style={styles.top}>
    <Appbar.Action icon="tune" onPress={() => setModalVisible(!modalVisible)} />
  </Appbar>
 );

export default AppBar

const styles = StyleSheet.create({
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 159, 69, 0.4)',
    marginTop: 0,
  },
});