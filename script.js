<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Attendance Viewer</title>
		
		<!-- Link to Google Fonts (Poppins font) -->
		<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
		<!-- Add a new font link to the head section -->


	<style>
	/* General reset */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* Apply Poppins font to all elements */
	body, h1, h2, h3, h4, h5, h6, input, button, p {
		font-family: 'Poppins', sans-serif;
	}

	/* Body styling */
	body {
		font-family: 'Poppins', sans-serif;
		background-color: #F4F7FA; /* Light gray background */
		display: flex;
		justify-content: center;
		align-items: flex-start; /* Align items at the top */
		min-height: 100vh;
		flex-direction: column;
		width: 100%; /* Ensure full width of the screen */
		padding-top: 70px; /* Give space for the floating greeting */
		overflow-x: hidden; /* Prevent horizontal scrolling */
	}

	/* Container for the form */
	.container {
		background-color: #FFFFFF;
		border-radius: 12px;
		padding: 40px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 600px;
		text-align: center;
		margin: 0 auto; /* Center the container */
	}

	/* Heading */
	h1 {
		font-size: 40px;
		color: #2C3E50; /* Dark gray for heading */
		margin-bottom: 25px;
		font-weight: 600;
	}

	#floatingGreeting {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #FFFFFF;
    border: 2px solid #FF6347;
    border-radius: 20px;
    padding: 10px 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    font-size: 24px; /* Increase font size */
    font-weight: bold; /* Make text bold */
    font-family: inherit; /* Keep the default font (same as the body) */
    z-index: 10000;
    text-align: center;
    display: none;
}



/* For smaller screens (Mobile) */
@media (max-width: 600px) {
    #floatingGreeting {
        font-size: 20px; /* Adjust text size for mobile */
        padding: 15px 30px; /* Adjust padding for smaller screens */
        width: 90%; /* Ensure greeting bubble doesn't go off-screen */
        max-width: 350px; /* Ensure it doesn't get too wide */
    }

    /* Button container for Go Back and Contact Me */
    .button-container button {
        width: 100%; /* Full width for mobile screens */
        margin: 10px 0; /* Add margin between buttons */
    }

    /* Adjust the container padding for small screens */
    .container {
        max-width: 100%;
        padding: 20px;
    }

    /* Adjust the heading size for small screens */
    h1 {
        font-size: 28px;
    }

    input[type="text"], button {
        width: 100%;
    }
}


	/* Input fields and button styles */
	input[type="text"], input[type="password"] {
		padding: 16px;
		font-size: 18px;
		width: 100%;
		margin: 12px 0;
		border-radius: 30px;
		border: 2px solid #BDC3C7; /* Light gray border */
		outline: none;
		transition: all 0.3s ease-in-out;
		font-family: inherit;
	}

	/* Button styles */
	button {
		padding: 16px 32px;
		font-size: 20px;
		cursor: pointer;
		border-radius: 30px;
		border: none;
		background: #FF6347; /* Tomato color background */
		color: white;
		width: 100%;
		margin: 18px 0;
		transition: transform 0.3s ease, background-color 0.3s ease;
		font-weight: 600;
	}
	/* Loading state styling */
	#loading {
		font-size: 18px;
		color: #2C3E50; /* Dark gray text for loading */
		margin-top: 20px;
		display: none; /* Ensure it is hidden by default */
	}


	/* Error message styling */
	.error {
		color: #E74C3C; /* Red for error messages */
		margin-top: 20px;
		font-size: 14px;
		display: none;
	}

	/* Result box styling */
	#attendanceResults {
		display: none;
		margin-top: 50px; /* Ensure space between form and results */
		padding: 30px;
		background-color: #ECF0F1; /* Light gray background */
		border: 1px solid #BDC3C7; /* Light gray border */
		border-radius: 10px;
		color: #2C3E50; /* Dark gray text */
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
		font-size: 16px;
		text-align: left;
		line-height: 1.8;
	}
 /* Result header */
        #attendanceResults h4 {
            font-size: 23px;
            color: #FF6347; /* Tomato for headers */
            margin-bottom: 15px;
        }
        /* Result header */
        #attendanceResults h3 {
            font-size: 16px;
            color: #2C3E50; /* Tomato for headers */
            margin-bottom: 15px;
        }
        /* List styling in results */
        #attendanceResults ul {
            list-style-type: none;
            padding: 0;
        }

        #attendanceResults li {
            font-size: 14px;
            margin: 10px 0;
        }

        #attendanceResults li strong {
            color: #2C3E50; /* Tomato for subject names */
        }
		
		 /* Flex container for Go Back and Contact Me buttons */
        .button-container {
            display: flex;
            justify-content: center;
            gap: 10px; /* Space between buttons */
        }

	/* Footer styling */
	#footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 10px 0;
		background-color: #FFFFFF;
		box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
		text-align: center;
		font-size: 16px;
		color: #BDC3C7;
	}

	/* For better mobile experience */
	@media (max-width: 600px) {
		#floatingGreeting {
			font-size: 16px;
			padding: 8px 16px;
		}

		/* Adjust for small screens */
		.container {
			max-width: 100%;
			padding: 20px;
		}

		h1 {
			font-size: 28px;
		}

		input[type="text"], button {
			width: 100%;
		}
	}

	/* Ensure we can scroll content */
	html, body {
		height: 100%; /* Full viewport height */
		overflow-x: hidden; /* Prevent horizontal scroll */
		overflow-y: auto; /* Allow vertical scrolling */
	}



	</style>

	</head>
	<body>

		<div class="container">
			<h1>Attendance Viewer For NGIT 1st Year's</h1>
			
			<form id="attendanceForm">
				<label for="mobile_number" style="font-size: 18px; color: #333;"></label>
				<input type="text" id="mobile_number" name="mobile_number" placeholder="Enter your parent's mobile number" maxlength="10" required>
				<button type="submit">Get Attendance</button>
			</form>

			<!-- Error message will show if mobile number is missing or there's an issue -->
			<div id="errorMessage" class="error"></div>

			<!-- Loading message while waiting for API response -->
			<div id="loading">Loading...</div>

		 

	<!-- Result Box (hidden initially) -->
	<div id="attendanceResults"></div>


			<!-- Button container (Go Back and Contact Me buttons) -->
			<div id="buttonContainer" class="button-container" style="display: none;">
				<!-- Go Back button (hidden initially) -->
				<button id="goBackButton" onclick="goBack()">Go Back</button>
				<!-- Contact Me button (hidden initially) -->
				<button id="contactMeButton" onclick="contactMe()">Contact Me</button>
			</div>
		</div>

		<script>
		// Function to reload the page
		function goBack() {
			location.reload(); // Reloads the current page
		}
			// Function to mask the input number while typing
			const inputField = document.getElementById('mobile_number');

			inputField.addEventListener('input', function() {
				// Hide the input field text while typing by switching to password type
				inputField.type = 'text';
			});
			
		// Function to fetch and display the user's name in the floating bubble with dynamic greeting and emoji
	function fetchAndDisplayName(mobileNumber) {
		// Get current hours
		const hours = new Date().getHours();
		let greeting;

		// Determine the greeting based on the time of day with emojis
		if (hours >= 00 && hours < 12) {
			greeting = "Good Morning ☀️";
		} else if (hours >= 12 && hours < 17) {
			greeting = "Good Afternoon 🌤️";
		} else if (hours >= 17 && hours < 24) {
			greeting = "Good Evening 🌆";
		} else {
			greeting = "Good Night 🌙";
		}

		// Fetch the user's name
		fetch(`https://name.89determined.workers.dev/?mobile_number=${mobileNumber}`)
			.then(response => response.text()) // Get the plain text name from the response
			.then(name => {
				// Update the floating greeting
				const floatingGreeting = document.getElementById('floatingGreeting');
				floatingGreeting.innerHTML = `${greeting},<br><span>${name}</span>`;
				floatingGreeting.style.display = 'block'; // Show the greeting bubble
			})
			.catch(error => {
				console.error('Failed to fetch user name:', error);
			});
	}



	document.getElementById("attendanceForm").addEventListener("submit", function(event) {
		event.preventDefault();

		const mobileNumber = document.getElementById("mobile_number").value;

		// Validate if the mobile number is exactly 10 digits
		if (!mobileNumber || mobileNumber.length !== 10 || isNaN(mobileNumber)) {
			document.getElementById('errorMessage').style.display = 'block';
			document.getElementById('errorMessage').textContent = 'Please enter a valid 10-digit mobile number.';
			
			// Hide the floating greeting when there's an error
			document.getElementById('floatingGreeting').style.display = 'none';
			return;
		}

		// Hide form and heading
		document.querySelector('h1').style.display = 'none';
		document.getElementById('attendanceForm').style.display = 'none';

		// Clear previous results and error message
		document.getElementById('attendanceResults').style.display = 'none';
		document.getElementById('attendanceResults').innerHTML = "";
		document.getElementById('errorMessage').style.display = 'none';

		// Show loading message
		document.getElementById('loading').style.display = 'block';

		// First, fetch and display the user's name
		fetchAndDisplayName(mobileNumber);

		// Make the API request to fetch attendance results
		fetch(`https://ngit.89determined.workers.dev/?mobile_number=${mobileNumber}`)
			.then(response => response.text()) // Getting HTML response
			.then(html => {
				// Check if the API response contains the specific error message
				if (html.includes("Incorrect Number, Go back & Enter Your Parents Number.")) {
					// Hide the greeting if the error message is found
					document.getElementById('floatingGreeting').style.display = 'none';
				}

				// Hide loading and display results
				document.getElementById('loading').style.display = 'none';
				document.getElementById('attendanceResults').style.display = 'block';
				document.getElementById('attendanceResults').innerHTML = html;

				// Show both Go Back and Contact Me buttons
				document.getElementById('buttonContainer').style.display = 'flex';
				// Hide the "Get Attendance" button
				document.querySelector("button[type='submit']").style.display = 'none';

				// Only display the floating greeting when there is no error
				if (!html.includes("Incorrect Number, Go back & Enter Your Parents Number.")) {
					document.getElementById('floatingGreeting').style.display = 'block';
				}
			})
			.catch(error => {
				// Handle any error (e.g., network failure)
				document.getElementById('loading').style.display = 'none';
				document.getElementById('errorMessage').style.display = 'block';
				document.getElementById('errorMessage').textContent = 'Failed to retrieve attendance data.';
				
				// Hide the floating greeting in case of an error
				document.getElementById('floatingGreeting').style.display = 'none';
			});
	});


			// Function to open Instagram profile when Contact Me is clicked
			function contactMe() {
				window.open('https://www.instagram.com/nirvaansadhineni_5082', '_blank');
			}
		</script>

		<!-- Footer -->
		<div id="footer">
			<p>Designed by <strong><a href="https://www.instagram.com/nirvaansadhineni_5082" target="_blank" style="color: #FF6347; text-decoration: none;">Nirvaan Sadhineni</a></strong></p>
		</div>
	<!-- Floating Greeting -->
	<div id="floatingGreeting" style="display: none;"></div>
        <img src="downloads/download.jpg" alt="Description" width="300">


	</body>
	</html>
