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
    //AML ---------
    document.getElementById('cytarabine').textContent = `${(bsa * 100).toFixed(2)} mg`;
    document.getElementById('daunorubicin60').textContent = `${(bsa * 60).toFixed(2)} mg`;
    document.getElementById('daunorubicin75').textContent = `${(bsa * 75).toFixed(2)} mg`;
    document.getElementById('daunorubicin90').textContent = `${(bsa * 90).toFixed(2)} mg`;
    document.getElementById('idarubicin').textContent = `${(bsa * 12).toFixed(2)} mg`;

    //HiDAC
    document.getElementById('cytarabineHiDAC').textContent = `${(bsa * 3000).toFixed(2)} mg`;

    // salvage therapy FLAG-IDA
    document.getElementById('fludarabine').textContent = `${(bsa * 30).toFixed(2)} mg`;
    document.getElementById('cytarabineFLAG').textContent = `${(bsa * 2000).toFixed(2)} mg`;
    document.getElementById('idarubicinFLAG').textContent = `${(bsa * 10).toFixed(2)} mg`;

    // HiDAC Salvage
    document.getElementById('cytarabineSalvage').textContent = `${(bsa * 3000).toFixed(2)} mg`;

    //APL -------
    
    // Remission Induction Therapy
    document.getElementById('ATRA').textContent = `${(bsa * 45).toFixed(2)} mg`;
    document.getElementById('idarubicinAPL').textContent = `${(bsa * 12).toFixed(2)} mg`;

    // Maintenance Chemo Therapy
    document.getElementById('6mp100').textContent = `${(bsa * 100).toFixed(2)} mg`;
    document.getElementById('methotrexate').textContent = `${(bsa * 10).toFixed(2)} mg`;

    //ALL --------

    //month one
    document.getElementById('cyclophosphamide300').textContent = `${(bsa * 300).toFixed(2)} mg`;
    document.getElementById('prednisone60').textContent = `${(bsa * 60).toFixed(2)} mg`;
    document.getElementById('vincristine1.4').textContent = `${(bsa * 1.4).toFixed(2)} mg`;
    document.getElementById('lasparaginase6000').textContent = `${(bsa * 6000).toFixed(2)} u`;

    //month two
    document.getElementById('cytarabine600').textContent = `${(bsa * 600).toFixed(2)} mg`;
    document.getElementById('etoposide300').textContent = `${(bsa * 300).toFixed(2)} mg`;
    document.getElementById('cyclophosphamide300').textContent = `${(bsa * 300).toFixed(2)} mg`;

    //cns prophylaxis
    document.getElementById('methotrexate10').textContent = `${(bsa * 10).toFixed(2)} mg/m² intrathecally`;

    //general prophylaxis
    document.getElementById('methotrexate10').textContent = `${(bsa * 10).toFixed(2)} mg/m² orally weekly`;
    document.getElementById('6mp75').textContent = `${(bsa * 75).toFixed(2)} mg`;
    document.getElementById('6mp90').textContent = `${(bsa * 90).toFixed(2)} mg`;

    //CLL -------


    // Breast cancer Adjuvant AC
    document.getElementById('cyclophosphamideAC').textContent = `${(bsa * 600).toFixed(2)} mg`;
    document.getElementById('adriamycinAC').textContent = `${(bsa * 60).toFixed(2)} mg`;

    // Breast cancer Adjuvant FAC
    document.getElementById('5fuFAC').textContent = `${(bsa * 500).toFixed(2)} mg`;
    document.getElementById('adriamycinFAC').textContent = `${(bsa * 50).toFixed(2)} mg`;
    document.getElementById('cyclophosphamideFAC').textContent = `${(bsa * 500).toFixed(2)} mg`;

    // Breast cancer Adjuvant CMF
    document.getElementById('cyclophosphamideCMF').textContent = `${(bsa * 100).toFixed(2)} mg`;
    document.getElementById('methotrexateCMF').textContent = `${(bsa * 40).toFixed(2)} mg`;
    document.getElementById('5fuCMF').textContent = `${(bsa * 500).toFixed(2)} mg`;

    // Breast cancer Adjuvant taxanes
    document.getElementById('paclitaxel175').textContent = `${(bsa * 175).toFixed(2)} mg`;
    document.getElementById('paclitaxel200').textContent = `${(bsa * 200).toFixed(2)} mg`;
    document.getElementById('paclitaxel220').textContent = `${(bsa * 220).toFixed(2)} mg`;
    document.getElementById('paclitaxel250').textContent = `${(bsa * 250).toFixed(2)} mg`;
    document.getElementById('paclitaxel80').textContent = `${(bsa * 80).toFixed(2)} mg`;
    document.getElementById('docetaxel100').textContent = `${(bsa * 100).toFixed(2)} mg`;

    // Breast cancer Adjuvant TAC
    document.getElementById('cyclophosphamideTAC').textContent = `${(bsa * 600).toFixed(2)} mg`;
    document.getElementById('adriamycinTAC').textContent = `${(bsa * 60).toFixed(2)} mg`;
    document.getElementById('docetaxelTAC').textContent = `${(bsa * 75).toFixed(2)} mg`;

    // Breast cancer Adjuvant Trastuzumab
    document.getElementById('trastuzumab8').textContent = `${(bsa * 8).toFixed(2)} mg/kg`;
    document.getElementById('trastuzumab6').textContent = `${(bsa * 6).toFixed(2)} mg/kg`;

    // Metastatic Breast cancer FAC
    document.getElementById('5fuFACMetastatic').textContent = `${(bsa * 500).toFixed(2)} mg`;
    document.getElementById('adriamycinFACMetastatic').textContent = `${(bsa * 60).toFixed(2)} mg`;
    document.getElementById('cyclophosphamideFACMetastatic').textContent = `${(bsa * 600).toFixed(2)} mg`;

    // Metastatic Breast cancer AC
    document.getElementById('adriamycinACMetastatic').textContent = `${(bsa * 60).toFixed(2)} mg`;
    document.getElementById('cyclophosphamideACMetastatic').textContent = `${(bsa * 600).toFixed(2)} mg`;

    // Metastatic Breast cancer Paclitaxel
    document.getElementById('paclitaxelMetastatic').textContent = `${(bsa * 175).toFixed(2)} - ${(bsa * 250).toFixed(2)} mg`;

    // Metastatic Breast cancer Docetaxel
    document.getElementById('docetaxelMetastatic').textContent = `${(bsa * 75).toFixed(2)} - ${(bsa * 100).toFixed(2)} mg`;

    // Metastatic Breast cancer Salvage therapy Vinorelbine
    document.getElementById('vinorelbine').textContent = `${(bsa * 25).toFixed(2)} - ${(bsa * 30).toFixed(2)} mg`;

    // Metastatic Breast cancer Salvage therapy Carboplatin and Gemcitabine
    //document.getElementById('carboplatin').textContent = `AUC 5-6`;
    document.getElementById('gemcitabine').textContent = `${(bsa * 800).toFixed(2)} - ${(bsa * 1000).toFixed(2)} mg`;

    // Metastatic Breast cancer Salvage therapy and triple negative breast cancer Cisplatin and Gemcitabine
    document.getElementById('cisplatin75').textContent = `${(bsa * 75).toFixed(2)} mg`;
    document.getElementById('gemcitabinemeta1g').textContent = `${(bsa * 1000).toFixed(2)} mg`;

    // Metastatic Breast cancer Salvage therapy Gemcitabine
    document.getElementById('gemcitabineSalvage').textContent = `${(bsa * 1000).toFixed(2)} mg`;

    // Metastatic Breast cancer Capecitabine oral
    document.getElementById('capecitabine850').textContent = `${(bsa * 850).toFixed(2)} mg`;
    
}
