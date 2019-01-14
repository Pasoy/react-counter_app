import React, { Component } from 'react';
import NavBar from './components/partials/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 2 },
            { id: 3, value: 0 },
            { id: 4, value: 21 }
        ]
    };

    constructor() {
        super();
        console.log('App - Constructor');
    }

    componentDidMount() {
        console.log('App - Mounted');
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrease = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value = counters[index].value - 1;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    render() {
        console.log('App - Rendered');

        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.length} />
                <main className="container-fluid">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrease={this.handleDecrease}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
