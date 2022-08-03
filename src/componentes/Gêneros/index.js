import Livro from '../Livro'
import './gêneros.css'

const Gêneros = (props) => {
      const secundária = { backgroundColor: props.corSecundaria }
      const primária = { borderColor: props.corPrimaria }

      return (
            <section className='gêneros' style={secundária} >
                  <h3 style={primária}>{props.nome}</h3>
                  <div className='livros'> {props.livros.map(livro => <Livro nome={livro.nome} autor={livro.autor} img={livro.imagem} />)}
                  </div>
            </section >
      )
}

export default Gêneros