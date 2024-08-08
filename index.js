fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const words = data.words;
        const wordInput = document.getElementById('wordInput');
        const randomButton = document.getElementById('randomButton');

    
        function shuffle(word) {
            return word.split('').sort(() => Math.random() - 0.5).join('');
        }

        
        function randomWord() {
            const randomIndex = Math.floor(Math.random() * words.length);
            const randomWord = words[randomIndex];
            wordInput.value = shuffle(randomWord);
        }

        randomWord();

        randomButton.addEventListener('click', randomWord);
    })
    .catch(error => console.error('Error al cargar las palabras:', error));


    document.querySelectorAll('.letters input').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.length > 1) {
                this.value = this.value.slice(0, 1); 
            }
        });
    });
    