import { useState } from 'react';
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    // agregar otra categoria con un button
    const onAddCategory = (newCategory) =>{
        
        if(categories.includes( newCategory )) return;
        // push es solo para cambiar, no para insertar
        setCategories([ newCategory, ...categories]);
            
        // otra forma de hacerlo
        // setCategories( cat => [...cat, 'Naruto'])
    }


  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ event => onAddCategory(event) }
        />

        {/* Listado de Gif */}
        
        <ol>
            {
                categories.map( (category) => ( 
                    <GifGrid key={ category }
                    category={ category } 
                    />                     
                    ))
            }
        </ol>
            


    </>
    
  )
}
