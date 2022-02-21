import styles from '../styles/PizzaList.module.css';
import React from 'react'
import PizzaCard from './PizzaCard';
function PizzaList({pizzaList}) {
 // console.log(pizzaList);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat mollitia eos nihil doloribus, veniam quam architecto, voluptate saepe maxime porro dolores fuga alias inventore necessitatibus, accusamus sit dolor! Ex, facilis.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((e,i)=>
        <PizzaCard  key={i}  pizza={e}/>
        )}
        
      </div>
        
        </div>
  )
}

export default PizzaList