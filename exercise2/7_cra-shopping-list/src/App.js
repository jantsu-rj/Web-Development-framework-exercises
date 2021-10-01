import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);


    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

    this.addSomeCarrots = this.addSomeCarrots.bind(this);
    this.addSomeStrawberries = this.addSomeStrawberries.bind(this);
    this.addSomeYogurt = this.addSomeYogurt.bind(this);
    this.addSomeBeer = this.addSomeBeer.bind(this);

  }

  findObjectById(id) {
    let result = this.state.items.find(x => { return x.id === id});
    console.log(result);
    return result;
  }

  addSomeCarrots =() => {
    if (this.findObjectById(5) === undefined) {
    this.setState({ items: [...this.state.items, {id: 5, value: "Carrots", qty: 5}]});
    } else {
      this.findObjectById(5).qty += 5;
      this.forceUpdate();
    }
  }
  addSomeStrawberries =() => {
    if (this.findObjectById(6) === undefined) {
    this.setState({ items: [...this.state.items, {id: 6, value: "Strawberries", qty: 5}]});
    } else {
      this.findObjectById(6).qty += 5;
      this.forceUpdate();
    }
  }
  addSomeYogurt =() => {
    if (this.findObjectById(7) === undefined) {
    this.setState({ items: [...this.state.items, {id: 7, value: "Yogurt", qty: 5}]});
    } else {
      this.findObjectById(7).qty += 5;
      this.forceUpdate();
    }
  }
  addSomeBeer =() => {
    if (this.findObjectById(8) === undefined) {
    this.setState({ items: [...this.state.items, {id: 8, value: "Beer", qty: 5}]});
    } else {
      this.findObjectById(8).qty += 5;
      this.forceUpdate();
    }
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={() =>  this.addSomeCarrots() }>Carrots</button>
      <button onClick={() =>  this.addSomeStrawberries() }>Strawberries</button>
      <button onClick={() =>  this.addSomeYogurt() }>Yogurt</button>
      <button onClick={() =>  this.addSomeBeer() }>Beer</button>
    </div>
  }
}

export default App;