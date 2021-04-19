/* show variable of css and change it */
var r = document.querySelector(':root');
function get_style () {
// Get the styles (properties and values) for the root
 var rs = getComputedStyle(r);
 // Alert the value of the --color5 variable
 alert("the value of --color5 is :" + rs.getPropertyValue('--color5'))
}

function set_style () {
	r.style.setProperty('--color5','#170e65')
}