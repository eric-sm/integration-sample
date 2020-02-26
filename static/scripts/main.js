'use strict';

const e = React.createElement;

class MainButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }

    render() {
        if (this.state.clicked) {
            return 'You clicked the button. Good job!';
        }

        return e('button',
            { onClick: () => this.setState({ clicked: true }) },
            'ClickMe!'
        );
    }
}

function onLoad() {
    const domContainer = document.querySelector('#main_container');
    ReactDOM.render(e(MainButton), domContainer);
}
