import React from 'react';
import { StyleSheet,Text, View, ImageBackground, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';


export default class Forgot extends React.Component {
    constructor() {
        super()
        this.state={
          passval: false,
          mobval: false,
          otpval: false
        }
      }
    resetfunc = () =>
    {
        if(this.state.passval & this.state.mobval & this.state.otpval){
            alert("Password is reset!");
        }
        else{
            alert("Every Field is required!");
        }  
    }
    sendotpfunc = () =>
    {
        if(this.state.passval & this.state.mobval){
            alert("OTP is sent!");
        }
        else{
            alert("Enter new password and mobile number");
        }
       
       
    }

   static navigationOptions = {
      title: 'Forgot Password',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle :{alignSelf:'center', color:'white', marginLeft: 50, textAlign: 'center'},
      //titleStyle: {alignSelf: 'center', textAlign: 'center', color:'white'}
  };
  maxlen(text)
  {
    var TextLength = text.length.toString() ;
    if(TextLength == 10)
    {
      alert("Maximum number limit reached!");
    }
  }
  validate(text, type)
  {
    alph=/^[a-zA-z0-9]+$/
    num=/^[0-9]+$/
    if(type=='password')
    {
      if(alph.test(text))
      {
        this.setState({
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

    else if(type=='mobile')
    {
      if(num.test(text))
      { this.setState({
        mobval:true,
      })
    }
     
      else 
      {
        this.setState({
          mobval:false,
        })
        alert("Mobile number is required or invalid");
      }
    }
    else if(type=='otp')
    {
      if(num.test(text))
      { this.setState({
        otpval:true,
      })
    }
      else
      {
        this.setState({
          otpval:false,
        })
        alert("OTP is required");
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
            onChangeText={(text)=> this.validate(text, 'password')}
            placeholderTextColor='white'
            placeholder='Enter New Password'
            secureTextEntry={true}
            ></TextInput>
            
            <TextInput 
            style = {[styles.input]}
            onChangeText={(text)=> [this.validate(text, 'mobile'), this.maxlen(text)]}
            placeholderTextColor='white'
            maxLength={10}
            placeholder='Enter Mobile Number'></TextInput>

            
            <View style = {{marginTop: 10}}></View>
            <TouchableOpacity style={styles.regbutton}
            onPress = { this.sendotpfunc }
            >
            <Text style={styles.buttontext}>Send OTP</Text>
            </TouchableOpacity>
            <View style = {{marginTop: 15}}></View>
            <TextInput 
            style = {[styles.input]}
            //style = {[styles.input, !this.state.otpval? styles.error:null]}
            onChangeText={(text)=> this.validate(text, 'otp')}
            placeholderTextColor='white'
            placeholder='Enter the OTP'></TextInput>

            <View style = {{marginTop: 10}}></View>
            <TouchableOpacity style={styles.regbutton}
            onPress = { this.resetfunc }
            >
            <Text style={styles.buttontext}>Reset</Text>
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
   scrollcontainer: {
       flex:1,
   },
   error: {
    borderWidth: 1,
    borderColor: 'red',
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
