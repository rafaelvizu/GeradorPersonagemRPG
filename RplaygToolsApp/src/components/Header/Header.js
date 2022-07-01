import { View, Text, StyleSheet } from "react-native";


function Header(props) {

     const styles = StyleSheet.create({
          container: {
               backgroundColor: '#038C7F',
               padding: 30
          },
          header: {
               padding: 10,
          },
          title: {
               fontSize: 40,
               textAlign: "center",
               color: 'white',
               fontFamily: 'sans-serif'
          }, 
          nav: {
               marginTop: 10,

          },

          navText: {
               textAlign: "center",
               fontSize: 20,
               color: 'rgba(255, 255, 255, 0.708)',
               textDecorationLine: 'underline'
          }
     })

     return (
          <View style={styles.container}>
               <View style={styles.header}>
                    <Text style={styles.title}>
                         RplayG Tools
                    </Text>
               </View>
               <View style={styles.nav}>
                    <Text style={styles.navText}>
                         {props.page}
                    </Text>
               </View>
          </View>
     )

}


export default Header