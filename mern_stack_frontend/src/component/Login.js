import React, { Component } from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nom: "",
            prenom:"",
            email:"",
            password:""
        };
        
    }

    fct1() {
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
        
    }
    
    fct2() {
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
        
    }

    signIn(){

        const user = {
            email  : this.state.email,
            motDePasse :this.state.password,
            dateNaissance :"3-3-1999",
            nom :this.state.nom,
            prenom :this.state.prenom
        }

        axios.post('http://localhost:4000/utilisateur/ajouter',user )
        .then(res => console.log(res.data));

        console.log(user)
    }

    connect(){
        console.log(this.state.nom)
    }


    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;

        this.setState({[nam]: val});
    }
    render() {
        return (  
            <div className="wrapper">
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <div className="LoginForm" >
                        <h1>Creation compte</h1>
                        <input  
                            onChange={(evt)=>this.myChangeHandler(evt)}
                            name="nom" 
                            type="text" 
                            placeholder="Nom" 
                            required/>
                        <input 
                            onChange ={(evt) => this.myChangeHandler(evt)}
                            name="prenom"
                            type="text" 
                            placeholder="Prenom" 
                            required/>
                        <input 
                            onChange ={(evt) => this.myChangeHandler(evt)}
                            name="email"
                            type="email" 
                            placeholder="Email" 
                            required/>
                        <input 
                            onChange ={(evt) => this.myChangeHandler(evt)}
                            type="password"
                            name="password"
                            placeholder="Password" 
                            required/>
                        <button 
                        type="submit"
                        onClick = {()=> this.signIn() }  
                        >foo</button>
                    </div>
                    
                </div>
                <div className="form-container sign-in-container">
                    <form className="LoginForm" action="#">
                        <h1>Sign in</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Nssit password?</a>
                        <button onClick={this.connect} >klikiiii</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            
                            <h1>holllaaa !</h1>
                            <p>ya wedi 3andek compte , nta berk nssit</p>
                            <button className="ghost" id="signIn" onClick={this.fct2}>Sign In</button>
                            
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hollaaa, amigosss!</h1>
                            <p>ma3andekch compte ? Dir whd, yaw batellll </p>
                            <button className="ghost" id="signUp" onClick={this.fct1}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }

    
}

export default Login
