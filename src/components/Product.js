import React, {Component} from 'react';
import './Product.css';

class Product extends Component {
    render() {
        const {prod} = this.props;
        return <div className="container bg-secondary text-white mb-2">
            {prod.code} - 
            {prod.description} - 
            {prod.price}
            <button className="btn btn-danger" onClick={this.props.delete.bind(this, prod.code)}>x</button>
        </div>
    }
}

export default Product;