function myFunction() {
    var x = document.getElementById("mySelect").selectedIndex;
    var y = document.getElementById("vuelo").selectedIndex;
    var traffictime1 = 1.00;
    var traffictime2 = 1.50;
    var checktime = 2.50;
    var checktime_domestic = 1.50;
    var a = document.getElementsByTagName("option")[x].value;
    var b = document.getElementsByTagName("option")[y].value;
    var iDiv = document.createElement('div');
    if(a<=21 && a>=3 && b==1 ){
    	iDiv.id = 'demo';
		document.getElementsByTagName('body')[0].appendChild(iDiv);
		iDiv.innerHTML = "TENDRIAS QUE SALIR " + (checktime + traffictime1) + " HRS ANTES PARA VIAJAR TRANQUILO";
    } 
    if(a<=33 && a>=24 && b==1 ){
    	iDiv.id = 'demo';
		document.getElementsByTagName('body')[0].appendChild(iDiv);
		iDiv.innerHTML = "TENDRIAS QUE SALIR " + (checktime + traffictime2) + " HRS ANTES PARA VIAJAR TRANQUILO";
    }
    if()


   // alert(document.getElementsByTagName("option")[x].value);
    //document.getElementById("demo").innerHTML = "Hello <b>world</b>!";






}