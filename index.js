import { LinkedList } from "./linked-list.js";

//Create the node

let list = new LinkedList();

//"Add" to the list
list.push("Andressa");
list.push("Larissa");
list.push("Mara");
list.push("Jessica");

list.remove(2);

console.log(list);
