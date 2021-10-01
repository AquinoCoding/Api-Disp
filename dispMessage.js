function whatsAppText(message) {
	window.InputEvent = window.Event || window.InputEvent;
	var event = new InputEvent('input', {bubbles: true});
	var textbox = document.querySelector('body .custom-scroll');
	textbox.textContent = message;
	textbox.dispatchEvent(event);
	document.querySelector('span[data-icon="send"]').click();
}

whatsAppText('Olá Enviou')
