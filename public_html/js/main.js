var filterArray;
(function($){
    $(document).ready(function() {
        var seconds = 120,
            display = $('#time'),
            limit,
            pages,
            index;
        startTimer(seconds, display);
        getFilters();
    })
})(jQuery);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer === 0) {
            //window.location.reload(1);
        }
    }, 1000);
}

function getFilters(){
    $.ajax({
        type: "POST",
        data: { 
            'action': 'getFilters'
        },
        url: "filters.php"
    })
    .done(function(response) {
        createFilters(response);
        getResults();
    })
    .fail(function(args) {
      alert( "error" );
    })
    .always(function(args) {
      //alert( "complete" );
    });
}

function getResults(){
    var limit,
        pages,
        index;
    $.ajax({
        type: "POST",
        data: { 
            'pg': "0" 
        },
        url: "external.php",
    })
    .done(function(response) {
        pages = response.split('|');
        limit = Math.ceil(parseInt(pages[0], 16)/15);
        for(var i = 1; i <= limit; i++){
            $.ajax({
                type: "POST",
                data: { 
                    'pg': i.toString() 
                },
                url: "external.php",
            })
            .done(function(response) {
                var myRe = /(<a(?:(?!\/a>).|\n)*class="vehicle list-group-item clsfd_list_row"(?:(?!\/a>).|\n)*(?=\/a>)...)/gi;
                var str = response;
                var myArray;
                var ads = [];
                var tmpAd;
                while ((myArray = myRe.exec(str)) !== null) {
                    ads.push(myArray[0]);
                    tmpAd = processAd(myArray[0]);
                    if(tmpAd){
                        myArray[0] = myArray[0].replace('<a href="', '<a onclick="redirectToAd(\'' + tmpAd['url'] + '\');" href="javascript:;');
                        $( "#maindata" ).append( myArray[0] );
                    }
                }
            })
            .fail(function(args) {
              //alert( "error" );
            })
            .always(function(args) {
            });
        }
    })
    .fail(function(args) {
      //alert( "error" );
    })
    .always(function(args) {
      //alert( "complete" );
    });
}

function processAd(ad){
    var adObject ={
        'brand'         :   null,
        'model'         :   null,
        'releaseDate'   :   null,
        'addressRegion' :   null,
        'telephone'     :   null,
        'seller'        :   null,
        'engine'        :   null,
        'power'         :   null,
        'transmision'   :   null,
        'fueltype'      :   null,
        'price'         :   null,
        'html'          :   ad
    };
    
    var processedAd = document.createElement('div');
    processedAd.innerHTML = ad;
    var spans = processedAd.getElementsByTagName('span');
    for(var i = 0; i < spans.length; i++){
       if(spans[i].getAttribute('itemprop')!==null){
           adObject[spans[i].getAttribute('itemprop')] = spans[i].innerHTML.trim().toUpperCase();
       }
       else if(spans[i].getAttribute('class')!==null){
           adObject[spans[i].getAttribute('class')] = spans[i].innerHTML.trim().toUpperCase();
       }
    }
    adObject['url'] = processedAd.getElementsByTagName('a')[0].pathname;
    
    if(filterAd(adObject)!==null){
        return adObject;
    }
}

function filterAd(adObj){
    for(var i = 0; i < filterArray.length; i++){
        if(adObj['brand'] == filterArray[i]['brand'] && adObj['model'] == filterArray[i]['model']){
            if(parseFloat(adObj['price'].split(';')[1].replace('.','')) <= filterArray[i]['price'] ){
                var date = adObj['releaseDate'].substring(1)
                date = parseInt(date) < 20 ? '20'+date : '19'+date
                if(parseInt(date) >= filterArray[i]['from_date'] && parseInt(date) <= filterArray[i]['to_date']){
                    return adObj;
                }
            }
        }
    }
    
    return null;
}

function createFilters(array){
    filterArray = JSON.parse(array);
}

function redirectToAd(car){
    var url = "http://www.car.gr"+car;
    var win = window.open(url, '_blank');
    win.focus();
}
