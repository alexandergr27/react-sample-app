import React, {Component} from 'react';

class ProductForm extends Component {
    state = {
        code: '',
        description: '',
        price: ''
    }
    onSubmit = e => {
        this.props.add(this.state.code, this.state.description, this.state.price);
        e.preventDefault();
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
       
        return (
            <div className="container"> 
                <h3 className="text-center mb-4">Agrega un nuevo producto</h3>
                <div className="col-md-6">
                <form onSubmit={this.onSubmit} >
                    <input className="form-control" type="text" name="code" onChange={this.onChange} value={this.state.code} placeholder="Código"/><br/>
                    <input className="form-control" type="text" name="description" onChange={this.onChange} value={this.state.description} placeholder="Descripción"/><br/>
                    <input className="form-control" type="text" name="price" onChange={this.onChange} value={this.state.price} placeholder="Precio"/><br/>
                    <button className="btn btn-success mb-4">Agregar</button>
                </form>
                </div>
               
            </div>
            
        );
    }

}

export default ProductForm;