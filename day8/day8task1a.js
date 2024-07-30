function io() {
			var uname = document.form.username;
			var years = document.form.age;
			var pin = document.form.pincode;
			var pan = document.form.pannumber;
			var pwd = document.form.password;
			var phno = document.form.phonenumber;

			if (unamev(uname, 8, 10) &&
				yearsv(years) &&
				pinv(pin) &&
				panv(pan) &&
				pwdv(pwd) &&
				phnov(phno, 10)) {
				return true;
			}

			return false;
		}

		function unamev(uname, mx, my) {
			var len = uname.value.length;
			if (len < mx || len > my || len === 0) {
				alert("Please enter a user name between " + mx + " and " + my + " characters.");
				uname.focus();
				return false;
			}
			return true;
		}

		function yearsv(years) {
			var a = parseInt(years.value);
			if (a <= 0 || isNaN(a)) {
				alert("Please enter a valid age.");
				years.focus();
				return false;
			}
			return true;
		}

		function pinv(pin) {
			var b = pin.value.length;
			if (b === 6) {
				return true;
			}
			alert("Please enter a valid pin number.");
			pin.focus();
			return false;
		}

		function panv(pan) {
			var c = /^[A-Z0-9]+$/;
			if (pan.value.match(c)) {
				return true;
			}
			alert("Please enter a valid PAN number.");
			pan.focus();
			return false;
		}

		function pwdv(pwd) {
			var c = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
			if (pwd.value.match(c)) {
				return true;
			}
			alert("Please enter a valid password.");
			pwd.focus();
			return false;
		}

		function phnov(pno, mx) {
			var numbers = /^[0-9]+$/;
			var phoneno = pno.value;
			if (phoneno.length !== mx || phoneno[0] !== '8') {
				alert("Phone number should contain exactly " + mx + " digits and start with 8.");
				pno.focus();
				return false;
			}
			return true;
		}