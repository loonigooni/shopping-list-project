$(function() {
    $('ul').on('click','.shopping-item-delete', function(event) {

     $(this).parents('li').remove();
    });

    $('ul').on('click','.shopping-item-toggle', function(event) {
        $(this).parent().prev().toggleClass('shopping-item__checked');
       });

    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let shoppingListEntry = $('#shopping-list-entry').val();
        console.log(shoppingListEntry);
        $('.shopping-list').append(`
        <li><span class="shopping-item">${shoppingListEntry}</span>
        <div class="shopping-item-controls"><button class="shopping-item-toggle">
        <span class="button-label">check</span></button> 
        <button class="shopping-item-delete"><span class="button-label">delete</span>
        </button>
        </div>
        </li>`)
    })
    
  });


