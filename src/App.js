import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulário from './componentes/Formulário';
import Gêneros from './componentes/Gêneros';

function App() {

	const sessãoLivros = [
		{
			nome: 'Clássico',
			corPrimaria: '#57c278',
			corSecundaria: '#d9f7e9'
		},
		{
			nome: 'Romance',
			corPrimaria: '#E06869',
			corSecundaria: '#FdE7E8'
		},
		{
			nome: 'Fantasia',
			corPrimaria: '#82CFFA',
			corSecundaria: '#E8F8FF'
		},
		{
			nome: 'Horror',
			corPrimaria: '#FF8A29',
			corSecundaria: '#FFEEDF'
		},
		{
			nome: 'Sci-fi',
			corPrimaria: '#A6D157',
			corSecundaria: '#F0F8E2'
		},
		{
			nome: 'Técnico',
			corPrimaria: '#FF8A05',
			corSecundaria: '#FFF5D9'
		},
		{
			nome: 'Suspense',
			corPrimaria: '#ED6B69',
			corSecundaria: '#FDE7E8'
		}
	]

	const [livros, setLivros] = useState([])
	const aoNovoLivroAdicionado = (livro) => {
		setLivros([...livros, livro])
	}

	return (
		<div className="App">
			<Banner />
			<Formulário gêneros={sessãoLivros.map(gêneros => gêneros.nome)}
				aoLivroCadastrado={livro => aoNovoLivroAdicionado(livro)}
			/>

			{sessãoLivros.map(gênero => <Gêneros
				key={gênero.nome}
				nome={gênero.nome}
				corPrimaria={gênero.corPrimaria}
				corSecundaria={gênero.corSecundaria}
				livros={livros.filter(livro => livro.gênero === gênero.nome)}
			/>)}

		</div>
	);
}

export default App;
