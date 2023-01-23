import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogs = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Marina'},
    {id: 6, name: 'Dima'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-ka?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
]

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount:"11"},
    {id: 2, message: 'It\'s my first post', likesCount:"12"}
]

ReactDOM.render(
    <App  posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);
