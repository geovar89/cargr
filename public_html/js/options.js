var rowClicked ={
    'id' : '', 'brand' : '', 'model' : '', 'from_date' : '', 'to_date' : '' , 'price' : ''
}
function redirect(){
    var url = "http://localhost:8080/cargr/public_html/options.html";
    var win = window.open(url, '_blank');
    win.focus();
    loadFilters();
}
(function($){
    $(document).ready(function() {
        $.ajax({
            type: "POST",
            data: { 
                'action': 'getFilters'
            },
            url: "filters.php"
        })
        .done(function(response) {
            createForm();
            createFilterTable(response);
            //getResults();
        })
        .fail(function(args) {
          alert( "error" );
        })
        .always(function(args) {
          //alert( "complete" );
        }); 
    })
})(jQuery);

function createForm(){
     //'<div class="form-group">
    var brands=     '<div class="form-group col-sm-2">'+
                    '<label for="brand" class="col-sm-1 control-label">Μάρκα:</label>'+
                    //'<div class="col-sm-2">'+
                    '<select class="form-control" id="brand" onchange="brandChange()">'+
                        '<option value="">Μάρκα</option>'+
                        '<option  value="6278">AC</option>'+
                        '<option  value="6231">Abarth</option>'+
                        '<option  value="3831">Acura</option>'+
                        '<option  value="67">Aixam</option>'+
                        '<option  value="1">Alfa Romeo</option>'+
                        '<option  value="2">Alpina</option>'+
                        '<option  value="5070">Ariel</option>'+
                        '<option  value="638">Asia Motors</option>'+
                        '<option  value="3">Aston Martin</option>'+
                        '<option  value="4">Audi</option>'+
                        '<option  value="639">Austin Healey</option>'+
                        '<option  value="5">Austin Morris</option>'+
                        '<option  value="54">Austin Rover</option>'+
                        '<option  value="3900">Autobianchi</option>'+
                        '<option  value="7">Bentley</option>'+
                        '<option  value="298">Bmw</option>'+
                        '<option  value="640">Brilliance</option>'+
                        '<option  value="641">Bugatti</option>'+
                        '<option  value="8">Buick</option>'+
                        '<option  value="9">Cadillac</option>'+
                        '<option  value="6288">Casalini</option>'+
                        '<option  value="642">Caterham</option>'+
                        '<option  value="6287">Chatenet</option>'+
                        '<option  value="643">Chery</option>'+
                        '<option  value="10">Chevrolet</option>'+
                        '<option  value="5348">China-Motors</option>'+
                        '<option  value="11">Chrysler</option>'+
                        '<option  value="105">Citroen</option>'+
                        '<option  value="5674">Club Car</option>'+
                        '<option  value="13">Cobra</option>'+
                        '<option  value="644">Corvette</option>'+
                        '<option  value="6286">DS</option>'+
                        '<option  value="645">Dacia</option>'+
                        '<option  value="109">Daewoo</option>'+
                        '<option  value="15">Daihatsu</option>'+
                        '<option  value="16">DeTomaso</option>'+
                        '<option  value="17">Dodge</option>'+
                        '<option  value="18">Ferrari</option>'+
                        '<option  value="124">Fiat</option>'+
                        '<option  value="6285">Fisker</option>'+
                        '<option  value="126">Ford</option>'+
                        '<option  value="6284">GAC Gonow</option>'+
                        '<option  value="6282">Gemballa</option>'+
                        '<option  value="21">Gmc</option>'+
                        '<option  value="6321">Goupil</option>'+
                        '<option  value="6281">Grecav</option>'+
                        '<option  value="6280">Hamann</option>'+
                        '<option  value="22">Honda</option>'+
                        '<option  value="23">Hummer</option>'+
                        '<option  value="153">Hyundai</option>'+
                        '<option  value="646">Infiniti</option>'+
                        '<option  value="25">Innocenti</option>'+
                        '<option  value="155">Isuzu</option>'+
                        '<option  value="156">Iveco</option>'+
                        '<option  value="28">Jaguar</option>'+
                        '<option  value="27">Jeep</option>'+
                        '<option  value="5863">Jensen Healey</option>'+
                        '<option  value="647">Jiangling</option>'+
                        '<option  value="288">KTM</option>'+
                        '<option  value="165">Kia</option>'+
                        '<option  value="6279">Königsegg</option>'+
                        '<option  value="30">Lada</option>'+
                        '<option  value="176">Lamborghini</option>'+
                        '<option  value="32">Lancia</option>'+
                        '<option  value="33">Land Rover</option>'+
                        '<option  value="3828">Landwind</option>'+
                        '<option  value="34">Lexus</option>'+
                        '<option  value="3872">Lifan</option>'+
                        '<option  value="186">Ligier</option>'+
                        '<option  value="36">Lincoln</option>'+
                        '<option  value="37">Lotus</option>'+
                        '<option  value="38">Mahindra</option>'+
                        '<option  value="39">Maserati</option>'+
                        '<option  value="648">Maybach</option>'+
                        '<option  value="192">Mazda</option>'+
                        '<option  value="6273">McLaren</option>'+
                        '<option  value="196">Mercedes-Benz</option>'+
                        '<option  value="42">Mg</option>'+
                        '<option  value="6274">Microcar</option>'+
                        '<option  value="43">Mini</option>'+
                        '<option  value="198">Mitsubishi</option>'+
                        '<option  value="5367">Moretti</option>'+
                        '<option  value="45">Morgan</option>'+
                        '<option  value="5044">Neptun</option>'+
                        '<option  value="205">Nissan</option>'+
                        '<option  value="649">Nsu</option>'+
                        '<option  value="208">Opel</option>'+
                        '<option  value="5366">Panther</option>'+
                        '<option  value="213">Peugeot</option>'+
                        '<option  value="278">Piaggio</option>'+
                        '<option  value="48">Plymouth</option>'+
                        '<option  value="49">Pontiac</option>'+
                        '<option  value="214">Porsche</option>'+
                        '<option  value="51">Proton</option>'+
                        '<option  value="221">Renault</option>'+
                        '<option  value="53">Rolls Royce</option>'+
                        '<option  value="6">Rover</option>'+
                        '<option  value="55">Saab</option>'+
                        '<option  value="650">Santana</option>'+
                        '<option  value="232">Seat</option>'+
                        '<option  value="6033">Shuanghuan</option>'+
                        '<option  value="56">Skoda</option>'+
                        '<option  value="57">Smart</option>'+
                        '<option  value="6275">Spyker</option>'+
                        '<option  value="59">Subaru</option>'+
                        '<option  value="242">Suzuki</option>'+
                        '<option  value="65">TVR</option>'+
                        '<option  value="61">Talbot</option>'+
                        '<option  value="3830">Tata</option>'+
                        '<option  value="5565">Tazzari</option>'+
                        '<option  value="6276">Techart</option>'+
                        '<option  value="6277">Tesla</option>'+
                        '<option  value="248">Toyota</option>'+
                        '<option  value="63">Trabant</option>'+
                        '<option  value="64">Triumph</option>'+
                        '<option  value="651">Uaz</option>'+
                        '<option  value="70">Ueec</option>'+
                        '<option  value="66">Vauxhall</option>'+
                        '<option  value="251">Volkswagen</option>'+
                        '<option  value="254">Volvo</option>'+
                        '<option  value="69">Wartburg</option>'+
                        '<option  value="5705">Westfield</option>'+
                        '<option  value="652">Wiesmann</option>'+
                        '<option  value="5413">Zotye</option>'+
                        '<option  value="0">Αλλο</option>'+
                    '</select></div>';//</div>';
            
    var models  =   '<div class="form-group col-sm-2">'+
                    '<label for="model" class="col-sm-1 control-label">Μοντέλο:</label>'+
                    //'<div class="col-sm-2">'+
                    '<select class="form-control" id="model">'+
                        '<option value="">Μοντέλο</option>'+ 
                    '</select></div>';//</div>';
    
    var yearsOptions ='';
    for(var i = 2020 ; i>=1970; i--){
        yearsOptions = yearsOptions + '<option value="'+i+'">'+i+'</option>'; 
    }
    
    var fromDate=   '<div class="form-group col-sm-2">'+
                    '<label for="fromDate" class="col-sm-1 control-label">Από:</label>'+
                    //'<div class="col-sm-2">'+
                    '<select class="form-control" id="fromDate">'+
                        yearsOptions+
                    '</select></div>';//</div>';
   
    var toDate  =   '<div class="form-group col-sm-2">'+
                    '<label for="toDate" class="col-sm-1 control-label">Έως:</label>'+
                    //'<div class="col-sm-2">'+
                    '<select class="form-control" id="toDate">'+
                        yearsOptions+
                    '</select></div>';//</div>';
    
    var price   =   '<div class="form-group col-sm-2">'+
                    '<label for="price" class="col-sm-1 control-label">Τιμή:</label>'+
                    //'<div class="col-sm-2">'+
                    '<input type="text" class="form-control" id="price">'
                    '</div>';//</div>';
                    
    var submit   =   '<div class="form-group col-sm-2">'+
                    //'<div class="col-sm-2">'+
                    '<button type="button" class="btn btn-default" onclick="submitForm()">Προσθήκη φίλτρου</button>'
                    '</div>';//</div>';                
    
    var form    =   '<div class="container">'+
                    '<form class="form-vertical" role="form" id="filterForm">'+ 
                        brands  + 
                        models  + 
                        fromDate + 
                        toDate  +
                        price   +
                        submit  +
                    '</form></div>';
        
    $( "#options" ).append( form );
}

function brandChange(field){
    var brand = $("#brand").val().toString();
    $.ajax({
        type: "POST",
        data: { 
            'action' : 'getModels',
            'brand'  : brand
        },
        url: "options.php"
    })
    .done(function(response) {
        loadModels(response);
    })
    .fail(function(args) {
      alert( "error" );
    })
    .always(function(args) {
      //alert( "complete" );
    }); 
}

function loadModels(response){
    var models = JSON.parse(response).models;
    var options ='';
    for (var i = 0; i < models.length; i++){
       var name = models[i][0].split('|') 
       options = options +  '<option value="'+name[1]+'">'+name[0]+'</option>'; 
    }
    $("#model").append(options)
}

function createFilterTable(response){
    var rows = '';
    var filters = JSON.parse(response);
    var tableStart   =   '<div class="container">'+
                    '<h2>Φίλτρα</h2>'+
                    '<table class="table table-bordered">'+
                    '<thead>'+
                        '<tr>'+
                            '<th>A/A</th>'+
                            '<th>Mάρκα</th>'+
                            '<th>Μοντέλο</th>'+
                            '<th>Χρονιά Από</th>'+
                            '<th>Χρονιά Έως</th>'+
                            '<th>Τιμή</th>'+
                            '<th>Διαγραφή</th>'+
                        '</tr>'+
                    '</thead>'+
                    '<tbody>';
    for(var i = 0; i < filters.length ; i++){
        rows    =   rows +
                    '<tr>'+
                        '<td>'+filters[i]['id']+'</td>'+
                        '<td>'+filters[i]['brand']+'</td>'+
                        '<td>'+filters[i]['model']+'</td>'+
                        '<td>'+filters[i]['from_date']+'</td>'+
                        '<td>'+filters[i]['to_date']+'</td>'+
                        '<td>'+filters[i]['price']+'</td>'+
                        '<td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Διαγραφή</button></td>'+
                    '</tr>'
    }        
                        
    var tableEnd    =   '</tbody>'+
                        '</table>'+
                        '</div>';
    var table = tableStart + rows + tableEnd;
    $( "#tablefilt" ).append( table );
    
    $("#tablefilt tr").click(function(){
        rowClicked['id']    = this.cells[0].innerHTML;
        rowClicked['brand'] = this.cells[1].innerHTML;
        rowClicked['model'] = this.cells[2].innerHTML;
        rowClicked['frmo_date'] = this.cells[3].innerHTML;
        rowClicked['to_date']   = this.cells[4].innerHTML;
        rowClicked['price']     = this.cells[5].innerHTML;
    });
}

function submitForm(){
    
    $.ajax({
        type: "POST",
        data: { 
            'action' : 'updateFilters',
            'brand'  : $("#brand")[0].selectedOptions[0].innerHTML.toUpperCase(),
            'model'  : $("#model")[0].selectedOptions[0].innerHTML.toUpperCase(),
            'from_date' : $("#fromDate")[0].selectedOptions[0].innerHTML.toUpperCase(),
            'to_date': $("#toDate")[0].selectedOptions[0].innerHTML.toUpperCase(),
            'price'  : $("#price").val()
        },
        url: "filters.php"
    })
    .done(function(response) {
        window.location.reload(1);
    })
    .fail(function(args) {
      alert( "error" );
    })
    .always(function(args) {
      //alert( "complete" );
    }); 
}

function deleteFilter(){
    $.ajax({
        type: "POST",
        data: { 
            'action' : 'deleteFilters',
            'id'     : rowClicked['id']
        },
        url: "filters.php"
    })
    .done(function(response) {
        window.location.reload(1);
    })
    .fail(function(args) {
      alert( "error" );
    })
    .always(function(args) {
      //alert( "complete" );
    }); 
}
        
    