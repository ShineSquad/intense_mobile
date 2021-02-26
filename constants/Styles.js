import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  alignment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  inactive: {
    width: '30%',
    height: '30%',
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  active: {
    backgroundColor: 'green',
  },
  header: {
    height: 70,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  header_text: {
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20,
    fontWeight: 'bold'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: '80%',
    height: '80%',
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  align: {
    alignItems: 'center'
  },
  modalText: {
    margin: 10,
    fontSize: 20
  },
  button: {
    alignItems: 'center',
    padding: 10,
    width: 200,
    margin: 10,
    backgroundColor: '#08c6aa',
    borderRadius: 20
  }
})

export default styles;
