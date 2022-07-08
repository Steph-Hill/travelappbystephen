import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground,  } from 'react-native'
import React from 'react'

const Onboard = () => {
  return (
    <View style={{flex:1,}}>
        <StatusBar translucent />
            <ImageBackground style={{flex:1,}}
                            source={require('../asset/1.png')}>
                <View style={styles.details}>

                    <Text style={{
                        color:'white',
                        fontSize:30,
                        
                       
                    }}>

Découvrir l’anse Couleuvre pour la première fois reste souvent une expérience mémorable. L’aventure commence sur la route côtière (D10).
                    </Text>

                    <TouchableOpacity
                    activeOpacity={0.8}>
                        <View style={styles.btn}>
                                <Text style={{fontWeight:'bold'}}>An nou Ay !</Text>

                        </View>

                    
                    </TouchableOpacity>
                </View>

            </ImageBackground>
    </View>
  )
}

export default Onboard

const styles = StyleSheet.create({


                details:{
                    height:'50%',
                    bottom:0,
                    position:"absolute",
                    paddingHorizontal:40,
                },
                btn:{

                    height:50,
                    width:120,
                    backgroundColor:"white",
                    marginTop:20,
                    borderRadius:7,
                    justifyContent:'center',
                    alignItems:'center',

                },
                
});