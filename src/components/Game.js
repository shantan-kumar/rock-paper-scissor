//import React, {Component} from "react";
import { use, useState } from 'react';
import './Game.css';

const Game = ()=>{

        const [playerval, setplayerval] = useState(0)
        const [computerval, setcomputerval] = useState(0)
        const [playerScore, setplayerScore] = useState(null)
        const [compScore, setcompScore] = useState(null)
    
    const logic = (playerval,computerval)=>{
        if (playerval===computerval){
            return 0;
        }
        else if ((playerval==="Rock" && computerval==="Scissors") || (playerval==="Paper" && computerval==="Rock") || (playerval==="Scissors" && computerval==="Paper")) {
            return 1;
        }
        else {
            return -1;
        }
    }
    const decision = (playerChoice)=>{
        const choices=["Rock", "Paper", "Scissors"];
        const compchoice=choices[Math.floor(Math.random()*choices.length)];
        const val=logic(playerChoice,compchoice);
        if (val===1){
            console.log("Hello")
            setplayerScore(playerScore+1);
            setplayerval(playerChoice);
            setcomputerval(compchoice);
        }
        else if(val===-1){
            console.log("Hello")
            setcompScore(compScore+1);
            setcomputerval(compchoice);
            setplayerval(playerChoice);
        }
        else{
            console.log("Hello")
            setplayerval(playerChoice);
            setcomputerval(compchoice);
        }
    }
        return(
            <div className="container">
                <h1>
                    Welcome to Rock-Paper-Scissors Game
                </h1>
                <div>
                    <button onClick={()=>decision("Rock")}>
                        Rock
                    </button>
                    <button onClick={()=>decision("Paper")}>
                         Paper
                    </button>
                    <button onClick={()=>decision("Scissors")}>
                         Scissors
                    </button>
                </div>
                <div className="content">
                    <p>Your choice: {playerval}</p>
                    <p>Computer's choice: {computerval}</p>
                    <p>Your Score: {playerScore}</p>
                    <p>Computer Score: {compScore}</p>
                </div>
            </div>
        )
    }


export default Game;