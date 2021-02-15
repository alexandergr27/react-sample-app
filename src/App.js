import React, {Component} from 'react';
import './App.css';
import products from './data/data.json';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import Post from './components/Post';
import { BrowserRouter, Route, Link } from 'react-router-dom';
class App extends Component  {

  state = {
    products: products
  }

  addProduct = (code, description, price) => {
    const newProduct = {
      code: code,
      description: description,
      price: price
    }
    this.setState({
      products: [...this.state.products, newProduct]
    })
  }

  deleteProduct = (code) => {
    const afterDelete = this.state.products.filter(product => product.code != code);
    this.setState({products: afterDelete});
  }

  render() {
    return <div>
      <BrowserRouter>
        <Link className="btn btn-secondary text-white btn-spacing" to="/">Home</Link>
        <Link className="btn btn-secondary text-white btn-spacing" to="/post">post</Link>
        <Route exact path="/" render={()=> {
            return <div>
            <ProductForm add={this.addProduct} />
            <Products prod={this.state.products} delete={this.deleteProduct} />
            </div>
          
          }}>

          </Route>
          <Route path="/post" component={Post}>

          </Route>
        </BrowserRouter>
        
          
        
      </div>
 }
}
export default App;
