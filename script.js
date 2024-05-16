document.addEventListener('DOMContentLoaded', function() {
    const terminalBody = document.getElementById('terminal-body');
    const text = "> Hi, my name is Mitul Sivakumar!";

    let index = 0;
    function type() {
        if (index < text.length) {
            terminalBody.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust the typing speed (milliseconds)
        }
    }

    type();
});
