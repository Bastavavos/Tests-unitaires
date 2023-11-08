import {expect, test} from 'vitest'
import {addElem, modifyElem, deleteElem, modifyStatut} from './functions'


test('Ajouter un élément à ma liste', () => {

    let tasks = []
    let oneTask = {
        label: 'task1',
        done: false
    }

    let result = addElem(tasks, oneTask)

    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(oneTask)
})


test('Ajouter un élément à ma liste sans label', () => {

    let tasks = []
    let oneTask = {
        label: undefined,
        done: false
    }

    expect(() => addElem(tasks, oneTask).toThrowError())
})


test('Modifier le label dune tâche', () => {

    let tasks = [{
        label: 'task1',
        done: false
    }]

    let changeTask = "New task"
    modifyElem(tasks, changeTask, 0)

    expect(tasks[0]).toHaveProperty('label', changeTask)
})


test('Modifier le statut dune tâche', () => {

    let tasks = [{
        label: 'task1',
        done: false
    }]

    modifyStatut(tasks, true, 0)

    expect(tasks[0]).toHaveProperty('done', true)
})


test('Supprimer un élément à ma liste', () => {

    let tasks = [{
        label: 'task1',
        done: false
    },
        {
            label: 'task2',
            done: false
        }]

    let myindex = 1

    deleteElem(tasks, myindex)
    expect(tasks).toHaveLength(1)
})