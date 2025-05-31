let where_am_i = 1;
let played = false;

function music() {
    if (!played) {
        const audio = document.getElementById('audio');
        if (audio) {
        audio.play().then(() => {
            played = true;
            console.log("Music");
        }).catch((error) => {
            console.log("Playback failed:", error);
        });
        }
    }
}

function next() {
    if(where_am_i === 5) {
        my_message();
        where_am_i = 1;
    }
    else if(where_am_i === 1) {
        you();
        where_am_i = 2;
    }
    else if(where_am_i === 2) {
        phrases();
        where_am_i = 3;
    }
    else if(where_am_i === 3) {
        melodies();
        where_am_i = 4;
    }
    else if(where_am_i === 4) {
        love();
        where_am_i = 5;
    }
}

function previous() {
    if(where_am_i === 1) {
        love();
        where_am_i = 5;
    }
    else if(where_am_i === 2) {
        my_message();
        where_am_i = 1;
    } 
    else if(where_am_i === 3) {
        you();
        where_am_i = 2;
    }
    else if(where_am_i === 4) {
        phrases();
        where_am_i = 3;
    }
    else if(where_am_i === 5) {
        melodies();
        where_am_i = 4;
    }
}

function my_message() {
    const container = document.getElementById("my_text");
    container.innerHTML = "";
    container.innerHTML = `
        <img src="cloud.png">
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

function you() {
    const container = document.getElementById("my_text");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="us_img">
            <p> <span class="title_you">Tú</span></p>
            <img src="us.png" alt="us" class="img_us">
            <p class="par_us"> Brisia, <br>
                sé feliz, <br>
                lucha <br>
                logra tus sueños, <br>
                sonríe, <br>
                acaricia. <br> <br>
                Si te vieras con mis ojos, <nr>
                sentirías esa ternura del viento, <br>
                aquel éxtasis del toque de tu mirada. <br> <br>
                Si te vieras con mis ojos, <br>
                sabrías que existe en el mundo un pedacito de cielo, <br>
                una persona inigualable, <br>
                alguien capaz de crear luz. <br> <br>
                Sigamos bailando, <br>
                eternamente; <br>
                que las piernas sigan el curso de la canción, <br>
                que llamamos amor. <br>
            </p>
            <img src="our_house.png" alt="us2" class="img_us2">
            <p class="par_us"> Ya existe un hogar, <br>
                para los dos, <br> 
                lo hemos construido juntos. <br>
            </p>
        </div>
    `;
}

function phrases() {
    container = document.getElementById("my_text");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="my_phrases">
            <p class="par_u">"<span class="intense">Mágicas </span>son las emociones <br>
                Que obra en mí una palabra tuya... <br>
                Que arribando de tus labios <br>
                Penetra en mi corazón... "<br><br>
            </p>    
            <p class="par_u">"Traigo los ojos con que ella miró estas cosas, <br>
                porque me dio sus <span class="intense">ojos</span> para ver."<br>
                <br>
            </p>
            <p class="par_u">"Sie konnte mir kein Wortchen sagen <br>
                Zu viele Lauscher waren wach, <br>
                Den Blick nur duft ich schurtern fragen, <br>
                Und wohl verstand ich, was <span class="intense">sie</span> sagte."<br> <br>
            </p>
            <p class="par_u">"...decirle simplemente: <br>
                te <span class="intense">deseo</span>, ven."<br> <br>
            </p>
            <p class="par_u">"When you are smiling, <br>
                the whole world, <br>
                que también vela por su amargura, <br>
                smiles with <span class="intense">you</span>."<br> <br>
            </p>
            <p class="par_u">"Que te he amado únicamente a ti,<br>
                que he entregado todo de mi ser atolondado a ti y a nadie más.<br>
                Que quiero que tú también me ames y me lo demuestres. <br>
                Que <span class="intense">amo</span> la forma en que me abrazas, lo cerca de ti que me dejas estar.<br>
                Me gustan tus dedos que se mueven y vuelven a moverse, levantando, <br>
                moviendo, revolviendo. <br>
                He mirado tu cara durante muchísimo tiempo, <br>
                y echaba de menos tus ojos cuando te alejabas de mí. <br>
                Hablarte y escuchar tu respuesta: <br>
                Ahí está el cosquilleo del <span class="intense">placer</span>."<br><br>
            </p>
            <p class="par_u">"Si cuando me muera me acabo <br>
                y nada queda de mí, <br>
                no te olvides de acordarte <br>
                que sólo te olvidé así."<br> <br>
            </p>
            <p class="par_u">"If I know what <span class="intense">love</span> is, <br>
                it is because of you."<br> <br>
            </p>
            <p class="par_u">"Say make me, remake me. <br>
            You are free to do it and I am free to let you because <br>
            look, look. Look where your hands are. 
            <span class="intense">Now</span>."<br> <br>
            </p>
            
    `;
}

function melodies() {
    const container = document.getElementById("my_text");
    container.innerHTML = "";
    container.innerHTML = `
    <div class="melodies">
        <p class="us_img"><span class="title_you">Algo de ti en la música</span></p>
        <div class="songs" onclick="go_to_song('https://open.spotify.com/intl-es/track/7v5OpWQsjk8EVecwnHpNIj?si=f2c9932d3615479f')">
            <p class="attributes">Tu rostro</p>
        </div>
        <div class="songs" onclick="go_to_song('https://open.spotify.com/intl-es/track/3zgpJfyPtpX38aZUnu4peT?si=dfcc6f67ca1c442c')">
            <p class="attributes">Tus ojos</p>
        </div>
        <div class="songs" onclick="go_to_song('https://open.spotify.com/intl-es/track/5peA2cq7ptJbJOQqrx4Zpp?si=499110e59193485e')">
            <p class="attributes">Tu voz</p>
        </div>
        <div class="songs" onclick="go_to_song('https://open.spotify.com/intl-es/track/5dyAuEQrX4T8VVleze0CRG?si=9190eaa969164a98')">
            <p class="attributes">Tu presencia</p>
        </div>
        <div class="songs" onclick="go_to_song('https://open.spotify.com/intl-es/track/7E1Ye3KC3SjWcDUUyBQOuA?si=534c65c6d9634937')">
            <p class="attributes">Tus abrazos</p>
        </div>
        <div class="songs" onclick="go_to_song('https://open.spotify.com/intl-es/track/7nTrgV4osUk3b5ZKgKEWlu?si=7c45e145a46c46db')">
            <p class="attributes">Tu sonrisa</p>
        </div>
        <div class="songs" onclick="go_to_song('https://open.spotify.com/intl-es/track/2LMkwUfqC6S6s6qDVlEuzV?si=7ea8ea312ae14d92')">
            <p class="attributes">Tu recuerdo</p>
        </div>
        <div class="songs" onclick="go_to_song('https://open.spotify.com/intl-es/track/47zglRNpxJfxadAe3C6xQe?si=824051e4eab44004')">
            <p class="attributes">Tu corazón</p>
        </div>
        <div class="songs" onclick="go_to_song('https://open.spotify.com/intl-es/track/5NQ41wfi4Pykv4eDTlAoIs?si=dd35a92aed594967')">
            <p class="attributes">Tu amor</p>
        </div>
        <div class="songs" onclick="go_to_song('https://open.spotify.com/intl-es/track/3ttgpUD3IQaaJBaAbRQCsM?si=c868e0ee978240d0')">
            <p class="attributes">Tu cariño</p>
        </div>
        <div class="songs" onclick="go_to_song('https://open.spotify.com/intl-es/track/4x48SRR0MmHwZFqKlN0zRr?si=13f2853e904a4aa2')">
            <p class="attributes">Tú</p>
        </div>
    </div>
`;

}

function love() {
    const container = document.getElementById("my_text");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="solittude">
           <img src="view.png" alt="bench" class="bench">
           <p class="us_img"> <span class="title_you">Con mucho amor</span> </p>
           <img src="heart.png" alt="heart" class="bench">
        </div>
        `;
}

function go_to_song(url) {
    window.open(url, "_blank");
}
