# Linked list planning

## Does your program have a user interface? What will it look like? What functionality will the interface have?

- No UI. It will just create a linked list in the main JS file and then run it in node for testing purposes.

## How do you plan to design the application state?

- A linked list class in a module that contains the full linked list. It contains the following NVPs:
  - Head (initially null)
  - Tail (initially null)
  - Length (initially 0)
- It has the following methods:
  - append(value): adds a new node containing value to the end of the list
  - prepend(value): adds a new node containing value to the start of the list
  - size: returns the total number of nodes in the list
  - head: returns the first node in the list
  - tail: returns the last node in the list
  - at(index): returns the node at the given index
  - pop: removes the last element from the list
  - contains(value): returns true if the passed in value is in the list and otherwise returns false.
  - find(value): returns the index of the node containing value, or null if not found.
  - toString: represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null.
  - insertAt(value, index): that inserts a new node with the provided value at the given index.
  - removeAt(index) that removes the node at the given index.
- A node class that instantiates node objects that get added to the linked list. It contains:
  - A value property, which is null by default.
  - A nextNode property, which is null by default.

## How do you plan to organize your project files?

- Index.js file, used to instantiate the linked list and then various nodes. Then, used to test methods.
- Linked-list.js, module that has class declaration for linked list, with all its available methods.
- Node.js, module that has class declaration for linked list nodes.

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- All inputs come manually from testing in index.js file.

## Given your inputs, what are the steps necessary to return the desired output?

- Create node class, import it to linked list module.
- Create linked list class, import it to index.js.
- Write linked list methods to class:
  - Append:
    - Takes value parameter.
    - calls node constructor to create new node with parameter value.
    - If head and tail of linked list are null, set both to new node because they are the same when there is only one node.
    - If list has value, then set tail.next to the new node and update the tail to the new node.
    - Update linked list counter to reflect the updated length of the list.
  - Prepend:
    - Takes value parameter.
    - Calls node constructor to create new node with parameter value.
    - If head and tail of linked list are null, set both to new node because they are the same when there is only one node.
    - If list has value, set the new node's nextNode to current head and update next head to the new node.
    - Update linked list counter to reflect the updated length of the list.
  - Size:
    - Returns counter from linked list object (otherwise would use a while loop to iterate on next value of each node).
  - Head:
    - returns head key from linked list.
  - Tail:
    - returns tail key from linked list.
  - At:
    - takes index parameter and returns the node at the given index.
    - Create current variable that is set to the current head.
    - For loop that runs until the desired index. Each run of the loop sets current to next node. In last run of loop, it returns current.
  - Pop:
    - Creates current variable and set it to current head.
    - Create prior variable and set it to null.
    - While loop that breaks when current is falsy. The loop:
      - Checks whether current.next is null. If so:
        - Sets prior to linked list tail.
        - Sets prior.next to null.
        - Sets current to null to break loop.
      - If not, sets prior variable to current node.
      - Sets current node to prior.next.
  - Contains:
    - Returns true if the passed in value is in the list and otherwise returns false.
    - Takes value parameter.
    - Create current variable and set it to head.
    - While loop that runs while current is true. It:
      - checks whether current.value === value parameter. If so, it returns true.
      - Else, it sets current to current.next.
    - Return false after the while loop.
  - Find:
    - Returns the index of the node containing value, or null if not found.
    - Takes value parameter.
    - Create current variable and set it to head.
    - Create index variable and set it to 0.
    - While loop that runs while current is true. It:
      - checks whether current.value === value parameter. If so, it returns index variable.
      - Else, it sets current to current.next and increments the index variable.
    - Returns null after the while loop.
  - toString:
    - represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null.
    - Initalize string variable.
    - Create current variable and set it to head.
    - If current is null, set string to null.
    - While loop that runs while current is true. It:
      - Checks whether current.next is null. If so sets string to string + "null".
      - Else, it:
        - updates string variable to be string + "( current.value ) -> ".
        - sets current to current.next.
    - Returns string.
  - insertAt:
    - Inserts a new node with the provided value at the given index.
    - Takes value and index parameter.
    - Calls node constructor with value, set to newNode.
    - create current variable and set it to head.
    - create prior variable and leave it undefined.
    - If index param is 0 and length is 0, then set newNode.next to head (null) and set head to newNode. Also set tail to newNode.
    - For loop that runs until i < index parameter. It:
      - Checks whether current.next is null and that i + 1 != index parameter. If so, it returns console logged error that the linked list isn't long enough for the operation.
      - Checks whether i + 1 === index parameter. If so:
        - sets prior.next to newNode.
        - sets newNode.next to current.
        - increments linked list length.
        - If index === linked list length, then also update tail to newNode.
        - Returns console logged message that the new node was succesfully inserted at the node index parameter.
      - Sets prior to current.
      - Sets current to current.next.
  - removeAt:
    - Removes the node at the given index.
    - Takes index parameter.
    - create current variable adn set it to head.
    - create prior variable and leave it undefined.
    - If index param is 0, then set head to head.next. If head is null, then also update tail to null. Decrement linked list length and return console log message about removing the node.
    - For loop that runs until i < index parameter. It:
      - Checks whether current.next is null and that i + 1 != index parameter. If so, it returns console logged error that the linked list isn't long enough for the operation.
      - Checks whether i + 1 === index param. If so:
        - sets prior.next to current.next.
        - sets current to current.next.
        - if index === linked list length - 1, then also updates tail to prior.
        - Returns console logged message that the chosen node was successfully removed.
      - Sets prior to current.
      - Set current to current.next.
