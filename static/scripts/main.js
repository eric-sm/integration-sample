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


// Class definition of search results for a charity search
class CharitySearchResults extends React.Component {
    render() {
        return (
            <ol className='search-results'>
                {this.props.results.map((result) => <Charity key={result.ein} charity={result} /> )}
            </ol>
        )
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: [], hateGroups: [], page: 0, total: 0 };
        this.doSearch = this.doSearch.bind(this);
    }

    // Pre-load the hate group data set
    componentDidMount() {
        // Class definition of information about a single hate group
        class SPLCHateGroup {
            constructor(givz_id, splc_id, names, city, state, ideology) {
                this.givz_id = givz_id;
                this.splc_id = splc_id;
                this.names = names;
                this.name = names[0];
                this.city = city;
                this.state = state;
                this.ideology = ideology
            }
        }


        function addHateGroups(str) {
            const hateGroups = [];

            let lines = str.split("\n"); // split the data on newlines and store into an array of row data
            lines.shift(); // remove first row containing column titles
            lines.forEach( line => {
                let data = line.split(","); // split on the comma in a unquoted CSV

                if (data[2]) {
                    // Set up the list of names that the group goes by, composed of "title" and, if available and different, "group"
                    let names = [];
                    names.push(data[2]);
                    if (data[5] != "" && data[2] != data[5]) names.push(data[5]);

                    // Create an instance of SPLCHateGroup with the values from the row
                    let group = new SPLCHateGroup(null, data[1], names, data[3], data[4], data[6]);

                    // Add the group to the hateGroups list
                    hateGroups.push(group);
                }
            });
            console.log(hateGroups); // debug logging

            return hateGroups;
        }
        fetch("http://givz.jericsmall.com:8181/assets/splc-hate-groups.csv", {
            method: "GET",
            headers: { "Content-Type": "text/plain" }
        })
        .then((data) => data.text())
        .then((str) => {
            let hateGroups = addHateGroups(str);
            this.setState({ hateGroups: hateGroups });
        });
    }

    // For the charity search results, identify any hate groups and flag as such
    // TODO: improve the matching algorithm in flagHateGroups
    doSearch(event) {
        function flagHateGroups(results, hateGroups) {
            results.forEach( charity => {
               // Find potential name matches
               let potential_matches = hateGroups.find(group => {
                   if (group.name.includes(charity.name) || charity.name.includes(group.name)) {
                       console.log(group); // debug logging
                       charity.is_hate_group = true;
                   }
               });
            });
        }

        fetch("http://givz.jericsmall.com:8181/api/search/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {"value": event.target.value, "from_page": 0, "size": 5}
            )
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data.result); // debug logging
            console.log(data.total); // debug logging
            flagHateGroups(data.result, this.state.hateGroups);
            this.setState({ results: data.result, total: data.total });
        });
    }

    render() {
        return (
            <div id="charity_search">
                <div id="search_input">
                    <form>
                        <fieldset>
                            <input type="text" placeholder="Search charities by name or EIN" onChange={this.doSearch} />
                        </fieldset>
                    </form>
                </div>

                <CharitySearchResults results={this.state.results} />
            </div>
        )
    }
}



// Display the results in the page
const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);

