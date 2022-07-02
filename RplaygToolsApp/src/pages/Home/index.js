import { useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { useFaker } from 'react-fakers'

function Home() {
     const [forca, setForca] = useState(0)
     const [con, setCon] = useState(0)
     const [pod, setPod] = useState(0)
     const [des, setDes] = useState(0)
     const [apa, setApa] = useState(0)
     const [tam, setTam] = useState(0)
     const [int, setInt] = useState(0)
     const [edu, setEdu] = useState(0)
     const [nome, setNome] = useState('none')
     const [danoExtra, setDanoExtra] = useState('Nenhum')

     const [armas] = useState([
          'Faca Pequena: 1D4 + Dano Extra', 'Facão: 1D8 + Dano Extra',
          'Porrete Pequeno: 1D6 + Dano Extra', 'Taco de Baseball: 1D8 + Dano Extra',
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
          let valorRandomNome = Math.floor(Math.random() * success.length)
          setNome(success[valorRandomNome].firstname + ' ' + success[valorRandomNome].lastname)
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
               setDanoExtra('Nenhum')
          } else if (125 <= calcDanoExtra && calcDanoExtra <= 164) {
               setDanoExtra('+1d4')
          }
          
     }

     const styles = StyleSheet.create({
          container: {
               backgroundColor: '#A9D9D0',
               padding: 40,
          },

          dadosPessoais: {
               marginBottom: 20,
               
          },
          atributosPrincipal: {
               marginBottom: 20,
               marginTop: 10,
          },

          atributosSecundarios: {
               marginBottom: 30
          },

          h2: {
               fontSize: 30,
               marginBottom: 20,
               fontWeight: 'bold',
               fontFamily: "sans-serif",
               color: '#027373',
               textAlign: "center"
          },

          h3: {
               fontSize: 25,
               marginBottom: 10,
               marginTop: 10,
               color: '#027373',
               fontWeight: '400',
          },

          p: {
               fontSize: 18,
               marginBottom: 5,
               fontFamily: "monospace"
          },

          p2: {
               fontSize: 18,
               marginBottom: 10,
               fontFamily: 'monospace'
          },

          atributosSecundarioConainer: {
               marginBottom: 10,
          },


     })
     
     return (
          <View style={styles.container}>

               <Text style={styles.h2}>Call Of Cthulhu 7e</Text>

               <View style={styles.dadosPessoais}>

                    <Text style={styles.h3}>Dados</Text>
                    <Text style={styles.p}>Nome: {nome}</Text>
                    <Text style={styles.p}>Ocupação: {pod>1?ocupacao[Math.floor(Math.random() * ocupacao.length)]:'none'}</Text>

               </View>

               <Button
                    title={loading?'Gerar Personagem':'Carregando...'}
                    color="#027373"
                    accessibilityLabel="Clique para gerar uma ficha aleatória de Call of Cthulhu"
                    style={styles.btnGerarPersonagem}
                    onPress={() => loading?criarPersonagem():''}
               />

               <View style={styles.atributosPrincipal}>

                    <Text style={styles.h3}>Atributos Príncipais</Text>
                    <Text style={styles.p}>FOR: {forca}</Text>
                    <Text style={styles.p}>CON: {con}</Text>
                    <Text style={styles.p}>POD: {pod}</Text>
                    <Text style={styles.p}>DES: {des}</Text>
                    <Text style={styles.p}>APA: {apa}</Text>
                    <Text style={styles.p}>TAM: {tam}</Text>
                    <Text style={styles.p}>INT: {int}</Text>
                    <Text style={styles.p}>EDU: {edu}</Text>

               </View>

               <View style={styles.atributosSecundarios}>

                    <Text style={styles.h3}>Atributos Secundários</Text>
                    <View style={styles.atributosSecundarioConainer}>
                         <Text style={styles.p}>SOR: {pod>1?jogarDados(3, 6) * 5:0}</Text>
                         <Text style={styles.p}>SAN: {pod}</Text>
                    </View>
                    <View>
                         <Text style={styles.p}>DB: {danoExtra}</Text>
                         <Text style={styles.p}>PM: {pod}</Text>
                         <Text style={styles.p}>PV: {Math.floor((tam+con) / 10)}</Text>
                    </View>

               </View>

               <View style={styles.armas}>

                    <Text style={styles.h3}>Armas</Text>

                    <Text style={styles.p2}>
                         Arma 1: {pod>1?'Ataque Desarmados (humano): 1d3 + dano extra':'none'}
                    </Text>
                    <Text style={styles.p2}>
                         Arma 2: {pod>0?armas[Math.floor(Math.random() * armas.length)]:'none'}
                    </Text>
                    <Text style={styles.p2}>
                         Arma 3: {pod>0?armas[Math.floor(Math.random() * armas.length)]:'none'}
                    </Text>

               </View>

          </View>
     )



     

     
}


export default Home