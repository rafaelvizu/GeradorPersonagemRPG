import { ScrollView, View, StyleSheet, Text, Pressable } from "react-native";
import Author from "../../components/Author";
import { useFaker } from 'react-fakers'
import { useState} from 'react'



function GeradorPersonagemCoc() {


     const [forca, setForca] = useState(0)
     const [con, setCon] = useState(0)
     const [pod, setPod] = useState(0)
     const [des, setDes] = useState(0)
     const [apa, setApa] = useState(0)
     const [tam, setTam] = useState(0)
     const [int, setInt] = useState(0)
     const [edu, setEdu] = useState(0)
     const [nome, setNome] = useState('Nenhum')
     const [db, setDb] = useState('Nenhum')

     const [armas] = useState([
          'Faca Pequena: 1D4 + DB', 'Facão: 1D8 + DB',
          'Porrete Pequeno: 1D6 + DB', 'Taco de Baseball: 1D8 + DB',
          'Pistola: 1D10', 'Escopeta: 4D6 (de perto, do contrário, 2D6; não empala',
          'Rifle: 2D6 + 4'
          ])

     const [ocupacao] = useState(['antiquário', 'autor', 'diletante', 'médico', 'jornalista', 'delegado', 'detetive', 'professor', 'arqueólogo', 'ocultista', 'policial', 'advogado', 'marinheiro', 'militar', 'enfermeiro', 'mensageiro', 'radialistav', 'telegrafista'])

     const { success, loading } = useFaker()

     function jogarDados(qntDados, nulLados) {
          let valor = 0
          for (qntDados; qntDados > 0; qntDados--) {
               valor += Math.floor(Math.random() * nulLados + 1)
          }          

          return valor
     }

     
    function criarPersonagem() {
          const atributos = [80, 70, 50, 50, 60, 60, 70, 80]
          
          
          function sortearAtributo() {
               const indexSorteado = Math.floor(Math.random() * atributos.length)
               const valor = atributos[indexSorteado]

               atributos.splice(indexSorteado, 1)

               return valor

          }
          setNome(success[Math.floor(Math.random() * success.length)].firstname + ' ' + success[Math.floor(Math.random() * success.length)].lastname)
          setForca(sortearAtributo())
          setCon(sortearAtributo())
          setPod(sortearAtributo())
          setDes(sortearAtributo())
          setApa(sortearAtributo())
          setTam(sortearAtributo())
          setInt(sortearAtributo())
          setEdu(sortearAtributo())


          let calcDanoExtra = tam + forca

          if (85 <= calcDanoExtra && calcDanoExtra <= 124) {
               setDb('Nenhum')
          } else if (125 <= calcDanoExtra && calcDanoExtra <= 164) {
               setDb('+1d4')
          }
          
     }



     const styles = StyleSheet.create({
          dadosContainter: {
               width: 342,
               paddingBottom: 20,
               backgroundColor: '#70160E',
               marginTop: 50,
               borderRadius: 20,
               alignItems: 'center',
          },

          h1: {
               fontFamily: 'monospace',
               textAlign: 'center',
               color: 'white',
               fontWeight: 'bold',
               marginTop: 20,
               fontSize: 24
          },

          p: {
               fontSize: 16,
               marginTop: 39,
               textAlign: 'center',
               color: 'white',
               fontFamily: 'monospace',
          },
          btnGerar: {
               padding: 10,
               backgroundColor: '#B9030F',
               width: 187,
               marginTop: 50,
               borderRadius: 20
          },
          pBtn: {
               textAlign: 'center',
               color: 'white',
               fontFamily: 'monospace',
          },

     })

    if (!loading) {
          return(
               <View style={{height: '100%', alignItems: 'center', backgroundColor: '#161917', height: '100%', justifyContent: 'center'}}>
                    <Text style={styles.h1}>Carregando...</Text>
               </View>
          )
    } else {
     return (
          <View style={{alignItems: 'center', backgroundColor: '#161917', height: '100%'}}>
               <ScrollView style={{paddingBottom: 50}}>
                    <View style={styles.dadosContainter}>
                         <Text style={styles.h1}>DADOS PESSOAIS</Text>
                         <Text style={styles.p}>
                              <Text style={{fontWeight: 'bold'}}>Nome: </Text>{nome} {'\n'}
                              <Text style={{fontWeight: 'bold'}}>Ocupação: </Text> {pod>1?ocupacao[Math.floor(Math.random() * success.length)]:'Nenhuma'} {'\n'}
                         </Text>

                         <Pressable style={styles.btnGerar} onPress={() => criarPersonagem()}>
                              <Text style={styles.pBtn}>Gerar Ficha</Text>
                         </Pressable>
                    </View>

                    <View style={styles.dadosContainter}>
                         <Text style={styles.h1}>Atributos Príncipais</Text>
                         <Text style={styles.p}>

                              <View style={{flexDirection: 'row'}}>
                                   <View style={{marginRight: 15}}>
                                        <Text>
                                             <Text style={{fontWeight: 'bold'}}>FOR: </Text>{forca}{'\n'}
                                             <Text style={{fontWeight: 'bold'}}>CON: </Text>{con}{'\n'}
                                             <Text style={{fontWeight: 'bold'}}>POD: </Text>{pod}{'\n'}
                                             <Text style={{fontWeight: 'bold'}}>DES: </Text>{des}{'\n'}
                                        </Text>
                                   </View>
                                   <View style={{marginLeft: 15}}>
                                        <Text>
                                             <Text style={{fontWeight: 'bold'}}>APA: </Text>{apa}{'\n'}
                                             <Text style={{fontWeight: 'bold'}}>TAM: </Text>{tam}{'\n'}
                                             <Text style={{fontWeight: 'bold'}}>INT: </Text>{int}{'\n'}
                                             <Text style={{fontWeight: 'bold'}}>EDU: </Text>{edu}{'\n'}
                                        </Text>
                                   </View>
                              </View>

                         </Text>
                    </View>


                    <View style={styles.dadosContainter}>
                         <Text style={styles.h1}>Atributos Secundários</Text>
                         <Text style={styles.p}>
                              
                              <View style={{flexDirection: 'row'}}>
                                   <View style={{marginRight: 15}}>
                                        <Text>
                                             <Text style={{fontWeight: 'bold'}}>PM: {pod}</Text>{}{'\n'}
                                             <Text style={{fontWeight: 'bold'}}>PV: </Text>{Math.floor((tam+con) / 10)}{'\n'}
                                        </Text>
                                   </View>
                                   <View style={{marginLeft: 15}}>
                                        <Text>
                                             <Text style={{fontWeight: 'bold'}}>SOR: </Text>{pod>1?jogarDados(3, 6) * 5:0}{'\n'}
                                             <Text style={{fontWeight: 'bold'}}>SAN: </Text>{pod}{'\n'}
                                        </Text>
                                   </View>
                              </View>
                              
                         </Text>

                         <Text style={styles.p}>
                              <Text style={{fontWeight: 'bold', width: 150}}>DB: </Text>{db}{'\n'}
                         </Text>
                    </View>


                    <View style={styles.dadosContainter}>
                         <Text style={styles.h1}>Armas</Text>


                              <Text style={styles.p}>
                                   <Text style={{fontWeight: 'bold'}}>ARMA 1: </Text>{pod>1?'Ataque Desarmados (humano): 1d3 + DB':'Nenhuma'}{'\n'}
                              </Text>
                              <Text style={styles.p}>
                                   <Text style={{fontWeight: 'bold'}}>ARMA 2: </Text>{pod>0?armas[Math.floor(Math.random() * armas.length)]:'Nenhuma'}{'\n'}
                              </Text>
                              <Text style={styles.p}>
                                   <Text style={{fontWeight: 'bold'}}>ARMA 3: </Text>{pod>0?armas[Math.floor(Math.random() * armas.length)]:'Nenhuma'}{'\n'}
                              </Text>

                       
                    </View>
               </ScrollView>
               <Author/>
          </View>
     )
    }
}


export default GeradorPersonagemCoc