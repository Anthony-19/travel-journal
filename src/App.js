import React from "react";
import Header from "./components/Header";
import data from "./data";
import Card from "./components/Card";
import "./style.css"
export default function App(){
    const dataElements = data.map(item => 
    <Card key={item.id}
          items={item}
        />)
        console.log(dataElements)
    return(
        <div className="container">
            <Header />
            <section className="card--list">
            {dataElements}
            </section>
            
        </div>
        
    )
}