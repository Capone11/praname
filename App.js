import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Beranda, Tampilan, Tambah } from './src/screens'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tampilan"
          component={Tampilan}
          options={({ navigation:{ navigate }}) => ({
            title: 'Nama Rasi Bintang',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigate('rasiAdd', {
                  tipe: 'add',
                })}
                style={{ padding: 10, justifyContent: 'flex-end'}}
              >
                <Ionicons name="md-add-circle" size={40} color="skyblue" />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name="rasiAdd"
          component={Tambah}
          options={{ title: 'Nama Rasi Bintang' }}
        />
        <Stack.Screen
          name="beranda"
          component={Beranda}
          options={{ title: 'Beranda' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;