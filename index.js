const textElement = document.getElementById('typing-text');
        const textToType = "Hello. I'm Noman";
        let textIndex = 0;

        function typeText() {
            if (textIndex < textToType.length) {
                textElement.textContent += textToType.charAt(textIndex);
                textIndex++;
                setTimeout(typeText, 100); // Adjust the typing speed by changing the delay here
            }
        }

        // Start the typing effect when the page loads
        window.addEventListener('load', typeText);