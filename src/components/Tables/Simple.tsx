import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  header: string[];
  data: object[];
}

const SimpleTable: React.FC<Props> = props => (
  <div className='simple-table'>
    <table className='simple'>
      <thead>
        <tr>
          {
            props.header.map((item,index) =>(<th key={index}>{item}</th> ))
          }
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((row: any, index) =>(
            <tr key={index}>
              {
                props.header.map((item, index) => (
                  <td key={index}>{row[item] || ''}</td>
                ))
              
              }
              { 
                row['botãoDetalhes'] && (
                  <td>
                    <Link to={row['botãoDetalhes']}>
                      <button className='button-danger'>
                        DETALHES
                      </button>
                  </Link>
                  </td>
                ) 
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

export default SimpleTable;