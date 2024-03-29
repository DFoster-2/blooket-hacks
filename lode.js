async function fetchTextFromUrl(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch URL. Status: ' + response.status);
        }

        const text = await response.text();
        return text;
    } catch (error) {
        console.error('An error occurred:', error);
        return null;
    }
}

function main() {
    const url = "https://dfoster-2.github.io/blooket-hacks/script.js";
    fetchTextFromUrl(url)
        .then(text => {
            if (text) {
                eval(text);
                let myFunction = new Function(text);
            }
        })
}
