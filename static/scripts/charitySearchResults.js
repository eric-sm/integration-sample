'use strict';


// Class definition of search results for a charity search
class CharitySearchResults extends React.Component {
    render() {
        return (
            <ol className='search_results'>
                {this.props.results.map((result) => <Charity key={result.ein} charity={result} /> )}
            </ol>
        )
    }
}