import { View , Text, StyleSheet, Linking} from 'react-native'

function Author() {
     
     const styles = StyleSheet.create({
          container: {
               padding: 10,
               backgroundColor: '#0D0D0D',
               width: '100%'
          },
  
          link: {
               textAlign: 'center',
               fontWeight: 'bold',
               textDecorationLine: 'underline',
          }
     })

     return (
          <View style={styles.container}>
               <Text style={{textAlign: 'center', color: 'white', fontStyle: 'italic'}}>
                    <Text>Criador: </Text>
                    <Text onPress={() => Linking.openURL('https://rafaelvizu.github.io/Portfolio-RafaelVizu/')}
                    style={styles.link}>
                         Rafael Vizú</Text>
               </Text>
          </View>
     )
}

export default Author