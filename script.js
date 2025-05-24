function deploy() {
    const container = document.getElementById("message");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="nav">
        <p class="sections_you"><span class="col" id="first_call">Mi mensaje</span></p>
        <p class="sections_you"><span class="col" id="second_call">Algo sobre ti</span></p>
        <p class="sections_you"><span class="col" id="third_call">Tu imagen</span></p>
        <p class="sections_you"><span class="col" id="fourth_call">Recuerdos</span></p>
        <p class="sections_you"><span class="col" id="fifth_call">Tú en las letras</span></p>
        <p class="sections_you"><span class="col" id="sixth_call" onclick="melodies()">Melodías</span></p>
    </div>
    <div class="content_you" id="content_you">
        <div class="my_text"></div>
        <img src="rose.png" alt="my_love" class="rose">
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
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/4nBHJVoRtsU2S7ONexL7iC?si=a7ab319232304365')">--></span></p>
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
            <p class="attributes">Tú
            <span class="change_song" onclick="go_to_song('https://open.spotify.com/intl-es/track/4x48SRR0MmHwZFqKlN0zRr?si=13f2853e904a4aa2')">--></span></p>
            </div>
    `;
}

function go_to_song(url) {
    window.open(url, "_blank");
}