import styles from './Description.module.css';
import React from 'react';


export default function RecipeAuthor() {
    let authorLink = "https://www.recipetineats.com/baked-mac-and-cheese/"
    let authorPhoto = "https://www.recipetineats.com/wp-content/uploads/2018/12/nagi.jpg?resize=150,150"
    let authorName = "Nagi"

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Picture of Nagi" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>RecipeTin Eats</a> 
           </div>
        </div>
     )
}

class RecipeDescription extends React.Component {
   render() {
      return(
      <div> 
      <div>
         <h1>Baked Mac and Cheese</h1>
         <p>Like Mac? Tolerate Cheese? Here's how to bake it.</p>
      </div>
      <RecipeAuthor />
   </div>
      )
      
   }
}
   export { RecipeDescription, RecipeAuthor }
