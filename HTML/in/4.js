const users = [
    {
        Id:1,
    name: 'Ilya',
    isAdmin: true,
},
{
    Id:2,
    name: 'djir',
    isAdmin: false,
},
{
    Id:3,
    name: 'oleg',
    isAdmin: false,
},
{
    Id:4,
    name: 'kirill',
    isAdmin: true,
},
]
const userAdmin = users.filter(user => user.isAdmin);
console.log(userAdmin);