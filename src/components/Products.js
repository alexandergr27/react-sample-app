import React, {Component} from 'react';
import Product from './Product';
class Products extends Component {
    render() {
        return this.props.prod.map(p => <Product prod={p} key={p.code} delete={this.props.delete} />) 
    }
}

export default Products;