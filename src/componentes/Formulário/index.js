import Botão from '../Botão'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import "./Formulário.css"
import { useState } from "react";


const Formulário = (props) => {

      const [nome, setNome] = useState('')
      const [autor, setAutor] = useState('')
      const [imagem, setImagem] = useState('')
      const [gênero, setGênero] = useState('')

      const aoSalvar = (evento) => {
            evento.preventDefault();
            props.aoLivroCadastrado({
                  nome,
                  autor,
                  imagem,
                  gênero
            })
      }

      return (
            <section className="formulario">
                  <form onSubmit={aoSalvar}>

                        <h2>Preencha os dados para adicionar um livro à sua lista</h2>

                        <CampoTexto
                              obrigatório={true}
                              label='Nome'
                              placeholder="Digite o nome do livro"
                              valor={nome}
                              aoAlterado={valor => setNome(valor)}
                        />

                        <CampoTexto
                              obrigatório={true}
                              label='Autor(a)'
                              placeholder="Digite o nome do(a) autor(a)"
                              valor={autor}
                              aoAlterado={valor => setAutor(valor)}
                        />

                        <CampoTexto
                              label='Capa'
                              placeholder="Digite o endereço da imagem"
                              valor={imagem}
                              aoAlterado={valor => setImagem(valor)}
                        />

                        <ListaSuspensa
                              obrigatório={true}
                              label='Gênero'
                              itens={props.gêneros}
                              valor={gênero}
                              aoAlterado={valor => setGênero(valor)}
                        />

                        <Botão>
                              Criar Card
                        </Botão>

                  </form>
            </section>
      )
}

export default Formulário