import React, { useState } from 'react';
import Title from '../../components/Text/Title';
import Search from '../../components/Inputs/Search';
import Pagination from '../../components/Pagination/Simple';

import SimpleTable from '../../components/Tables/Simple';


const Categories: React.FC = () => {
  const [search, setSearch] = useState('');
  const [current, setCurrent] = useState(0);
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
  const changeCurrentNumber = (current: number )=> setCurrent(current);
  const data: Data[] = [
    {
      'Categoria': 'Acessórios',
      'Qtd. produtos': 15,
      'botãoDetalhes': '/category/acessorios'
    },
    {
      'Categoria': 'Computadores',
      'Qtd. produtos': 6,
      'botãoDetalhes': '/category/computadores'
    },
    {
      'Categoria': 'Fones de ouvido',
      'Qtd. produtos': 7,
      'botãoDetalhes': '/category/fones'
    },
    {
      'Categoria': 'Gabinetes',
      'Qtd. produtos': 8,
      'botãoDetalhes': '/category/gabinetes'
    },
  ]
  type Data = {
    'Categoria': string;
    'Qtd. produtos': number;
    'botãoDetalhes': string;
  }
  return (
    <div className='categories center flex'>
      <div className='card'>
        <Title type ='h1' title='Categorias' />
        <Search
          value ={search}
          placeholder={'Pesquise aqui pelo nome da categoria ...'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeSearch(event) }
          onClick={ () => alert('Pesquisando...!')}
        />
        <div className='flex center' >
          <SimpleTable
            header = { ['Categoria', 'Qtd. produtos' ]}
            data = {data}
          />
        </div>
        <Pagination 
          offset = {current}
          total = {120}
          limit = {20}
          onClick ={ (currentNumber: number) => changeCurrentNumber(currentNumber)}
        />
      </div>
    </div>
  )
}

export default Categories;