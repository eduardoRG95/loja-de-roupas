import React, { useEffect, useState } from 'react';

import apiClientes from '../services/api-clientes';
import apiVendas from '../services/api-vendas';
import menorValor from '../services/serviceOrdenarValor';
import maiorCompra2019 from '../services/serviceOrdenar2019';
import maisCompraram2018 from '../services/serviceOrdenar2018';

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
        var teste = menorValor(listVendas, listClientes);
        
    }
    
    function ordenar2019() {
        var teste = maiorCompra2019(listVendas, listClientes);
    }
    
    function ordenar2018() {
        var teste = maisCompraram2018(listVendas, listClientes);        
    }

    return (
        <div>{

        }
            {listClientes.length && listVendas.length > 0 &&
                (<button onClick={ordenarMenorValor}> Ordenar Menor Compra </button>)
            }
            <br></br>
            <br></br>
            <br></br>
            {listClientes.length && listVendas.length > 0 &&
                (<button onClick={ordenar2019}> 2019 </button>)
            }
            <br></br>
            <br></br>
            <br></br>
            {listClientes.length && listVendas.length > 0 &&
                (<button onClick={ordenar2018}> 2018 </button>)
            }
        </div>
    )
}