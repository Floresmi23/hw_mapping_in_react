import React from "react";
import style from "../style/Style";

function Post(props){

    const [likes,addLikes]=React.useState(50);

    const [color,setColor]=React.useState("yellow")

    const setLikes=()=>{
        addLikes(likes+10)
    }

    const changeColor=()=>{
        if (likes>70){
            setColor("blue")
        }else{
            setColor("green")
        }

    }

    let style={
        height: "500px",
        width: "200px",
        backgroundColor: color
    }

    return(
        //USE SPAN
        <span>
            <div style={style} onClick={changeColor}>
                <h2>{props.data.name}</h2>
                <h3>{props.data.car}</h3>
                <h3>{props.data.age}</h3>
                <h3>{props.data.Special}</h3>
            </div>
            <div style={style} onClick={changeColor}>
                <h2>{props.data.name2}</h2>
                <h3>{props.data.car2}</h3>
                <h3>{props.data.age2}</h3>
                <h3>{props.data.Special2}</h3>
            </div>
            <div style={style} onClick={changeColor}>
                <h2>{props.data.name3}</h2>
                <h3>{props.data.car3}</h3>
                <h3>{props.data.age3}</h3>
                <h3>{props.data.Special3}</h3>
            </div>
            <div style={style} onClick={changeColor}>
                <h2>{props.data.name4}</h2>
                <h3>{props.data.car4}</h3>
                <h3>{props.data.age4}</h3>
                <h3>{props.data.Special4}</h3>
            </div>
            <div style={style} onClick={changeColor}>
                <h2>{props.data.name5}</h2>
                <h3>{props.data.car5}</h3>
                <h3>{props.data.age5}</h3>
                <h3>{props.data.Special5}</h3>
            </div>
            <div style={style} onClick={changeColor}>
                <h2>{props.data.name6}</h2>
                <h3>{props.data.car6}</h3>
                <h3>{props.data.age6}</h3>
                <h3>{props.data.Special6}</h3>
            </div>

        </span>

    )
}


export default Post;