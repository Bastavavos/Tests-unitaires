export function addElem(array, oneTask) {
    array.push(oneTask);
    return array;
}

export function modifyElem(array, changeTask, index) {
    array[index].label = changeTask
}

export function deleteElem(array, index) {
    array.splice(index, 1)
}

export function modifyStatut(array, newStatut, index) {
    array[index].done = newStatut
}

/* c8 ignore next 3 */
function toto(){
    console.log("bastos jtm")
}