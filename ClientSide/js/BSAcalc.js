document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculationForm');
    const collapsibles = document.getElementsByClassName('collapsible');
    
    Array.from(collapsibles).forEach(function(collapsible) {
        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

        
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');
        calculateBSA();
        

    });
});


function calculateBSA() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const eGFR = parseFloat(document.getElementById('eGFR').value);

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid numbers for weight and height.');
        return;
    }

    // BSA calculation
    const bsa = Math.sqrt((weight * height) / 3600).toFixed(2);
    console.log(bsa);

    document.getElementById('results').textContent = `Body Surface Area (BSA): ${bsa} m²`;
    calculateMedicines(bsa);
}

function calculateMedicines(bsa) {
    // Existing medications
    document.getElementById('cytarabine').textContent = `${bsa * 100} mg`;
    document.getElementById('daunorubicin60').textContent = `${bsa * 60} mg`;
    document.getElementById('daunorubicin75').textContent = `${bsa * 75} mg`;
    document.getElementById('daunorubicin90').textContent = `${bsa * 90} mg`;
    document.getElementById('idarubicin').textContent = `${bsa * 12} mg`;

    // AML HiDAC
    document.getElementById('cytarabineHiDAC').textContent = `${bsa * 3000} mg`;

    // AML salvage therapy FLAG-IDA
    document.getElementById('fludarabine').textContent = `${bsa * 30} mg`;
    document.getElementById('cytarabineFLAG').textContent = `${bsa * 2000} mg`;
    document.getElementById('idarubicinFLAG').textContent = `${bsa * 10} mg`;

    // AML HiDAC Salvage
    document.getElementById('cytarabineSalvage').textContent = `${bsa * 3000} mg`;

    // Breast cancer Adjuvant AC
    document.getElementById('cyclophosphamideAC').textContent = `${bsa * 600} mg`;
    document.getElementById('adriamycinAC').textContent = `${bsa * 60} mg`;

    // Breast cancer Adjuvant FAC
    document.getElementById('5fuFAC').textContent = `${bsa * 500} mg`;
    document.getElementById('adriamycinFAC').textContent = `${bsa * 50} mg`;
    document.getElementById('cyclophosphamideFAC').textContent = `${bsa * 500} mg`;

    // Breast cancer Adjuvant CMF
    document.getElementById('cyclophosphamideCMF').textContent = `${bsa * 100} mg`;
    document.getElementById('methotrexateCMF').textContent = `${bsa * 40} mg`;
    document.getElementById('5fuCMF').textContent = `${bsa * 500} mg`;

    // Breast cancer Adjuvant taxanes
    document.getElementById('paclitaxel175').textContent = `${bsa * 175} mg`;
    document.getElementById('paclitaxel200').textContent = `${bsa * 200} mg`;
    document.getElementById('paclitaxel220').textContent = `${bsa * 220} mg`;
    document.getElementById('paclitaxel250').textContent = `${bsa * 250} mg`;
    document.getElementById('paclitaxel80').textContent = `${bsa * 80} mg`;
    document.getElementById('docetaxel100').textContent = `${bsa * 100} mg`;

    // Breast cancer Adjuvant TAC
    document.getElementById('cyclophosphamideTAC').textContent = `${bsa * 600} mg`;
    document.getElementById('adriamycinTAC').textContent = `${bsa * 60} mg`;
    document.getElementById('docetaxelTAC').textContent = `${bsa * 75} mg`;

    // Breast cancer Adjuvant Trastuzumab
    document.getElementById('trastuzumab8').textContent = `${bsa * 8} mg/kg`;
    document.getElementById('trastuzumab6').textContent = `${bsa * 6} mg/kg`;

    // Metastatic Breast cancer FAC
    document.getElementById('5fuFACMetastatic').textContent = `${bsa * 500} mg`;
    document.getElementById('adriamycinFACMetastatic').textContent = `${bsa * 60} mg`;
    document.getElementById('cyclophosphamideFACMetastatic').textContent = `${bsa * 600} mg`;

    // Metastatic Breast cancer AC
    document.getElementById('adriamycinACMetastatic').textContent = `${bsa * 60} mg`;
    document.getElementById('cyclophosphamideACMetastatic').textContent = `${bsa * 600} mg`;

    // Metastatic Breast cancer Paclitaxel
    document.getElementById('paclitaxelMetastatic').textContent = `${bsa * 175} - ${bsa * 250} mg`;

    // Metastatic Breast cancer Docetaxel
    document.getElementById('docetaxelMetastatic').textContent = `${bsa * 75} - ${bsa * 100} mg`;

    // Metastatic Breast cancer Salvage therapy Vinorelbine
    document.getElementById('vinorelbine').textContent = `${bsa * 25} - ${bsa * 30} mg`;

    // Metastatic Breast cancer Salvage therapy Carboplatin and Gemcitabine
    //document.getElementById('carboplatin').textContent = `AUC 5-6`;
    document.getElementById('gemcitabine').textContent = `${bsa * 800} - ${bsa * 1000} mg`;
    

    // Metastatic Breast cancer Salvage therapy and triple negative breast cancer Cisplatin and Gemcitabine
    document.getElementById('cisplatin75').textContent = `${bsa * 75} mg`;
    document.getElementById('gemcitabinemeta1g').textContent = `${bsa * 1000} mg`;

    // Metastatic Breast cancer Salvage therapy Gemcitabine
    document.getElementById('gemcitabineSalvage').textContent = `${bsa * 1000} mg`;

    // Metastatic Breast cancer Capecitabine oral
    document.getElementById('capecitabine850').textContent = `${bsa * 850} mg`;
    
}
