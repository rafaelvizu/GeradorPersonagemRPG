
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'
import GeradorPersonagemCoc from './src/pages/GeradorPersonagemCoC';


const Stack = createNativeStackNavigator()
 

function App() {

      const headerStyle = { 
          title: 'RPLAYG',
          headerStyle: {
            height: 120,
            backgroundColor: '#9E0004',
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            fontFamily: 'monospace'
          }
      }

    return (
      <NavigationContainer >

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