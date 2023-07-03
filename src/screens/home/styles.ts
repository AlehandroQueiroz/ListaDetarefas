import { View, Text, StyleSheet } from "react-native"

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'  
  },

  container1: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative"
  },

  container2: {
    flex: 3,
    backgroundColor: '#191919',
    position: "relative"
  },
  
  container3: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: "center",
    height: 56,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    marginTop: 180,
    paddingLeft: 55,
    paddingRight: 55,
    flexDirection: "row"  
  },

  containerLine: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  //CONTAINER 1

    imagemLogo: {
      height: 120,
      width: 120,
      resizeMode: 'contain'
    },

  //CAMPO DE TEXTO

  campoTexto1: {
    backgroundColor: '#262626',
    height: 50,
    width: '100%', 
    borderRadius: 5,
    paddingLeft: 20,
    fontSize: 16,
    color: '#F2F2F2',
    fontWeight: '500',
    marginRight: 20
  },

  button: {
    backgroundColor: '#1E6F9F',
    height: 50,
    width: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imagemButtonMais: {
    height: 16,
    width: 16,
    resizeMode: 'contain'
  },

  //CONTAINER 2
  
  //CONTADOR

  textContador1: {
    color: '#4EA8DE',
    fontSize: 16,
    fontWeight: '800',
    marginRight: 15,
    paddingTop: 3
  },

  textContador2: {
    color: '#8284FA',
    fontSize: 16,
    fontWeight: '800',
    marginRight: 15,
    paddingTop: 3
  },

  textContadorNumber: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    backgroundColor: '#333333',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 3,
    paddingTop: 3
  },

  bordaText: {
    borderRadius: 12,
    overflow: 'hidden'
  },

  viewContador: {
    flexDirection: 'row',
    marginTop: 80,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'space-between'
  },

  viewSubContador:{
    flexDirection: 'row'
  },

  viewSubContador2:{
    flexDirection: 'row'
  },

  line: {
    height: 2,
    width: '90%',
    backgroundColor: '#333333',
    marginTop: 25,
    marginBottom: 30
  },

  empty1: {
    fontSize: 18,
    fontWeight: '600',
    color: '#808080',
    textAlign: 'center'
  },

  empty2: {
    fontSize: 18,
    color: '#808080',
    textAlign: 'center',
    marginTop: 6
  },

  emptyImage:{
    resizeMode: 'contain',
    height: 56,
    width: 56,
  },

  containerEmpty:{
    flex: 1,
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 20
  }
 
})