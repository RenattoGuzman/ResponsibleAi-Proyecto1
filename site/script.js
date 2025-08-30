document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('notebook-select');
    const contentDiv = document.getElementById('notebook-content');

    function loadNotebook(notebookFile) {
        fetch(notebookFile)
            .then(response => response.text())
            .then(html => {
                contentDiv.innerHTML = html;
            })
            .catch(() => {
                contentDiv.innerHTML = '<p>Could not load notebook.</p>';
            });
    }

    select.addEventListener('change', function() {
        loadNotebook(this.value);
    });

    // Load the first notebook by default
    loadNotebook(select.value);
});
