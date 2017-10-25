$(document).ready(() => {
	const form = $('#form_task');
	$('#reset_form_button').click(() => {
		form.get(0).reset();
		return false;
	});


	const handlerForForm = (e) => {

		const messages = {
			input_Name: "Check name",
			input_Address_1: "Check Address 1",
			input_Address_2: "Check Address 2",
			input_City: "Check City",
			input_State: "Check State",
			input_ZipCode: "Check Zip Code",
		};

		console.log(e);
		let inputs = form.find('input, select');

		let check = true;
		let regexs = {
			'Alphanumeric': /^[a-z0-9]+$/i,
			'Alpha': /^[a-z]+$/i,
			'Numeric': /^[0-9]+$/
		};

		inputs.removeClass('error');
		inputs.each((i, el) => {
			let j_object = $(el);
			let requireCheck = true;
			let typeCheck = true;
			let value = j_object.val();
			let id_element = j_object.attr('id');
			if (j_object.prop('required')) {
				if (value.length === 0) {
					requireCheck = false;
				}
			}

			let dataRegex = j_object.data('type');
			console.log(dataRegex);
			const regex = regexs[dataRegex];
			if (!regex.test(value) && j_object.prop('required')) {
				typeCheck = false
			}

			if (!requireCheck || !typeCheck) {
				alert(messages[id_element]);
				j_object.addClass('error');
				if (check) {
					check = false;
				}
			}
		});

		return check;
	};

	$('#submit_form_button').click(handlerForForm);
	form.submit(handlerForForm);


	$(':input').focus((e) => {
		$(e.target).removeClass('error');
	});
});