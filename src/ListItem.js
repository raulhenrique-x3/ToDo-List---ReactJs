import React from 'react'
import {FaWindowClose, FaCheck, FaCheckCircle} from 'react-icons/fa';
import { IconContext } from "react-icons";

    function DoneItem(props){

        if(props.done){
            return (<FaCheckCircle alt='done' color='#76FF45'/>)
        }
        else{
            return (<FaCheck></FaCheck>)
        }
    }

    function ListItem(props){

        return(
                <li className={props.item.done?"check":""}>
                    {props.item.text}
                        <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div className="icons">
                        <span className='done' onClick={()=>{props.onDone(props.item)}}>
                            <DoneItem done={props.item.done}></DoneItem>
                        </span>
                        <FaWindowClose onClick={()=>{props.onItemDeleted(props.item)}} color='#FF0000'/>
                    </div>
                    </IconContext.Provider>
                </li>)
    }

    export default ListItem;