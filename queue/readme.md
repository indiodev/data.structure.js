# Queue (Filas)

- Queue segue os princípios **FIFO**
- O primeiro item a entrar é o primeiro a sair
- O primeiro a chegar é o primeiro a ser servido
- Possui items ordenados
- A inserção sempre é feito no final (cauda/tail) da Fila
- A remoção é feita no inicio da fila
- Deques (Filas de duas pontas ou Filas duplamente terminadas): Abrange conceitos de Stack e Queue

### Métodos da Queue

- `enqueue(element)`: adiciona um novo elemento (ou vários elementos) no final da Queue.
- `dequeue()`: remove o primeiro elemento da Queue
- `peek()`: devolve o primeiro elemento da Queque. Não remove o elemento, apenas o devolve como informação.
- `isEmpty()`: devolve `true` se a Queue não contiver nenhum elemento e `false` se o tamanho da Queue for maior que zero.
- `size()`: devolve o número de elementos contidos na Queue.
