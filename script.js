const name = document.getElementById('name').value
const coures = document.getElementById('coures').value
const email = document.getElementById('email').value
const url = document.getElementById('url').value
const img = document.getElementById('img')
const carreer = document.getElementById('carreer').value
const software = document.getElementById('software').value
const tools = document.getElementById('tools').value
const certificate = document.getElementById('certificate').value
const areaofinterest = document.getElementById('areaofinterest').value
const projectundertaken = document.getElementById('projectundertaken').value
const workExperience = document.getElementById('workExperience').value
const coCurricularActivity = document.getElementById('coCurricularActivity').value
const keyStrengths = document.getElementById('keyStrengths').value
const academicCredentials = document.getElementById('academicCredentials').value
const date = document.getElementById('date').value
const gender = document.getElementById('gender')
gender.options[gender.selectedIndex].value;
const marital = document.getElementById('marital')
marital.options[marital.selectedIndex].value;
const fathername = document.getElementById('fathername').value
const mothername = document.getElementById('mothername').value
const language = document.getElementById('language').value
const readwrite = document.getElementById('readwrite').value
const nationality = document.getElementById('nationality').value
const mobility = document.getElementById('mobility').value
const place = document.getElementById('place').value




function Render(){
    const pdf = new jsPDF
    pdf.text('Hello',10,10)
    pdf.save('resume.pdf')
}