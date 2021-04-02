import React from 'react';
import Title from '../../components/Text/Title';
import { TextData } from '../../components/Text/Data';
import ButtonSimple from '../../components/Buttons/Simple';
import SimpleTable from '../../components/Tables/Simple';

const PurchaseDetails: React.FC = () => {
  const data = [
    {
      Product:'Produto 1',
      UnitValue: 'R$ 10,00',
      amount:'2',
      TotalValue: 'R$ 20,00',
    },
    {
      Product:'Produto 2',
      UnitValue: 'R$ 13,50',
      amount:'2',
      TotalValue: 'R$ 13,50',
    }
  ]
  return(
    <div className='container-purchase-details'>
      <div>
        <Title type='h2' title='pedido - cliente 1 - 04/03/2021'/>
        <ButtonSimple 
          type='danger'
          label='Cancelar Pedido'
          onClick={() => alert('Cancelado...!')}
        />
      </div>
      <div>
        <Title type='h4' title='Dados do Cliente'/>
        <TextData parameter='Nome' value='Cliente 1'/>
        <TextData parameter='CPF' value='123.456.789-25'/>
        <TextData parameter='Telefone' value='11 96968-7879'/>
        <TextData parameter='Data de Nascimento' value='10/04/1990'/>
      </div>
      <div>
        <Title type='h4' title='Dados de Entrega'/>
        <TextData parameter='Endereço' value='Rua teste, 123'/>
        <TextData parameter='Bairro' value='Centro'/>
        <TextData parameter='Cidade' value='São Paulo'/>
        <TextData parameter='Estado' value='SP'/>
        <TextData parameter='CEP' value='123456-789'/>
      </div>
      <div>
        <Title type='h4' title='Dados de Pagamento'/>
        <TextData parameter='Taxa de Entrega' value='R$ 15,50 (PAC)'/>
        <TextData parameter='Valor dp Pedido' value='R$ 33,50'/>
        <TextData parameter='Valor Total' value='R$ 49,00'/>
        <TextData parameter='Forma de Pagamento' value='Boleto'/>
      </div>

      <div>
        <Title type='h4' title='Dados do Carrinho'/>
        <SimpleTable 
          header={['Produto', 'Preço Unitário', 'Quantidade', 'Preço Total']}
          data={data}
        />
      </div>
    </div>
  );
}

export default PurchaseDetails;