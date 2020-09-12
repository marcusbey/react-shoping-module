import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        counters: [
            { id:1, value:0 },
            { id:2, value:0 },
            { id:3, value:4 },
            { id:4, value:0 },
            { id:5, value:0 },
            { id:6, value:0 },

        ]
    };

    handleIncrement = counter => {
        console.log(counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDelete = (counterId) => {
        console.log('Event Handler Called', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: counters })
    };
    hendleReset = () => {
        const counters = this.state.counters.map( c=> {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    render() { 
        console.log(this.props);
        return ( 
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.handleReset}> Reset
                </button>
                <ul>
                { this.state.counters.map(counter => 
                    <Counter key={counter.id} 
                             onDelete = {this.handleDelete}
                             onIncrement= {this.handleIncrement}
                             counter={counter}
                             />
            )}
                </ul>
            </div> 
         );
    }
}
 
export default Counters;