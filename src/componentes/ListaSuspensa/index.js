import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
      return (
            <div className='lista-suspensa'>

                  <label>{props.label}</label>

                  <select
                        onChange={evento => props.aoAlterado(evento.target.value)}
                        required={props.obrigatório}
                        value={props.value}
                  >
                        <option value="">Escolha o gênero do livro</option>
                        {props.itens.map(item => <option key={item}>{item}</option>)}

                  </select>
            </div>
      )
}

export default ListaSuspensa