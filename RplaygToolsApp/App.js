
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'
import GeradorPersonagemCoc from './src/pages/GeradorPersonagemCoC';


const Stack = createNativeStackNavigator()
 

function App() {

      const headerStyle = { 
          title: 'RPLAYG',
          headerStyle: {
            height: 130,
            backgroundColor: '#9E0004',
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 15,

          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            fontFamily: 'monospace'
          }
      }

      const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#161917'
        },
      };

    return (
      <NavigationContainer theme={MyTheme}>

        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen name='home' component={Home}
            options={headerStyle}  
          />
          <Stack.Screen name='gerarFichaCoC' component={GeradorPersonagemCoc}
            options={headerStyle}
          />
          
        </Stack.Navigator>

      </NavigationContainer>
    )
}


export default App