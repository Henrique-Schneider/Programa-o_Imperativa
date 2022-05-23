const menu = {
    1: {
        nome: 'Pipoca',
        tempo: 10
    },
    2: {
        nome: 'Macarrão',
        tempo: 8
    },
    3: {
        nome: 'Carne',
        tempo: 15
    },
    4: {
        nome: 'Feijão',
        tempo: 12
    },
    5: {
        nome: 'Brigadeiro',
        tempo: 8
    },
    
};



function micro_Ondas(numero_Opcao,tempo) {
    const opcoes = menu[numero_Opcao];
    

    if (!opcoes) {
        return console.log('Prato inexistente');
    }

    let mensagem;
    const tempoPreparo = opcoes.tempo;
    
    

    if (tempo < tempoPreparo) {
        mensagem = 'Tempo insuficiente!!!';
    } else if (tempo > tempoPreparo * 2 && tempo <= tempoPreparo * 3) {
        mensagem = 'A comida queimou!!!';
    } else if (tempo > tempoPreparo * 3) {
        mensagem = 'Kabummm!!!';
    } else {
        mensagem = 'Prato pronto, bom apeite!!!';
    }
    

    return console.log(menu[numero_Opcao].nome + ':',mensagem);
}


micro_Ondas(3,31);
