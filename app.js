//Pegar o tamanho da tela.
const TELA_HTML = document.documentElement.clientWidth;
let prevScrollpos = window.pageYOffset;
const unidadesDOM = document.querySelector("#unidade");
const servicosDOM = document.querySelector("#servico");
const barbeirosDOM = document.querySelector("#barbeiro");
const dataDOM = document.querySelector("#data");


const palacyData = {
    "unidades": {"1": "Unidade Calama - Av. Calama, 5551, Flodoado Pontes Pinto, 76820-611, Porto Velho/RO"},
    "servicos": {
        "1": "Corte - R$ 30,00",
        "2": "Corte e Barba - R$ 60,00",
        "3": "Barba Terapia - R$ 30,00",
        "4": "Selagem - R$ 70,00",
        "5": "Corte e Selagem - R$ 100,00",
        "6": "Penteado - R$ 15,00",
        "7": "Tintura - R$ 60,00",
        "8": "Sobrancelha - R$ 10,00"
    },
    "barbeiros": {
        "1": {"nome": "Mateus Árras", "imagem": "https://fastbarber.app/default/images/profissionais/ceara3.png"},
        "2": {"nome": "Braulio Sallos", "imagem": "https://fastbarber.app/default/images/profissionais/ceara1.jpg"}
    }
}

document.querySelector("#agendamento-form").addEventListener("change", (ev)=>{
    if(unidadesDOM.value != "0" && servicosDOM.value != "0" && dataDOM.value != "" && barbeirosDOM.value != "0"){
        const data = dataDOM.value.split("T")[0];
        const dia = data.split("-")[2];
        const mes = data.split("-")[1];
        const hora = dataDOM.value.split("T")[1];

        const agradecimento = `<p>Olá, muito obrigado por nos escolher!
            Meu nome é <b>${palacyData["barbeiros"][barbeirosDOM.value]["nome"]}</b>,
            e vou ter o prazer de te atender para um serviço de <b>${palacyData["servicos"][servicosDOM.value]}</b>,
            no dia <b>${dia}/${mes}</b> às <b>${hora}</b>, em <b>${palacyData["unidades"][unidadesDOM.value]}</b>.
            Até lá!</p>`

        document.querySelector(".agradecimento").innerHTML = `
        <div class="avatar-container">
            <img src="${palacyData["barbeiros"][barbeirosDOM.value]["imagem"]}" alt="barbeiro avatar">
        </div>
        ${agradecimento}
        `;
    }
})

dataDOM.addEventListener("change", (ev) =>{
    const data = dataDOM.value.split("T")[0];
    const dia = data.split("-")[2];
    const mes = data.split("-")[1];
    const ano = data.split("-")[0];
    const hora = dataDOM.value.split("T")[1];
})

window.onscroll = function() {
    const headerDOM = document.querySelector(".page-header");
    let currentScrollPos = window.pageYOffset;
    if(currentScrollPos == 0){
        headerDOM.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    else if (prevScrollpos > currentScrollPos) {
        headerDOM.style.top = "0";
        headerDOM.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    } else{
        headerDOM.style.top = "-100px";
    };
    prevScrollpos = currentScrollPos;
}

window.onload = function(){
    const date = new Date();
    const dia = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const mes = date.getMonth() < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const ano = date.getFullYear()
    dataDOM.min = `${ano}-${mes}-${dia}T09:00:00`; //YYYY-MM-DDThh:mm:ss.ms


    Object.entries(palacyData.unidades).forEach((value) => {
        unidadesDOM.innerHTML += `<option value="${value[0]}">${value[1]}</option>`;
    })

    Object.entries(palacyData.servicos).forEach((value) => {
        servicosDOM.innerHTML += `<option value="${value[0]}">${value[1]}</option>`;
    })
    Object.entries(palacyData.barbeiros).forEach((value) => {
        barbeirosDOM.innerHTML += `<option value="${value[0]}">${value[1]["nome"]}</option>`;
    })

}

document.querySelector(".mobile-menu").addEventListener("click", ()=>{
	document.querySelector(".bar-1").classList.toggle('one');
	document.querySelector(".bar-1").classList.remove('no-anim');
	document.querySelector(".bar-2").classList.toggle('two');
	document.querySelector(".bar-2").classList.remove('no-anim');
	document.querySelector(".bar-3").classList.toggle('three');
    document.querySelector(".bar-3").classList.remove('no-anim');
    document.querySelector(".side-mobile-menu").classList.toggle("show-side-menu");
    document.body.classList.toggle("prevent-body-scroll");

});

document.querySelector(".mobile-schedule").addEventListener("click", ()=>{
    document.querySelector(".bar-1").classList.remove('one');
	document.querySelector(".bar-2").classList.remove('two');
	document.querySelector(".bar-3").classList.remove('three');
    document.querySelector(".side-mobile-menu").classList.remove("show-side-menu");
    document.body.classList.remove("prevent-body-scroll");
});

