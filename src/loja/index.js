import React, { useEffect, useState } from 'react';

import apiClientes from '../services/api-clientes';
import apiVendas from '../services/api-vendas';

export default function LojaDeRoupas() {

    const [listClientes, setListClientes] = useState([]);
    const [listVendas, setListVendas] = useState([]);


    const [clientesCompraramMenos, setCompraramMenos] = useState([]);
    const [ClienteMaiorCompraUnica, setMaiorCompraUnica] = useState([]);
    const [ClientesMaisCompraram, setClientesMaisCompraram] = useState([]);
    const [SujestaoCliente, setSujestaoCliente] = useState([]);



    /**
     * 1. Liste os clientes ordenados pelo menor valor total em compras.
        2. Mostre o cliente com maior compra única neste ano (2019).
        3. Liste os clientes que mais realizaram compras no ano passado (2018).
        4. Recomende uma peça de roupa para um determinado cliente a partir do histórico de
        compras.

     */


    useEffect(() => {
        apiClientes.get().then(response => {
            setListClientes(response.data)
        })
        apiVendas.get().then(response => {
            setListVendas(response.data)
        })

    }, []);

    function ordenarMenorValor() {
        let clientesCompraramMenos = []
        listVendas.sort(function (a, b) {
            if (a.valorTotal > b.valorTotal) {
                return 1;
            }
            if (a.valorTotal < b.valorTotal) {
                return -1;
            }
            return 0;
        });

        listVendas.forEach(venda => {
            var cliente = listClientes.find(cliente => cliente.cpf == venda.cliente);
            clientesCompraramMenos.push(cliente)
        });
    }

    function ordenarMenorValor() {
        let vendas2019 =  []
        listVendas.forEach(venda => {
            if(new Date(venda.data) > new Date('01-01-2019')){
                vendas2019.push(venda)
            }
        });
        console.log(vendas2019)
       
   
       
    }



    return (
        <div>{

        }
            {listClientes.length && listVendas.length > 0 &&
                (<button onClick={ordenarMenorValor}> Ordenar Maior Compra</button>)
            }
            <br></br>
            <br></br>
            <br></br>
            {listClientes.length && listVendas.length > 0 &&
                (<button onClick={ordenarMenorValor}> Cliente maior compra unica</button>)
            }
        </div>
    )
}