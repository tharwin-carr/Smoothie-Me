import React, { Component } from 'react';
import config from '../config';
import SmoothieContext from '../SmoothieContext';

export default class AddSmoothiePage extends Component {
    static contextType = SmoothieContext;
    constructor() {
        super()
        this.state= {
            title: {
                value: '',
                touched: false
            },
            fruit: {
                value: '',
                touched: false
            },
            vegetables: {
                value: '',
                touched: false
            },
            nutsseeds: {
                value: '',
                touched: false
            },
            liquids: {
                value: '',
                touched: false
            },
            powders: {
                value: '',
                touched: false
            },
            sweetners: {
                value: '',
                touched: false
            },
            other: {
                value: '',
                touched: false
            },
        };
    };

    updateTitle(title) {
        this.setState({title: {value: title, touched: true}})
    }
    updateFruit(fruit) {
       ; this.setState({fruit: {value: fruit, touched: true}})
    }
    updateVegetables(vegetables) {
        this.setState({vegetables: {value: vegetables, touched: true}})
    };
    updateNutsseeds(nutsseeds) {
        this.setState({nutsseeds: {value: nutsseeds, touched: true}})
    }
    updateLiquids(liquids) {
        this.setState({liquids: {value: liquids, touched: true}})
    };
    updatePowders(powders) {
    this.setState({powders: {value: powders, touched: true}})
    };
    updateSweetners(sweetners) {
        this.setState({sweetners: {value: sweetners, touched: true}})
    };
    updateOther(other) {
        this.setState({other: {value: other, touched: true}})
    };

        //makes sure the title isn't blank
    validateTitle() {
        const title = this.state.title.value.trim()
        if (title.length === 0) {
            return '*Title content is required'
        };
    };

    handleSubmit(event) {
        event.preventDefault();
        const newSmoothie = {
            title: event.target['title'].value,
            fruit: event.target['fruit'].value,
            vegetables: event.target['vegetables'].value,
            nutsseeds: event.target['nutsseeds'].value,
            liquids: event.target['liquids'].value,
            powders: event.target['powders'].value,
            sweetners: event.target['sweetners'].value,
            other: event.target['other'].value,
        }
        if (this.validateTitle()) {
            return
        }
        fetch(`${config.API_ENDPOINT}/smoothies`, {
            method: 'POST',
            body: JSON.stringify(newSmoothie),
            headers: {
                'Accept':'application/json',
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then (newSmoothie => {
            this.context.addSmoothie(newSmoothie)
            alert('Smoothie has been successfully added')
            this.props.history.push('/smoothies')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <form id='addSmoothieForm' onSubmit={event => this.handleSubmit(event)}>
                    <h3>
                        Add New Smoothie:
                    </h3>
                    <input
                        type='text'
                        value={this.state.title.value}
                        name='title'
                        id='title'
                        onChange={event => {this.updateTitle(event.target.value)}}
                        placeholder= '*Title...'
                        required
                    />
                    <br />
                    <input
                        type='text'
                        value={this.state.fruit.value}
                        name='fruit'
                        id='fruit'
                        onChange={event => {this.updateFruit(event.target.value)}}
                        placeholder= 'Fruit...'
                    />
                    <br />
                    <input
                        type='text'
                        value={this.state.vegetables.value}
                        name='vegetables'
                        id='vegetables'
                        onChange={event => {this.updateVegetables(event.target.value)}}
                        placeholder= 'Vegetables...'
                    />
                    <br />
                    <input
                        type='text'
                        value={this.state.nutsseeds.value}
                        name='nutsseeds'
                        id='nutsseeds'
                        onChange={event => {this.updateNutsseeds(event.target.value)}}
                        placeholder= 'Nuts/Seeds...'
                    />
                    <br />
                    <input
                        type='text'
                        value={this.state.liquids.value}
                        name='liquids'
                        id='liquids'
                        onChange={event => {this.updateLiquids(event.target.value)}}
                        placeholder= 'Liquids...'
                    />
                    <br />
                    <input
                        type='text'
                        value={this.state.powders.value}
                        name='powders'
                        id='powders'
                        onChange={event => {this.updatePowders(event.target.value)}}
                        placeholder= 'Powders...'
                    />
                    <br />
                    <input
                        type='text'
                        value={this.state.sweetners.value}
                        name='sweetners'
                        id='sweetners'
                        onChange={event => {this.updateSweetners(event.target.value)}}
                        placeholder= 'Sweetners...'
                    />
                    <br />
                    <input
                        type='text'
                        value={this.state.other.value}
                        name='other'
                        id='other'
                        onChange={event => {this.updateOther(event.target.value)}}
                        placeholder= 'Other...'
                    />
                    <br />
                    <button type='submit'>
                        Publish
                    </button>
                </form>                
            </div>
        );
    };
};