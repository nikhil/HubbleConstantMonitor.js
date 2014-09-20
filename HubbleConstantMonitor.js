var clicked = false;
function getData() {
if(!clicked)
{  clicked = true;
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&page=Hubble's_law&callback=?",
        //contentType: "application/json; charset=utf-8",
		dataType: "json",
        success: function (data) {
            
			var parsed = data.parse.text["*"];
            var page = $('<div></div>').html(parsed);
        	var str = $(page).find('.wikitable td:eq(1)');
			var elem = $(str).find('span:eq(1)');
			elem.remove();
			var bothnumstr =  $(str).find('span:eq(0)').html();
			var numstr = bothnumstr.substring(0,5);
			var num = parseFloat(numstr);
			$('#hubble').append(num);
			$('#hubble').addClass("constant")
            var distance = ["23.92638037","306.7484663","429.4478528","766.8711656","1226.993865"];

			for(i=0; i< distance.length; i++)
			{

				var dist = parseFloat(distance[i])*num;
				var pelem = document.createElement("p");
				var txtelem = document.createTextNode(dist);
				console.log(txtelem);
				var insert = $('<p class = "result"></p>').append(txtelem);
				console.log(insert);
				$('.Hubble').append(txtelem);
	      		$('.Hubble').append('<br>');
        		$('.Hubble').append('<br>');





			}
				
	   }
        
    });

}	
}	
