
function Render(){
    const name = document.getElementById('name').value
    const coures = document.getElementById('coures').value
    const email = document.getElementById('email').value
    const url = document.getElementById('url').value
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
    const optionalGender = gender.options[gender.selectedIndex].value;
    const marital = document.getElementById('marital')
    const optionaMarital = marital.options[marital.selectedIndex].value;
    const fathername = document.getElementById('fathername').value
    const mothername = document.getElementById('mothername').value
    const language = document.getElementById('language').value
    const readwrite = document.getElementById('readwrite').value
    const nationality = document.getElementById('nationality').value
    const mobility = document.getElementById('mobility').value
    const place = document.getElementById('place').value


    const pdf = new jsPDF

    pdf.text(`Name : ${name}`,10,10)
    pdf.text(`Course : ${coures}`,10,18)
    pdf.text(`Email : ${email}`,10,27)
    pdf.text(`LinkedIn : ${url}`,10,36)
    pdf.text(`Career Objective : ${carreer}`,10,45)
    pdf.text(`Software Proficiency : ${software}`,10,54)
    pdf.text(`Tools : ${tools}`,10,63)
    pdf.text(`Certificate : ${certificate}`,10,72)
    pdf.text(`Area of interest : ${areaofinterest}`,10,81)
    pdf.text(`Project Under Taken : ${projectundertaken}`,10,90)

    pdf.text(`Work Experience : ${workExperience}`,10,99)
    pdf.text(`Co Curricular Activity : ${coCurricularActivity}`,10,108)
    pdf.text(`Key strengths : ${keyStrengths}`,10,117)
    pdf.text(`Academic Credentials : ${academicCredentials}`,10,126)
    pdf.text(`Personal Details : ${carreer}`,10,135)
    pdf.text(`Date of Birth : ${date}`,10,144)
    pdf.text(`Gender : ${optionalGender}`,10,153)
    pdf.text(`Father’s Name : ${fathername}`,10,162)
    pdf.text(`Mother’s Name : ${mothername}`,10,171)
    pdf.text(`Marital Status : ${optionaMarital}`,10,180)
    pdf.text(`Languages known : ${language}`,10,189)
    pdf.text(`Read & Write : ${readwrite}`,10,198)
    pdf.text(`Nationality : ${nationality}`,10,207)
    pdf.text(`Mobility : ${mobility}`,10,216)
    pdf.text(`Place : ${place}`,10,225)

    pdf.save('resume.pdf')
}