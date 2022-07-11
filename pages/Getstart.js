import { ImageBackground, StyleSheet, Text, View,Image, Button } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Getstart = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ImageBackground
            style={styles.imagegb}
            source={require('../asset/minou.png')}
        >
            <View style={styles.header}>


            </View>

            <View style={styles.bottom}>

                <Text style={styles.title}>Ce chien est le préféré des Français</Text>
                <Text style={styles.desciption}>
                    Publié: 20 Janvier 2022 à 15h57
                    Temps de lecture: 2 min Partage :
                    Le berger australien, originaire de l’Ouest américain, aux yeux en amande de couleur marron, bleu, vert ou ambre est réputé intelligent, affectueux et actif. Ce chien est le préféré des Français</Text>
                <Button
                        title="Apiyé!"
                        onPress={() => navigation.navigate('accueil')}
                        />
            </View>


        </ImageBackground>
    </View>
  )
}

export default Getstart

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },

    imagegb:{
        flex:1,
        padding:10,
    },
    
    header:{

        flex:1,
        
        
        borderRadius:15,
    },

    bottom:{
        flex:1,
        backgroundColor:'rgba(141,160,83,.5)',
        
               
    }, 

    title:{

        
        fontSize:30,
        textAlign:'center',
        fontWeight:"bold",
        color:'rgba(37,44,11,0.8)',
        
        
    },

    desciption:{
        color:'rgba(51, 64, 50, 0.94)',
        fontWeight:"600",
        marginTop:50,
        marginBottom:30

    },
    button:{


    }
   

})