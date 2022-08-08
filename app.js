$(function () {
    let itemNameEl = $('#itemName');
    let itemPriceEl = $('#itemPrice');
    let itemQuantityEl = $('#itemQuantity');
    let addBtnEl = $('#addBtn');
    let posTotalSalesValEl = $('#posTotalSalesVal');

    let totalSales = 0;
    let idCounter = 0;
    addBtnEl.on('click', function(e){
        idCounter++;
        let itemName = itemNameEl.val();
        let itemPrice = itemPriceEl.val();
        let itemQuantity = itemQuantityEl.val();
        if(itemName == '' || itemPrice == '' || itemQuantity == ''){
            alert('Your input is incomplete!');
            return;
        }

        
        let total = itemPrice * itemQuantity;
        totalSales += total;
        
        $('tbody').append(`
        <tr>
            <td>${idCounter}</td>
            <td>${itemName}</td>
            <td>${itemPrice}</td>
            <td>${itemQuantity}</td>
            <td>${total}</td>
            <td>
            <i id="${idCounter}"  class="fa-solid fa-trash remove"></i>
            <i id="view${idCounter}" class="fa-solid fa-eye"></i>

            </td>
        </tr>
        `);

        posTotalSalesValEl.text(totalSales);

        itemNameEl.val('');
        itemPriceEl.val('');
        itemQuantityEl.val('');

        $("#"+idCounter).on('click' , function(){
        let userConfirmation = confirm("Are you sure you want to delete the"+" "+ itemName+" item")
        if(userConfirmation){
            let rowRemover = $(this).parent().parent();
            rowRemover.remove();
            posTotalSalesValEl.text(totalSales -= total) ;
     } })

     $("#view"+idCounter).on('click' , function(){
        $('body').append(
            `    <div class="view">
            <div class="modal " tabindex="-1">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">${itemName}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>${idCounter}</td>
                    <td>${itemName}</td>
                    <td>${itemPrice}</td>
                    <td>${itemQuantity}</td>
                    <td>${total}</td>
                    </tr>
                    </tbody>
                    </div>
                  </div>
                </div>
              </div>
        </div>`
        )
        $('body').css("overflow","hidden");
        $('.view').css("display","block");
    
    $('.btn-close').on('click',function(){
        $('body').css("overflow-x","scroll");
        $('.view').css("display","none");
    })
    })

});


})