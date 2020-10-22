export default function ordenar (listVendas, listClientes) {
    let vendas2018 =  []
    listVendas.forEach(venda => {
        if(new Date(venda.data) < new Date('01-01-2019') && new Date(venda.data) > new Date('01-01-2018')){
            vendas2018.push(venda)
        }
    });
    vendas2018.sort(function (a, b) {
        if (a.valorTotal < b.valorTotal) {
            return 1;
        }
        if (a.valorTotal > b.valorTotal) {
            return -1;
        }
        return 0;
    });
    console.log(vendas2018)   
}