import {ScrollView } from 'react-native';
import Header from './src/components/Header/Header';
import Home from './src/pages/Home';
import Author from './src/components/Author';

function App() {

  return (
    <ScrollView style={{height: '100%'}}>
      <Header page='Home'/>
      <Home/>
      <Author/>
    </ScrollView>
  );
}



export default App