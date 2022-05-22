import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react';
import Menu from '../Components/Menu';

const Home = () => {
    const discription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum "
  return (
    <View style={styles.mianContainer}>
      <View style={styles.homeTop}>
        <Image style={styles.homeimg} source={require("../assets/img/homeheader.png")} />
         <Text style={styles.well}>Wellcome to </Text>
         <Text style={styles.info}>Knowledge Hub</Text>
         <Text style={styles.paraStyle}>{discription}</Text>
      </View>
      <Menu/>
    </View>
  )
}
const styles = StyleSheet.create({
    mianContainer: {
      height:"100%",
    },
    homeTop:{
      marginTop: 50,
      display:'flex',
      alignItems:'center',
      justifyContent:"center",
    },
    homeimg:{
      height:350,
      width:350,
      padding:30,
      borderRadius:30,
      marginBottom:10
    },  
    well:{
      color: '#e28743',
      fontWeight: 'bold',
      fontSize: 30,
      fontFamily:'Acme'
    },
    info:{
      color: '#eab676',
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom:10
    },
    paraStyle:{
      lineHeight:20,
      fontWeight: 'bold',
      paddingLeft:10,
      paddingRight:10,
      marginHorizontal:10,
      marginBottom:50
    }
    
  })

export default Home

