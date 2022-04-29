Me deparei com o seguinte erro no console ao desenvolver o ToDo 
**"Uncaught TypeError: props.items.map is not a function"**.
    Pesquisando um pouco mais a fundo sobre o .map() descobri que ele aguarda um array com informações e eu não me atentei e acabei passando:
        *setItems(...items, item)*
        ao invés de
        *setItems([...items, item])*

    O problema foi solucionado de forma autonoma e o sistema voltou a funcionar normalmente.


**Warning: Encountered two children with the same key**
    Também me deparei com esse problema e com pesquisas descobri que se eu usar outro parametro para a função map essa key não será duplicada, portanto o erro é solucionado! Porém, ao decorrer da aula vi que ao criarmos um objeto com class temos acesso ao "static", isso permitiu que os id's dos items fossem ordenados de 0 ao número de items no ToDo ou seja, tornando o uso do index no map "*.map((element, index) => {}*" desnecessário.



**PROBLEMA COM O ToDo (SOLUCIONADO)**

Encontrei um problema na tentativa de marcar uma tarefa como feita e irei relatar:
    Não estou usando imagens para os icones que aparecem junto com a tarefa pois faço as importações direto do React Icons ou seja, os arquivos não vem como linhas "HTML" para estilização comum. 

    O que eu quero?
        Ao clicar no icone de feito quero fazer com que ele fique verde indicando que a tarefa foi concluída.
    
    Como posso solucionar esse problema?
        1. Posso usar uma imagem em PNG comum e passar as referências segundo a vídeo aula;
        2. Posso importar outro SVG do React Icons e tentar fazer Js inline no mesmo;

        Encontrei a solução desse problema da seguinte maneira:
            Eu precisei de 3 items diferentes para o processo!
            As duas imagens SVG exportadas do ReactIcons e um span para receber o evento "onClick={}".
            Ao clicar no <span> faz com que a função onDone seja executada no ToDo e essa função
            é responsável por fazer a verificação do estado dos items e então eu fiz uma verificação no objeto DoneItem passando ele dentro do <span> e fazendo com que DoneItem, por meio da verificação, veja se a tarefa foi feita. Se a tarefa foi feita ele faz uma simples troca de SVG por meio das condicionais IF e ELSE.


