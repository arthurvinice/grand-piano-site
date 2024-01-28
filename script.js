const container = document.querySelector('.container')

container.addEventListener('click', function(event) {
  const target = event.target

  if (target.classList.contains('white-key')) {
    const nota = target.getAttribute('data-note');
    console.log('Nota:', nota)
  }

  if (target.classList.contains('white-key-2')) {
    const nota = target.getAttribute('data-note');
    console.log('Nota:', nota)
  }

  if (target.classList.contains('black-key')) {
    const nota = target.getAttribute('data-note');
    console.log('Nota:', nota)
  }

  if (target.classList.contains('black-key-2')) {
    const nota = target.getAttribute('data-note');
    console.log('Nota:', nota)
  }
})



// MAPA TECLAS COM ARQUIVOS DE AUDIO
const audioUrls = {
    "1": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/1.wav?v=1706278387170",
    "2": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/2.wav?v=1706278000413",
    "3": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/3.wav?v=1706278003421",
    "4": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/4.wav?v=1706278005977",
    "5": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/5.wav?v=1706278009783",
    "6": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/6.wav?v=1706278013041",
    "7": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/7.wav?v=1706278015756",
    "8": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/8.wav?v=1706278018473",
    "9": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/9.wav?v=1706278021806",
    "10": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/10.wav?v=1706278024724",
    "11": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/11.wav?v=1706278027872",
    "12": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/12.wav?v=1706278031313",
    "13": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/13.wav?v=1706278034663",
    "14": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/14.wav?v=1706278037677",
    "15": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/15.wav?v=1706278040660",
    "16": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/16.wav?v=1706278043363",
    "17": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/17.wav?v=1706278046072",
    "18": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/18.wav?v=1706278049350",
    "19": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/19.wav?v=1706278054275",
    "20": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/20.wav?v=1706278056760",
    "21": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/21.wav?v=1706278061057",
    "22": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/22.wav?v=1706278064438",
    "23": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/23.wav?v=1706278067881",
    "24": "https://cdn.glitch.global/2cde7eee-4038-460d-8d0a-dba9821817e6/24.wav?v=1706278072674",
};


//FUNÇÃO PARA TOCAR O SOM DA NOTA AO CLICAR
const playNote = (note, sustain) => {
    const audioUrl = audioUrls[note];
    if (audioUrl) {
        const audio = new Audio(audioUrl);
        audio.play();

        if (!sustain) {
            const delayAfterPlay = 100;

            setTimeout(function () {
                if (!audio.paused) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            }, delayAfterPlay);
        }
    }
}


// FUNÇÕES PARA TECLAS AO CLIQUE 
const blackKeys = document.querySelectorAll('.black-key, .black-key-2');
const whiteKeys = document.querySelectorAll('.white-key, .white-key-2');

//TECLAS PRETAS
const handleMouseDown = function(key) {
    const sustain = sustainEnabled; // Obtém o estado do sustain no momento do clique
    playNote(key.getAttribute('data-note'), sustain);

    if (key.className.includes('black-key')) {
        key.classList.add('pressed');
    } else {
        key.classList.add('pressed');
        key.addEventListener('mouseleave', function handleMouseLeave() {
            key.classList.remove('pressed');
            key.removeEventListener('mouseleave', handleMouseLeave);
        });
    }
}
const handleMouseUp = function(key) {
    if (key.className.includes('black-key')) {
        key.classList.remove('pressed')
        return
    }
}

const handleMouseLeave = function(key) {
    if (key.className.includes('black-key')) {
        key.classList.remove('pressed')
        return
    }
}

blackKeys.forEach(function (key) {
    key.addEventListener('mousedown', function () {
        handleMouseDown(key) 
    });

    key.addEventListener('mouseup', function () {
        handleMouseUp(key)
    });

    key.addEventListener('mouseleave', function () {
        handleMouseLeave(key)
    });
});

//TECLAS BRANCAS
const handleMouseDownW = function(key) {
    const sustain = sustainEnabled; // Obtém o estado do sustain no momento do clique
    playNote(key.getAttribute('data-note'), sustain);

    if (key.className.includes('white-key')) {
        key.classList.add('pressed');
    } else {
        key.classList.add('pressed');
        key.addEventListener('mouseleave', function handleMouseLeave() {
            key.classList.remove('pressed');
            key.removeEventListener('mouseleave', handleMouseLeave);
        });
    }
}

const handleMouseUpW = function(key) {
    if (key.className.includes('white-key')) {
        key.classList.remove('pressed')
        return
    }
}

const handleMouseLeaveW = function(key) {
    if (key.className.includes('white-key')) {
        key.classList.remove('pressed')
        return
    }
}

whiteKeys.forEach(function (key) {
    key.addEventListener('mousedown', function () {
        handleMouseDownW(key) 
    });

    key.addEventListener('mouseup', function () {
        handleMouseUpW(key)
    });

    key.addEventListener('mouseleave', function () {
        handleMouseLeaveW(key)
    });
});


// MAPA TECLAS DO TECLADO PARA O PIANO
const keyboardNoteMapping = {
    'z': '1',
    's': '2',
    'x': '3',
    'd': '4',
    'c': '5',
    'v': '6',
    'g': '7',
    'b': '8',
    'h': '9',
    'n': '10',
    'j': '11',
    'm': '12',
    'q': '13',
    '2': '14',
    'w': '15',
    '3': '16',
    'e': '17',
    'r': '18',
    '5': '19',
    't': '20',
    '6': '21',
    'y': '22',
    '7': '23',
    'u': '24',
};


const pressedKeys = {}; // OBJETO PARA VERIFICAR TECLAS PRESSIONADAS
let sustainEnabled = false; 

// EVENTO PARA TOGGLE DO SUSTAIN
document.getElementById('toggleSustainBtn').addEventListener('click', function () {
    sustainEnabled = !sustainEnabled; // Inverte o estado do sustain
    const sustainBtnText = sustainEnabled ? 'SUSTAIN KEYBOARD ON' : 'SUSTAIN KEYBOARD OFF';
    this.innerText = sustainBtnText;

    if (!sustainEnabled) {
        Object.keys(pressedKeys).forEach((note) => {
            playNoteStop(note);
        });
    }
});



// EVENTO PARA PRESSIONAR E LIBERAR A TECLA
document.addEventListener('keydown', function (event) {
    const pressedKey = event.key.toLowerCase();
    if (keyboardNoteMapping[pressedKey] && !pressedKeys[pressedKey]) {
        const note = keyboardNoteMapping[pressedKey];
        playNoteStart(note);
        pressedKeys[pressedKey] = true;
        const keyElement = document.querySelector(`[data-note="${note}"]`);
        if (keyElement) {
            keyElement.classList.add('pressed');
        }
    }
});


document.addEventListener('keyup', function (event) {
    const releasedKey = event.key.toLowerCase();
    if (keyboardNoteMapping[releasedKey]) {
        const note = keyboardNoteMapping[releasedKey];
        const keyElement = document.querySelector(`[data-note="${note}"]`);
        if (keyElement) {
            keyElement.classList.remove('pressed');
        }

        if (!sustainEnabled) {
            playNoteStop(note);
        }

        pressedKeys[releasedKey] = false;
    }
});


function playNoteStart(note) {
    if (!sustainEnabled || !pressedKeys[note]) {
        const audio = new Audio(audioUrls[note]);
        audio.play();
        pressedKeys[note] = audio;

        if (sustainEnabled) {
            const delayAfterPlay = 100;

            setTimeout(function () {
                const isKeyStillPressed = pressedKeys[note];

                if (!isKeyStillPressed) {
                    audio.pause();
                    audio.currentTime = 0;
                    delete pressedKeys[note];
                }
            }, delayAfterPlay);
        }
    }
}


function playNoteStop(note) {
    if (pressedKeys[note]) {
        pressedKeys[note].pause();
        pressedKeys[note].currentTime = 0;
        delete pressedKeys[note];
    }
}

