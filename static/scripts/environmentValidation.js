'use strict';

const e = React.createElement;

class MainButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }

    render() {
        if (this.state.clicked) {
            return (
                <div class="alert alert-success" role="alert">You clicked the JSX button. Good job!</div>
            );
        }

        return (
            <button onClick={() => this.setState({ clicked: true })}>
                ClickMe!
            </button>
        );
    }
}

const domContainer = document.querySelector('#main_container');
ReactDOM.render(e(MainButton), domContainer);
