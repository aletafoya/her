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
        <p class="sections_you"><span class="col" id="sixth_call">Melodías</span></p>
    </div>
    <div class="content_you">
        <div class="my_text"></div>
        <img src="rose.png" alt="my_love" class="rose">
    </div>
    `;

}