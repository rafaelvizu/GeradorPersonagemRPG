import { View, Text, ScrollView, Button, StyleSheet, Pressable} from "react-native"
import Author from '../../components/Author'




function Home({navigation}) {

     const styles = StyleSheet.create({
          main: {
               flex: 1,
               alignItems: 'center'
          },
          btn: {
               backgroundColor: '#70160E',
               height: 100,
               width: 330,
               alignItems: 'center',
               justifyContent: 'center',
               borderRadius: 15,
               marginTop: 25,
          },

          h1: {
               fontSize: 24,
               fontFamily: 'monospace',
               textDecorationLine: 'underline',
               color: 'white',
               marginBottom: 2,
               textTransform: 'uppercase'
          },

          h2: {
               fontSize: 16,
               color: '#E6E6E6',
               fontFamily: 'monospace',
               textTransform: 'capitalize'

          }
     })


     return (
          <View style={{backgroundColor: '#161917', height: '100%'}}>
               <ScrollView>
                    <View style={styles.main}>

                         <Pressable onPress={() => navigation.navigate('gerarFichaCoC')} style={styles.btn}>
                              <Text style={styles.h1}>Gerar Ficha</Text>
                              <Text style={styles.h2}>Call Of Cthulhu 7e</Text>
                         </Pressable>
                         
                    </View>
               </ScrollView>
               <Author/>
          </View>
     )
}

export default Home