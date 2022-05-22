import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About';
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";
import Home from './src/screens/Home';


const App = () => {


  const Stack = createNativeStackNavigator();

  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={
          {
            headerShown: false,
          }
        } />
        <Stack.Screen name="Course" component={Course} options={{
          headerBackTitleStyle:{ fontSize:25},
          headerTitle:"Courses",
          headerTitleAlign:"center"           
          }
        }/>
        <Stack.Screen name="Contact" component={Contact} options={{
          headerBackTitleStyle:{ fontSize:25},
          headerTitle:"Courses",
          headerTitleAlign:"center" 
        }} />
        <Stack.Screen name="About" component={About} options={{
          headerBackTitleStyle:{ fontSize:25},
          headerTitle:"Courses",
          headerTitleAlign:"center" 
        }}/>
        <Stack.Screen name="Students" component={UserData} options={{
          headerBackTitleStyle:{ fontSize:25},
          headerTitle:"Courses",
          headerTitleAlign:"center" 
        }} />

      </Stack.Navigator>
    </NavigationContainer>
    
  )
}



export default App