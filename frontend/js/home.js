


const get_allInformation = () => {
    ipcRenderer.send('get_allInformation', 'cat');
}


ipcRenderer.on('get_allInformation-reply', (event, arg) => {
    console.log(arg) // prints "pong"
    var tabledata = arg.all;

    var table = new Tabulator("#cats-table", {
        height:200, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
        data:tabledata, //assign data to table
        layout:"fitColumns", //fit columns to width of table (optional)
        columns:[ //Define Table Columns
            {title:"Username", field:"user.name.first", width:60},
            {title:"Fact", field:"text", hozAlign:"left", width:"70%"},
            {title:"Type", field:"type"},
            {title:"Vote", field:"upvotes"},
        ],
        rowClick:function(e, row){ //trigger an alert message when the row is clicked
            alert("Row " + row.getData().id + " Clicked!!!!");
        },
   });
});






