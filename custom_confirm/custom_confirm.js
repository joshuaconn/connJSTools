/**
 * Properities for a button
 * @typedef {Object} button_props
 * @property {string} name - html inside the button tag
 * @property {function} - callback function executed when the button is clicked
 */

/**
 * Shows a Dialog box, like confirm, except the button text is customizable, and
 * callback functions are used rather than return values.
 * @param {string} message - Prompt at top of dialog box
 * @param {button_props[]} buttons - array of button propery objects
 * @author Joshua Conn
 */
function custom_confirm(message, buttons) {
	var num_buttons = buttons.length;
	var done = false;
	var popup = window.open(
		'',
		'_blank',
		'height=240, width=320, location=no, menubar=no, status=no, toolbar=no titlebar=no'
	);
	popup.document.write("<html><head><title>Dialog</title><head><body><p align='center'>"+message+"</p>");
	popup.document.write("<div align='center'>");
	for(var i=0; i<num_buttons; i++) {
		popup.document.write("<button id='btn"+i+"'>"+buttons[i].name+"</button>");
	}
	for(var i=0; i<num_buttons; i++) {
		var btn_i = popup.document.getElementById("btn"+i);
		btn_i.addEventListener("click", function(){done=true;popup.close();});
		btn_i.addEventListener("click", buttons[i].func);
	}
	popup.document.write("</div>");
	popup.document.write("</body></html>");
	popup.document.close();
	popup.focus();
}
