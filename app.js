var array = [];
var form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = document.getElementById('add').value;

    var add = function (array, location) {

        var template = array.map(function (item, id) {
            return `
        <li id="${id}"> ${item.item}
        <button type="button" class="remove">X</button>
        </li><br>
        `;
        });
        $(location).html(template);
    };
    var addItem = function (array, item) {

        array.push({ item });

    };
    addItem(array, input);
    add(array, $('#list'));


    var deleteItem = function (array, item) {
        array.splice(item, 1);
        add(array, $('#list'));
    };

    $('#list').on('click', '.remove', function (event) {

        var itemToDelete = $(event.currentTarget).closest('li').remove();

        //deleteItem(array, itemToDelete);
    });


});

