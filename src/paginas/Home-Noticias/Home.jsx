import Principal from './principal'
import Noticia from './noticia'

function Home() {
  return (
    <div class="app">
      <section class="hui-container">
        <div class="hui-grid">
          
          <Principal titulo="Aerodesign promove visita ao hangar de manutenção da Azul em Campinas " 
          subtitulo1="Os alunos foram acompanhados pelo professor da graduação Roberto Gil" 
          subtitulo2="Os iteanos também visitaram a UniAzul" 
          cor="#FFC300"
          imagem="images/azul.jpg" />
          
          <div class="row">
            <Noticia titulo = "Conheça as origens do ITA" 
            subtitulo1="AeroDesign organiza ida ao hangar da embraer"
            subtitulo2="Acesse o link do formulário e confira as datas"
            cor="#FFC300"
            imagem="images/embraer.jpg" />

            <Noticia titulo="Menlo: Vagas Abertas"
            cor="red"
            imagem="images/menlo.jpg"/>

            <Noticia titulo="CEE divulga data da Feira de Carreiras de 2023"
            cor="red"
            imagem="images/FEIRADECARREIRAS.jpg"/>
          
            <Noticia titulo="Os astros se alinham para a festa da AGITA"
            cor="purple"
            imagem="images/agita.jpg"/>

            <Noticia titulo="ITAndroids realiza 'vakinha' para a ROBOCUP2023"
            cor="gray"
            imagem="images/vakinhaitandroids.jpg"/>
          </div>

          <div className="coluna1">
            <Noticia titulo="Guarnição proibe a autorização de visitas no H8 pelos alunos"
            subtitulo1="Medida foi tomada sem consulta prévia do ITA"
            subtitulo2="O casd já iniciou processos para reverter a situação"
            cor="black"
            imagem="images/casdportaria.jpg"/>

            <Noticia titulo="Manutenção na rede elétrica afetará H8 neste fim de semana"
            subtitulo1="Veja os blocos e horários em que a energia será cortada"
            cor="black"
            imagem="images/casdportaria.jpg"/>

            <Noticia titulo="Primeira Assembléia Geral Ordinária de 2023"
            subtitulo1="Retorno da comissão de viagens"
            subtitulo2="Aprovação do novo estatuto"
            subtitulo3="Reformulação da distribuição de pontos de CoHAB"
            cor="black"
            imagem="images/casdportaria.jpg"/>
          </div>

          <div className="coluna2">
            <Noticia titulo="Encerra hoje o 1º lote de ingressos para o CRIMI"
            subtitulo1="Evento ocorrerá em Juiz de Fora durante junho"
            subtitulo2="13 atléticas já confirmaram presença"
            cor="darkblue"
            imagem="images/crimi.jpg"/>

            <Noticia titulo="Urubuzão nas quadras"
            subtitulo1="O primeiro amistoso do ano da equipe de basquete ocorreu na manhã dessa sexta contra a equipe da UNIVAP"
            cor="darkblue"
            imagem="images/basquete.jpg"/>

            <Noticia titulo="Imersão dos novos membros da atlética"
            subtitulo1="Os alunos aprenderam a fórmula da gasolina de avião"
            cor="darkblue"
            imagem="images/imersaoatletica.png"/>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home;