

const nome = sessionStorage.getItem('nome')
const turma = sessionStorage.getItem('turma')
const disciplinas = JSON.parse(sessionStorage.getItem('disciplinas'));
const hardSkills = JSON.parse(sessionStorage.getItem('hardSkills'));
const softSkills = JSON.parse(sessionStorage.getItem('softSkills'));

campoNome = document.getElementById("nome")
campoTurma = document.getElementById("turma")
campoDisciplinas = document.getElementById("disciplinas")
campoHard = document.getElementById("hardSkills")
campoSoft = document.getElementById("softSkills")

campoNome.textContent += nome
campoTurma.textContent += turma

disciplinas.forEach(disciplina => {
    console.log("funcionando    ")

    campoDisciplinas.innerHTML += `
        <h1 class="regular fonte20">${disciplina}</h1>

    `
    
});

hardSkills.forEach(hard => {
    console.log("funcionando    ")

    campoHard.innerHTML += `
        <h1 class="regular fonte20">${hard}</h1>

    `
    
});

softSkills.forEach(soft => {
    console.log("funcionando    ")

    campoSoft.innerHTML += `
        <h1 class="regular fonte20">${soft}</h1>

    `
    
});




