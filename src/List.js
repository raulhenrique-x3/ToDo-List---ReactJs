import React from 'react'
import ListItem from './ListItem';

function List(props){


    return(
    <section>
        <ul>
            {props.items.map((item) =>(<ListItem item={item} key={item.id} onDone={props.onDone} onItemDeleted={props.onItemDeleted}></ListItem>))}
        </ul>
    </section>)
}

export default List