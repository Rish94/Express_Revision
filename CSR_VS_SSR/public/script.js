

function refreshList(){

    $.get('/todos',function (data){
        // for (let i of data ){
        //     $('#list').append(`<li>${i}</li>`);
        // }
        console.log(data);
    });
}

refreshList();