// dom selectors
var navtabs = document.getElementById("nav-tab");
var tabcontent = document.getElementById("nav-tabContent");
var accordian = document.getElementById("accordionExample");


var xhttp = new XMLHttpRequest();//begin json file read
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var obj = JSON.parse(this.response);
    for (let i=0; i<obj.length; i++){
      // desktop tab population based on json
      navtabs.insertAdjacentHTML("beforeend", "<a class='nav-item nav-link' id='nav-section"+i+"-tab' data-toggle='tab' href='#nav-section"+i+"' role='tab' aria-controls='nav-section"+i+"' aria-selected='false'>"+obj[i].title+"</a>");
      //desktop tab content population based on json
      tabcontent.insertAdjacentHTML("beforeend", "<div class='tab-pane fade' id='nav-section"+i+"' role='tabpanel' aria-labelledby='nav-section"+i+"-tab'>"+obj[i].content+"</div>")
      //mobile accordian population based on json
      accordian.insertAdjacentHTML("beforeend", "<div class='card'><div class='card-header' id='heading"+i+"'><button class='btn btn-link' type='button' data-toggle='collapse' data-target='#collapse"+i+"' aria-expanded='true' aria-controls='collapse"+i+"'>"+obj[i].title+"</button></div><div id='collapse"+i+"' class='collapse' aria-labelledby='heading"+i+"' data-parent='#accordionExample'><div class='card-body'>"+obj[i].content+"</div></div></div>");
    }
    // setting default states
    document.getElementById("nav-section0-tab").setAttribute("class", "nav-item nav-link active");
    document.getElementById("nav-section0").setAttribute("class", "tab-pane fade active show");
    document.getElementById("collapse0").setAttribute("class", "collapse show");
  }
};
//execute get json data
xhttp.open("GET", "./data.json", true);
xhttp.send();
