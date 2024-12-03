var form = document.getElementById("form")
var inputSelecionados = form.querySelectorAll('input[type="radio"]:checked')

var nome =""
var turma =""
var disciplinas = []
var hardSkills =[]
var softSkills =[]

form.addEventListener("submit",(e)=>{
    e.preventDefault()


    nome = document.getElementById('texto').value

    console.log(nome)

    var inputSelecionados = form.querySelectorAll('input[type="radio"]:checked')

    inputSelecionados.forEach(radio=>{



        if(radio.name == "turma"){
            console.log(radio.value)

            turma = radio.value
        }

        if(radio.id == "disciplina"){
            console.log(radio.value)

            disciplinas.push(radio.value)


        }
        
        if(radio.id == "hard-skills"){
            console.log(radio.value)
            hardSkills.push(radio.value)



        }
        if(radio.id == "soft-skills"){
            console.log(radio.value)
            softSkills.push(radio.value)


        }

    })

    sessionStorage.setItem('nome',nome)
    sessionStorage.setItem('turma',turma)
    sessionStorage.setItem('disciplinas', JSON.stringify(disciplinas));
    sessionStorage.setItem('hardSkills', JSON.stringify(hardSkills));
    sessionStorage.setItem('softSkills', JSON.stringify(softSkills));




    window.location.href = 'login3.html';





})