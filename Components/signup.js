import React from 'react';
import { StyleSheet,Text, View, ImageBackground, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';


export default class Signup extends React.Component {
  constructor() {
    super()
    this.state={
      firstval: false,
      lastval: false,
      userval: false,
      passval: false
    }
  }

    loginfunc = () =>
    {
      if(this.state.firstval & this.state.lastval & this.state.userval & this.state.passval){
        this.props.navigation.navigate('First');
      }
      else{
        alert("Every Field is Required!");
      }     
       
    }

   static navigationOptions = {
      title: 'Sign Up',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle :{alignSelf:'center', color:'white', marginLeft: 95, textAlign: 'center'},
      //titleStyle: {alignSelf: 'center', textAlign: 'center', color:'white'}
  };

  validate(text, type)
  {
    alph=/^[a-zA-z0-9]+$/
    if(type=='firstname')
    {
      if(alph.test(text))
      {
        this.setState({
          firstval:true,
        })
       }
      else
      {
        this.setState({
          firstval:false,
        })
        alert("First name is required");
      }
    }

    else if(type=='lastname')
    {
      if(alph.test(text))
      { this.setState({
        lastval:true,
      })
    }
      else
      {
        this.setState({
          lastval:false,
        })
        alert("Last name is required");
      }
    }
    else if(type=='username')
    {
      if(alph.test(text))
      { this.setState({
        userval:true,
      })
     }
      else
      {
        this.setState({
          userval:false,
        })
        alert("Username is required");
      }
    }
    else if(type=='password')
    {
      if(alph.test(text))
      { this.setState({
        passval:true,
      })
    }
      else
      {
        this.setState({
          passval:false,
        })
        alert("Password is required");
      }
    }
  }

  render() {
    return (
      
      <ImageBackground style = {styles.container} source={require('../pattern.png')}>
      <Image style = {styles.logo} source={require('../Transparent.png')}></Image>

        <ScrollView styles={styles.scrollcontainer}>
          <View style = {{marginTop: 200}}></View>
          <TextInput 
          style = {[styles.input]}
          onChangeText={(text)=> this.validate(text, 'firstname')}
          placeholderTextColor='white'
          placeholder='First Name'></TextInput>
          
          <TextInput 
          style = {[styles.input]}
          onChangeText={(text)=> this.validate(text, 'lastname')}
          placeholderTextColor='white'
          placeholder='Last Name'></TextInput>

          <TextInput 
          style = {[styles.input]}
          onChangeText={(text)=> this.validate(text, 'username')}
          placeholderTextColor='white'
          placeholder='Username'></TextInput>

          <TextInput 
          style = {[styles.input]}
          onChangeText={(text)=> this.validate(text, 'password')}
          placeholderTextColor='white'
          //password={true}
          secureTextEntry={true}
          placeholder='Password'></TextInput> 

          <View style = {{marginTop: 20}}></View>
          <TouchableOpacity style={styles.regbutton}
          onPress = { this.loginfunc }
          >
          <Text style={styles.buttontext}>Register</Text>
          </TouchableOpacity>
        </ScrollView>
        <KeyboardSpacer />
      </ImageBackground>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'flex-start',
   },
   error: {
    borderWidth: 1,
    borderColor: 'red',
  },
  scrollcontainer: {
    flex: 1,
  },
  input: {
    backgroundColor: '#252525',
    padding: 10,
    color:'white',
    borderTopWidth: 2,
    width: '92%',
    height: 60,
    //marginTop: 160,
    alignSelf: 'center',
    position: 'relative',
    elevation: 5,
    //borderRadius: 5,
    marginBottom: 10,
    
  },
  
  buttontext: {
    color: 'white',

  },
  regbutton: {
    alignSelf: 'center',
    //padding: 20,
   // marginTop: 300,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 55,
    width: 150,
    elevation: 10,
    borderRadius: 8,
    //marginBottom: 10,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 50,
    position: 'absolute',
    width: 100,
    height: 100,
    marginBottom: 30,
    //opacity: 50,
    // shadowOpacity: 20,
    // shadowColor: 'white',
  },

});
