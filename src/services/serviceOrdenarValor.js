 export default function ordenar (listVendas, listClientes) {
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
    return clientesCompraramMenos;
}