let where_am_i = 1;

function next() {
    if(where_am_i === 5) return;
    else if(where_am_i === 1) {
        us();
        where_am_i = 2;
    }
}

function previous() {
    if(where_am_i === 1) return;
    else if(where_am_i === 2) {
        my_message();
        where_am_i = 1;
    }
}

function my_message() {
    const container = document.getElementById("my_text");
    container.innerHTML = "";
    container.innerHTML = `
        <p class="little">Parte de la historia va a parar a las palmas de las manos. Las mías, flacas e indeseables, 
            cuentan una necesidad; casi siempre moviéndose, creando más arrugas de las habituales, 
            se desfiguran como olas del mar. Como un ser independiente, siempre buscan a su gemela idéntica, 
            una réplica suave e inquieta: tu mano. <br> <br>
            El primer contacto, una inmensidad insondable, crea una patulea de colores, 
            un tamborileo eterno que representan mis latidos.
            <br> <br>
            Tú, que eres luz, que eres esperanza e idilio, luchas por ver la belleza en las cosas. 
            Eres ese sentimiento de entero deseo por sentirse bien, eres mi raison d’être.
            
            <img src="sun.png" alt="my_love" class="rose">
            <br> <br>
            Brisia, lo mejor que te puedo dar en la vida no es algo material (aunque también trataré de dártelo), 
            sino una certeza; esa certeza es tranquilidad, poder decir que nada temes, que vivas la vida enseñando, 
            como me enseñas a mí, a no tener miedo. Esa certeza es la paz, que llegues a grande y lo único que 
            desees es revivir lo que experimentaste.
            <br> <br>
            <img src="moon.png" alt="moon" class="rose">
            Por último, quisiera poderte hacer saber lo que haces en la gente, porque, personalmente, en mí sucede. 
            Que a pesar de ya haber compartido contigo incontables eventos, aún sigo con esa actitud enervante cuando vamos a 
            crear uno nuevo. Que sepas, Brisia, que cuando estoy solo, cuando nadie parece estar al tanto de mí, 
            sé que no estoy solo, pues tu simple recuerdo me acompaña, y eso sucederá toda la vida.
            <br> <br>
            Mi felicidad está completa desde que te conozco. </p>
    `;
}

function us() {
    const container = document.getElementById("my_text");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="us_img">
            <p class="little"> Nosotros </p>

        </div>
    `;
}
function melodies() {
    const container = document.getElementById("content_you");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="songs">
            <p class="attributes">Tu rostro                                                                 
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/7v5OpWQsjk8EVecwnHpNIj?si=f2c9932d3615479f')">--></span></p>
            <p class="attributes">Tu voz
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/5peA2cq7ptJbJOQqrx4Zpp?si=499110e59193485e')">--></span></p>
            <p class="attributes">Tus ojos
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/3zgpJfyPtpX38aZUnu4peT?si=dfcc6f67ca1c442c')">--></span></p>
            <p class="attributes">Tu presencia
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/5dyAuEQrX4T8VVleze0CRG?si=9190eaa969164a98')">--></span></p>
            <p class="attributes">Tus abrazos
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/7E1Ye3KC3SjWcDUUyBQOuA?si=534c65c6d9634937')">--></span></p>
            <p class="attributes">Tu sonrisa
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/7nTrgV4osUk3b5ZKgKEWlu?si=7c45e145a46c46db')">--></span></p>
            <p class="attributes">Tu recuerdo
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/2LMkwUfqC6S6s6qDVlEuzV?si=7ea8ea312ae14d92')">--></span></p>
            <p class="attributes">Tu corazón
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/47zglRNpxJfxadAe3C6xQe?si=824051e4eab44004')">--></span></p>
            <p class="attributes">Tu amor
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/5NQ41wfi4Pykv4eDTlAoIs?si=dd35a92aed594967')">--></span></p>
            <p class="attributes">Tu cariño
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/3ttgpUD3IQaaJBaAbRQCsM?si=c868e0ee978240d0')">--></span></p>
            <p class="attributes">Tú
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/4x48SRR0MmHwZFqKlN0zRr?si=13f2853e904a4aa2')">--></span></p>
            </div>
    `;
}

function about_you() {
    const container = document.getElementById("content_you");
    container.innerHTML = "";
    container.innerHTML = `
        
    `;
}

function your_image() {
    const container = document.getElementById("content_you");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="image">
            <img src>
        </div>
    `;
}
function go_to_song(url) {
    window.open(url, "_blank");
}
