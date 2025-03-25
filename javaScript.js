const selectElement = document.getElementById("select_porcentagem");

function Calcular (){
    let preco = document.getElementById('preco_cumbustível');
    let valor = Number(preco.value);
    let select = document.getElementById('select_porcentagem');
    let valores = select.options [select.selectedIndex];
    let porcentagem = valores.value;
 
    let calculogasolina = (valor*porcentagem); 
    let calculoetanol = (1/(valor*porcentagem) * 100);
 
   // const totalgasolina = calculogasolina.toFixed(2);
   // const totaletanol = calculoetanol.toFixed(2);
    const calcgasolina = calculogasolina.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const calcetanol = calculoetanol.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
   
    let resultado = document.getElementById('resultado');
 
    if(document.getElementById('Gasolina').checked){
      resultado.innerHTML = `Abasteça com ETANOL se seu preço for igual ou menor a: <br><br>${calcgasolina}`;
    }
 
    else if (document.getElementById('Etanol').checked){
        resultado.innerHTML = `Abasteça com GASOLINA se seu preço for igual ou menor a: <br><br>${calcetanol}`;
    }
 
    else{
        resultado.innerHTML = "Nenhum valor encontrado";
    }
}