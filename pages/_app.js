import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  
//Esto se crea para que el código se ejecute en la parte del cliente y no en la del servidor // utilizamos JSON.parse para convertir de string a Array
  const shoppingLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('shoppingCar')) ?? [] : []
  const [shoppingCar, setShoppingCar] = useState(shoppingLS);

  useEffect(()=> {
    //como localStorage solo puede almacenar strings, le pasamos el carrito para que lo convierta
    localStorage.setItem('shoppingCar', JSON.stringify(shoppingCar))
    }, [shoppingCar])
  
  const addShoppingCar = guitar => {
      // Comprobar si la guitarra ya esta en el carrito...
      if(shoppingCar.some( guitarState =>  guitarState.id === guitar.id )) {
          // Iterar para actualizar la cantidad
          const shoppingCarUpdate = shoppingCar.map( guitarState => {
              if( guitarState.id === guitar.id ) {
                  guitarState.amount = guitar.amount;
              } 
              return guitarState;
          });
          // Se asigna al array
          setShoppingCar([...shoppingCarUpdate]);
          localStorage.setItem('shoppingCar', JSON.stringify( shoppingCar ));
      } else {
          // En caso de que el articulo no exista, es nuevo y se agrega
          setShoppingCar([...shoppingCar, guitar]);
          localStorage.setItem('shoppingCar', JSON.stringify( shoppingCar ));
      }
}

  const deleteProduct = id => {
      const shoppingCarUpdate = shoppingCar.filter( product => product.id != id)
      setShoppingCar(shoppingCarUpdate)
      window.localStorage.setItem('shoppingCar', JSON.stringify( shoppingCar ));
  }

  const updateAmount = guitar => {
    const updateAmount = shoppingCar.map( guitarState => {
      if(guitarState.id === guitar.id ) {
        guitarState.amount = parseInt( guitar.amount )
      } 
      return guitarState
    })
    setShoppingCar(updateAmount)
    window.localStorage.setItem('shoppingCar', JSON.stringify( shoppingCar ));
  }
  return (

    <Component
      {...pageProps}
      shoppingCar={shoppingCar}
      addShoppingCar={addShoppingCar}
      deleteProduct={deleteProduct}
      updateAmount={updateAmount}
    />
  );
}

export default MyApp;
