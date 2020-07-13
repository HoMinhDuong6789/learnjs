var users=[
    {name: "Tom", gender:"male"},
    {name: "Sandy", gender:"female"},
    {name: "Daisy", gender:"female"},
    {name: "Jenifer", gender:"female"},
    {name: "Bond", gender:"male"},
    {name: "Jame", gender:"male"},
    {name: "Bill", gender:"male"}
];

var userList =$('#userList');
var genderFilter =$('#genderFilter');
render(userList,  users);

genderFilter.on('change', function(){
    var selectedGender = this.value;//male or female

    var filterUsers = users.filter(function(user){
        return user.gender===selectedGender;
    });
    render(userList, filterUsers);
});

function render(container, items){
    var htmlItems = items.map(function(item){
        return '<li class="list-group-item">'+item.name+'</li>';
    });
    var html= htmlItems.join(''); //'' de thay cho mac dinh , o giua cac phan tu join
    container.html(html);
}