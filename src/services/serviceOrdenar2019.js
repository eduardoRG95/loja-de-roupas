export default function ordenar (listVendas, listClientes) {
    let vendas2019 = []
        listVendas.forEach(venda => {
            if(new Date(venda.data) > new Date('01-01-2019')){
                vendas2019.push(venda)
            }
        });
        vendas2019.sort(function (a, b) {
            if (a.valorTotal < b.valorTotal) {
                return 1;
            }
            if (a.valorTotal > b.valorTotal) {
                return -1;
            }
            return 0;
        });
    return listClientes.find(cliente => cliente.cpf == vendas2019.shift().cliente);
}