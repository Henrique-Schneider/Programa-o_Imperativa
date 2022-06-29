
console.log(`
  Bem-vindo ao Menu de Opções: 
  1 - Pipoca     | Tempo Padrão: 10s
  2 - Macarrão   | Tempo Padrão: 8s
  3 - Carne      | Tempo Padrão: 15s
  4 - Feijão     | Tempo Padrão: 12s
  5 - Brigadeiro | Tempo Padrão: 8s

  `);


const menu_Opcoes = {
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



function micro_Ondas(opcao_Menu,tempo) {
    const opcoes = menu_Opcoes[opcao_Menu];
    

    if (!opcoes) {
        return console.log('Opção inexistente');
    }

    let mensagem;
    const tempoPreparo = opcoes.tempo;
    
    

    if (tempo < tempoPreparo) {
        mensagem = 'Tempo insuficiente!!!';
    } else if (tempo >= tempoPreparo * 2 && tempo < tempoPreparo * 3) {
        mensagem = 'A comida queimou!!!';
    } else if (tempo >= tempoPreparo * 3) {
        mensagem = 'Kabummm!!!';
    } else {
        mensagem = 'Prato pronto, bom apeite!!!';
    }
    

    return console.log(menu_Opcoes[opcao_Menu].nome + ':',mensagem);
}

micro_Ondas(2,);
