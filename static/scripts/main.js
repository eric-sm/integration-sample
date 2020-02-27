'use strict';


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


// Load the hate groups into classes and store into the hateGroups list
const hateGroups = [];

let lines = sampleHateGroupsCSVData.split("\n"); // split the data on newlines and store into an array of row data
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


// For the charity search results, identify any hate groups and flag as such
sampleCharitySearchResponse.result.forEach( charity => {
    // Find potential name matches
    let potential_matches = hateGroups.find(group => {
        if (group.name.includes(charity.name) || charity.name.includes(group.name)) {
            console.log(group);
            charity.is_hate_group = true;
        }
    });
});