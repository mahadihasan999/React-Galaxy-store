
import './App.css';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';
function App() {
  return (
    <div className="App">
      <HeaderText></HeaderText>
      <LoadUser></LoadUser>
    </div>
  );

}

function HeaderText() {
  return (
    <header>
      <div className="head">
        <h1>Galaxy Store</h1>
        <div>
          <input type="text" placeholder="Search you want" />
          <button>Search</button>

        </div>
      </div>
    </header>
  )
}

function LoadUser() {
  const [products, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(data => setUsers(data.slice(0, 9)))

  }, [])

  return (
    <div className="display-output">

      {
        products.map(product => <Products image={product.image} price={product.price} category={product.category} title={product.title.slice(0, 18)}
          completed={product.completed}></Products>)
      }
    </div>
  )
}

function Products(props) {
  return (
    <div className="single-product">
      <div>
        <img src={props.image} alt="" width="150" height="150" />
      </div>
      <h2>{props.title} </h2>
      <h3>Price: {props.price} </h3>
      <p>Catagory: {props.category}</p>
      <button>Add to cart</button>



    </div>
  )

}

// function MyComponent(props) {
//   const [points, setPoints] = useState(0);


//   const handleAddPoint = () => {
//     const newPoints = points + 1;
//     setPoints(newPoints)
//   }
//   const handleAddPointMines = () => {
//     if (points > 0) {
//       const newPoints = points - 1;
//       setPoints(newPoints)
//     }

//   }
//   return (
//     <div className="amari">
//       <h1>Player Name: {props.name}</h1>
//       <h1>Age: {props.Age}</h1>
//       <h3>Add Point: {points}</h3>
//       <button onClick={handleAddPoint}>Add point</button>
//       <button onClick={handleAddPointMines}>Mines point</button>
//     </div>
//   )


// }

export default App;