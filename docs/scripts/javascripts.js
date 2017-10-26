var term1 = 0;
var term2 = 0;

function switchOn(id, term) {
    var x = document.getElementById(id);
	if (x.style.display == '') {
		x.style.display = 'inline-block';
		if (term == 1) {
			term1 += 1;
			issueWarning();
		} else if (term == 2) {
			term2 += 1;
			issueWarning();
		}
	}
}

function switchOff(id, term) {
    var x = document.getElementById(id);
	if (x.style.display == 'inline-block') {
		x.style.display = '';

		if (term == 1 && term1 > 0) {
			term1--;
			issueWarning();
		}else if (term2 == 2 && term2>0) {
			term2--;
			issueWarning();
		}
	}
}

// ASK SEG TA
function issueWarning() {
	var y;
	y = document.getElementById('term1Alert');
	if (term1 < 2) {
		y.style.display = "block";
	} else {
		y.style.display = 'none';
	}

	y = document.getElementById('term2Alert');
	if (term2 < 2) {
		y.style.display = "block";
	} else {
		y.style.display = 'none';
	}

	y = document.getElementById('8modules');
	if (term1 + term2 < 8) {
		y.style.display = "block";
	} else {
		y.style.display = 'none';
	}

	y = document.getElementById('moduleWarning');
	if (term1 + term2 == 8) {
		y.style.display = "block";
	} else {
		y.style.display = 'none';
	}
}
