$(function(){
    $('#js-shopping-list-form').submit(event => {
      event.preventDefault();
      const result = $(this).find("#shopping-list-entry").val().toLowerCase();
      let inList = false;
      $('li .shopping-item').each (function() {
        if (result === $(this).text()) {
          alert ("This Item Is Already On Your List!");
          inList = true;
        } 
       });
      
      if (!inList) {
        $('ul').append(`<li>
          <span class="shopping-item"> ${result} </span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
      }      
    });
  });
  
  $(function() {
    $('ul').on('click', '.shopping-item-delete', function(event) {
      $(this).parent().parent().remove();
    });
  
    $('ul').on('click', '.shopping-item-toggle', function (event) {
      $(this).parent().siblings('span').toggleClass('shopping-item__checked');
    });
  });