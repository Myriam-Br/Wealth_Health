const categoriesTable = [
    {
        'title':'First Name',
        'id' : 'first-name',
    },
    {
        'title':'Last Name',
        'id' : 'last-name',
    },
    {
        'title':'Start Date',
        'id' : 'start-date',
    },
    {
        'title':'Department',
        'id' : 'department',
    },
    {
        'title':'Street',
        'id' : 'street',
    },
    {
        'title':'City',
        'id' : 'city',
    },
    {
        'title':'State',
        'id' : 'state',
    },
    {
        'title':'Zip Code',
        'id' : 'zip-code',
    },
]

const inputsArray = [
    {
        'label': 'Firstname',
        'id':'firstname',
        'type':'text',
        'row':'first'
    },
    {
        'label': 'Lastname',
        'id': 'lastname',
        'type':'text',
        'row':'first'
    },
    {
        'label': 'Date of birth',
        'id': 'birthdate',
        'type':'date',
        'row':'first'
    },
    {
        'label': 'Start Date',
        'id': 'startdate',
        'type':'date',
        'row':'first'
    },
    {
        'label': 'Street',
        'id': 'street',
        'type':'text',
        'row':'second'
    },
    {
        'label': 'City',
        'id': 'city',
        'type':'text',
        'row':'second'
    },
    {
        'label': 'State',
        'id': 'select_state',
        'type':'list',
        'row':'second'
    },
    {
        'label': 'Zip Code',
        'id': 'zipCode',
        'type':'text',
        'row':'second'
    },
    {
        'label': 'Department',
        'id': 'select_department',
        'type':'list',
        'row':'third'
    },
]

const numbers = [
    {'name': 1},
    {'name': 2},
    {'name': 5},
    {'name': 15},
    {'name': 20},
    {'name': 'All'},
]
const departmentTab = [
    {'name' : 'Sales'},
    {'name' : 'Marketing'},
    {'name' : 'Engineering'},
    {'name' : 'Human Resources'},
    {'name' : 'Legal'},
]

const statesTab = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];

export {departmentTab, statesTab, numbers, categoriesTable, inputsArray }