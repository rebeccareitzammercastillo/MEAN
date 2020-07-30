let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function studentObj(students){
    for(var i=0; i<students.length; i++){
        console.log('Name: ' + students[i].name + ', Cohort: ' + students[i].name)
    }
}
studentObj(students)

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function userObj(arr1, arr2){
    console.log('EMPLOYEES')
    for(var i=0; i<arr1.length; i++){
        full=arr1[i].first_name.length+arr1[i].last_name.length
        // console.log(full)
        console.log(i+1 ,' - ', arr1[i].last_name, ', ', arr1[i].first_name, '-', full )
    }
    console.log('MANAGERS')
    for(var j=0; j<arr2.length; j++){
        full=arr2[j].first_name.length+arr2[j].last_name.length
        // console.log(full)
        console.log(j+1 ,' - ', arr2[j].last_name, ', ', arr2[j].first_name, '-', full )
    }
}
userObj(users.employees, users.managers)
