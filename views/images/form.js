document.addEventListener('DOMContentLoaded', bindButton);

function bindButton() {
	console.log("binding");

	let submitBtn = document.getElementById("petSubmit");
	submitBtn.addEventListener('click', function(even) {
		console.log("clicked");
		let success = document.createElement("h2");
		success.textContent = "Schedule Successful!";

		let downloadLink = document.createElement("A");
		downloadLink.setAttribute("href", "golden_ticket.pdf");
		downloadLink.download = "golden_ticket.pdf";
		downloadLink.textContent = "click here to download your golden ticket";

		document.getElementById("form-sec").appendChild(success);
		document.getElementById("form-sec").appendChild(downloadLink);
	})


}
