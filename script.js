function addCertificate(){
    const certificateCloneModel = document.getElementById('certificateCloneModel')
    const tableToModify = document.getElementById('tableToModify')
    const clone = certificateCloneModel.cloneNode(true);
    clone.class = "certificate";
    tableToModify.appendChild(clone);
}

function addAreaofinterrest(){
    const addAreaofinterrestCloneModel = document.getElementById('aresaofinerestCloneModel')
    const tableToModify = document.getElementById('tableToModify')
    const clone = addAreaofinterrestCloneModel.cloneNode(true);
    clone.class = "areaofinerest";
    tableToModify.appendChild(clone);
}

function addProjectUnderTaken(){
    const projectundertakenCloneModel = document.getElementById('projectundertakenCloneModel')
    const tableToModify = document.getElementById('tableToModify')
    const clone = projectundertakenCloneModel.cloneNode(true);
    clone.class = "projectundertaken";
    tableToModify.appendChild(clone);
}

function addWorkExperience(){
    const workExperienceCloneModel = document.getElementById('workExperienceCloneModel')
    const tableToModify = document.getElementById('tableToModify')
    const clone = workExperienceCloneModel.cloneNode(true);
    clone.class = "workExperience";
    tableToModify.appendChild(clone);
}

function addKeystrengths(){
    const KeystrengthsCloneModel = document.getElementById('KeystrengthsCloneModel')
    const tableToModify = document.getElementById('tableToModify')
    const clone = KeystrengthsCloneModel.cloneNode(true);
    clone.class = "keystrengths";
    tableToModify.appendChild(clone);
}

function addAcademicCredentials(){
    const academicCredentials = document.getElementById('academicCredentialsCloneModel')
    const tableToModify = document.getElementById('tableToModify')
    const clone = academicCredentials.cloneNode(true);
    clone.class = "academicCredentials";
    tableToModify.appendChild(clone);
}

