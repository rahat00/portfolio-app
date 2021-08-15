import React, { Component } from 'react'

export default class SectionTwo extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: "",
            gander: "female",
            added: "",
        }
    }
    inputHandler = (e) => {
        let names = e.target.name
        let values = e.target.value
        this.setState({
            [names]: [values]
        })
        // if (e.target.name === "name") {
        //     settime({
        //         name: e.target.value
        //     })
        // } else if (e.target.name === "age") {
        //     settime({
        //         age: e.target.value
        //     })
        // } else if (e.target.name === "gander") {
        //     settime({
        //         gander: e.target.value
        //     })
        // } else {
        //     console.log("nothing")
        // }

    }
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            added: this.state,
        })
    }

    render() {

        const { name, age, gander } = this.state;

        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <h1>this is Dynamic form</h1>
                    <label>Name :</label>
                     <input type="text" value={name} onChange={this.inputHandler} name="name" required /> <br /> <br />
                    <label>age : </label>
                     <input type="number" value={age} onChange={this.inputHandler} name="age" required/><br /> <br />
                    <label>gander : </label>
                    <select value={gander} onChange={this.inputHandler} name="gander" >
                        <option>male</option>
                        <option>female</option>
                    </select>
                    <br />
                    <input type="submit" value="submit" />
                </form>

                <h3>your name is : {this.state.added.name}  </h3>
                <h3>your age is : {this.state.added.age} </h3>
                <h3>your gender is : {this.state.added.gander} </h3>

            </div>
        )
    }
}
