import { registerRootComponent } from 'expo';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

function Picker() {
  return (
    <select name="choice" onBlur={(e) => e.stopPropagation()} onChange={(e) => e.currentTarget.blur()}>
      <option value="first">First Value</option>
      <option value="second">Second Value</option>
      <option value="third">Third Value</option>
    </select>
  )
}

const Drawer = createDrawerNavigator()
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Initial" component={() => <Picker />} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

registerRootComponent(App);


// web: 19.8 -> gesture: 2.11.0
// web: ? -> gesture: 2.10.0
// web: 18.12 -> gesture: 2.9.0
