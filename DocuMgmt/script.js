document.getElementById('file-upload-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('file-input');
    const formData = new FormData();
    formData.append('document', fileInput.files[0]);

    fetch('/api/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // File uploaded successfully, you can update the document listing here
                refreshDocumentList();
            } else {
                // Handle error (e.g., display an error message)
                console.error('File upload failed:', data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById('tag-button').addEventListener('click', function() {
    const tags = document.getElementById('tag-input').value.split(',');

    // You need to replace 'documentName' with the actual document name
    const documentName = 'Document 1.pdf'; // Replace with the name of the selected document

    fetch('/api/tag', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ documentName, tags }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Tags added successfully, you can update the document listing here
                refreshDocumentList();
            } else {
                // Handle error (e.g., display an error message)
                console.error('Tagging failed:', data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value;

    fetch(`/api/search?term=${encodeURIComponent(searchTerm)}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Display search results (e.g., update the document listing)
                displaySearchResults(data.results);
            } else {
                // Handle no results found (e.g., display a message)
                console.log('No results found.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// Function to refresh the document listing (you can implement this)
// Function to refresh the document listing
function refreshDocumentList() {
    // Fetch the list of documents from the server
    fetch('/getDocuments') // Replace with the actual API endpoint to retrieve documents
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Clear the existing document list
                const documentList = document.getElementById('document-list');
                documentList.innerHTML = '';

                // Iterate through the retrieved documents and display them
                data.documents.forEach(document => {
                    const documentEntry = document.createElement('div');
                    documentEntry.className = 'document-entry';

                    const documentName = document.createElement('span');
                    documentName.className = 'document-name';
                    documentName.textContent = document.name;

                    const documentTags = document.createElement('span');
                    documentTags.className = 'document-tags';
                    documentTags.textContent = `Tags: ${document.tags.join(', ')}`;

                    documentEntry.appendChild(documentName);
                    documentEntry.appendChild(documentTags);

                    documentList.appendChild(documentEntry);
                });
            } else {
                // Handle error (e.g., display an error message)
                console.error('Failed to retrieve documents:', data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


// Function to display search results (you can implement this)
// Function to display search results
function displaySearchResults(results) {
    // Clear the existing search results
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '';

    if (results.length === 0) {
        // No results found, display a message
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No results found.';
        searchResultsContainer.appendChild(noResultsMessage);
    } else {
        // Iterate through search results and display them
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result';

            const resultTitle = document.createElement('h3');
            resultTitle.textContent = result.name;

            const resultTags = document.createElement('p');
            resultTags.textContent = `Tags: ${result.tags.join(', ')}`;

            resultItem.appendChild(resultTitle);
            resultItem.appendChild(resultTags);

            searchResultsContainer.appendChild(resultItem);
        });
    }
}