import { useState } from "react"
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

     const [ocupacao] = useState(['ANTIQUÁRIO', 'AUTOR', 'DILETANTE', 'MÉDICO', 'JORNALISTA', 'INVESTIGADOR DE POLÍCIA', 'DETETIVE PARTICULAR', 'PROFESSOR', 'ARQUEÓLOGO', 'OCULTISTA', 'POLICIAL', 'ADVOGADO'])

     const { success } = useFaker()

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


     return (
          <div className="home-container">
               <main className="home-main">
                    <div className="container-dados">
                         <h1>Call Of Cthulhu 7e</h1>
                         <div className="dados">
                              <h2>Dados Pessoais</h2>
                              <p>
                                   <b>Nome: </b>{nome} <br/>
                                   <b>Ocupação: </b>{ pod>1?ocupacao[Math.floor(Math.random() * ocupacao.length)]:'none'}
                              </p>
                         </div>
                         <button onClick={() => criarPersonagem()}>Gerar Personagem</button>
                         <div className="tabelas">
                              <table>
                                   <caption>Atributos Príncipais</caption>
                                   <thead>
                                        <tr>
                                             <th>Atributos</th>
                                             <th>Valores</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        <tr>
                                             <td><b>Força</b></td>
                                             <td>{forca}</td>
                                        </tr>
                                        <tr>
                                             <td><b>Constituição</b></td>
                                             <td>{con}</td>
                                        </tr>
                                        <tr>
                                             <td><b>Poder</b></td>
                                             <td>{pod}</td>
                                        </tr>
                                        <tr>
                                             <td><b>Destreza</b></td>
                                             <td>{des}</td>
                                        </tr>
                                        <tr>
                                             <td><b>Aparência</b></td>
                                             <td>{apa}</td>
                                        </tr>
                                        <tr>
                                             <td><b>Tamanho</b></td>
                                             <td>{tam}</td>
                                        </tr>
                                        <tr>
                                             <td><b>Inteligência</b></td>
                                             <td>{int}</td>
                                        </tr>
                                        <tr className="fim-tabela">
                                             <td><b>Educação</b></td>
                                             <td>{edu}</td>
                                        </tr>
                                   </tbody>
                              </table>
                              <table>
                                   <caption>Atributos Secundários</caption>
                                   <thead>
                                        <tr className="fim-tabela">
                                             <th>Atributos</th>
                                             <th>Valores</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        <tr>
                                             <td><b>Sorte</b></td>
                                             <td>{pod>1?jogarDados(3, 6) * 5:0}</td>
                                        </tr>
                                        <tr>
                                             <td><b>Pontos de magia</b></td>
                                             <td>{pod}</td>
                                        </tr>
                                        <tr>
                                             <td><b>Sanidade</b></td>
                                             <td>{pod}</td>
                                        </tr>
                                        <tr>
                                             <td><b>Pontos de vida</b></td>
                                             <td>{Math.floor((tam+con) / 10)}</td>
                                        </tr>
                                        <tr>
                                             <td><b>Dano Extra</b></td>
                                             <td>{danoExtra}</td>
                                        </tr>
                                   </tbody>
                              </table>
                         </div>
                         <div className="armas">
                              <h3>Armas</h3>
                              <ol>
                                   <li>Ataque Desarmados (humano): 1d3 + dano extra</li>
                                   <li>{pod>0?armas[Math.floor(Math.random() * armas.length)]:'none'}</li>
                                   <li>{pod>0?armas[Math.floor(Math.random() * armas.length)]:'none'}</li>
               
                              </ol>
                         </div>
                    </div>
               </main>
          </div>
     )
}


export default Home