    // // 1
    // let info = {
    //     personagem: 'Margarida',
    //     origem: 'Pato Donald',
    //     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    // };
    // // console.log(`Bem vinda, ${info.personagem}`);

    // // 2
    // info['recorrente'] = 'Sim';
    // // console.log(info)

    // // 3
        // for (let values in info){
        //     console.log(values);
        // };

    // 4
    // for (let indice in info){
    //     console.log(info[indice]);
    // }

    // 5
    // let info2 = {
    //     personagem: 'Tio Patinhas',
    //     origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics #178',
    //     nota: 'O ultimo MacPatinhas',
    //     recorrente: 'sim',
    // };
    //     for (let indice in info){
    //         console.log(`${info[indice]} e ${info2[indice]}`);
    //     }

    // 6
    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
        ],
      };
    //   console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}'`); 

    // 7
      leitor.livrosFavoritos.push(
        {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
        }
      )
    //   console.log(leitor.livrosFavoritos);

    // 8
    let quantidade = Math.floor(Math.random() *10)+1;
    // console.log(`${leitor.nome} tem ${quantidade} livros favoritos`)
    console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`)