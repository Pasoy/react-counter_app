import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);

        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }

    render() {
        console.log('Counter - Rendered');

        return (
            <div className="row">
                <div className="col-md-1">
                    {this.props.children}
                    <span className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span>
                </div>

                <div className="col-md-4">
                    <button
                        onClick={() =>
                            this.props.onIncrement(this.props.counter)
                        }
                        className="btn btn-secondary btn-sm"
                    >
                        +
                    </button>
                    <button
                        onClick={() =>
                            this.props.onDecrease(this.props.counter)
                        }
                        className="btn btn-secondary btn-sm m-2"
                        disabled={
                            this.props.counter.value === 0 ? 'disabled' : ''
                        }
                    >
                        -
                    </button>
                    <button
                        onClick={() =>
                            this.props.onDelete(this.props.counter.id)
                        }
                        className="btn btn-danger btn-sm"
                    >
                        X
                    </button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
