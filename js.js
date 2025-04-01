import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const somar = (a, b) => a+ b;
const subitrair = (a,b) => a-b;
const multiplicar = (a,b) => a*b;
const dividir = (a,b) => a/b;



function calculadora(){
    console.log('Selecione a operação:\n');
    console.log('1-Adição');
    console.log('2-Subtração');
    console.log('3-Multiplicação');
    console.log('4-Divisão');

    rl.question('Digite o numero da operação desejada(1/2/3/4/): ', (escolha) => {

        if(['1','2','3', '4'].includes(escolha)){
        rl.question('Digite o primeiro valor:', (a) => {
            rl.question('Digite o segundo valor: ', (b) => {
                a = parseFloat(a);
                b = parseFloat(b);
                let resultado;

                switch(escolha){
                    case '1': resultado = somar(a,b);
                    console.log(`${a} + ${b} = ${resultado}`);
                    break;
                    case '2': resultado = subitrair(a,b);
                    console.log(`${a} - ${b} = ${resultado}`);
                    break;
                    case '3': resultado = multiplicar(a,b);
                    console.log(`${a} * ${b} = ${resultado}`);
                    break;
                    case '4': resultado = dividir(a,b);
                    console.log(`${a} / ${b} = ${resultado}`);
                    break;
                    default: console.log('digete um numero valido');break;
                }

                rl.close()
            })
        })
    }else{
        console.log('Operação invalida');
        rl.close()
    }
    
    
    })
}

calculadora()
