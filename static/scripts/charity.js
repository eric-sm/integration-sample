'use strict';


// Class definition of a charity rendering for a charity from the search results
class Charity extends React.Component {
    constructor(props) {
        super(props);
        this.gotoProfile = this.gotoProfile.bind(this);
    }

    // Redirect the browser to the Givz.com profile page for the charity
    // Sample profile page URL: https://givz.com/charity/globe-aware-030507729
    gotoProfile() {
         let nameFormatted = this.props.charity.name.toLowerCase().replace(/\s/g, "-");
         let ein = this.props.charity.ein;

         window.location = "https://givz.com/charity/" + nameFormatted + "-" + ein;
     }

    render() {
        return (
            <li className={'charity ' + (this.props.charity.is_hate_group ? "hate-group alert alert-danger" : "")} onClick={this.gotoProfile}>
                <div className='name'>{this.props.charity.name}</div>
                <div className='city'>{this.props.charity.city}</div>
                <div className='state'>{this.props.charity.state}</div>
                <div className='ein'>{this.props.charity.ein}</div>
                <div className='ein'>{this.props.charity.is_hate_group}</div>
                <div className='donate-button'>Donate</div>
            </li>
        );
    }
}