import React, { useState } from 'react';
import Search from '../../components/Inputs/Search';
import PaginationSimple from '../../components/Pagination/Simple';
import SimpleTable from '../../components/Tables/Simple';
import Title from '../../components/Text/Title';


const ProductList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [current, setCurrent] = useState(0);
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
  const changeCurrentNumber = (current: number )=> setCurrent(current);
  const data: Data[] = [
    {
      'Produto': 'Mouse',
      'Estoque': 20,
      'Disponibilidade': 'sim',
      'botãoDetalhes': '/category/AIDGDWIQWLDGW'
    },
    {
      'Produto': 'Mouse 1',
      'Estoque': 20,
      'Disponibilidade': 'Não',
      'botãoDetalhes': '/category/grrgbregerv'
    },
    {
      'Produto': 'Mouse 2',
      'Estoque': 20,
      'Disponibilidade': 'sim',
      'botãoDetalhes': '/category/verveswrverw4'
    },
    {
      'Produto': 'Mouse 3',
      'Estoque': 20,
      'Disponibilidade': 'Não',
      'botãoDetalhes': '/category/vewvwer'
    },
    {
      'Produto': 'Mouse 4',
      'Estoque': 20,
      'Disponibilidade': 'Não',
      'botãoDetalhes': '/category/vewwvewr'
    },

  ]
  type Data = {
    'Produto': string;
    'Estoque': number;
    'Disponibilidade': string;
    'botãoDetalhes': string;
  }
  return(
    <div className='ProductList center flex'>
      <div>
        <Title type ='h3' title='Produtos da categoria' />
        <Search
          value ={search}
          placeholder={'Pesquise aqui pelo nome do produto ou descrição'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeSearch(event) }
          onClick={ () => alert('Pesquisando...!')}
        />
        <div className='flex center' >
          <SimpleTable
            header = { ['Produto', 'Estoque', 'Disponibilidade']}
            data = {data}
          />
        </div>
        <PaginationSimple 
          offset = {current}
          total = {120}
          limit = {20}
          onClick ={ (currentNumber: number) => changeCurrentNumber(currentNumber)}
        />
      </div>
    </div>
  );
}

export default ProductList;
