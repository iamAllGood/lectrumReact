import React, {Component} from 'react';
import KanbanBoard from './KanbanBoard';

let cardslist = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        status: "in-progress",
        task: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        status: "todo",
        task: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            },
        ]
    }
];