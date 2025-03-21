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

        const eGFR = document.getElementById('eGFR').value;
        const AUC = document.getElementById('AUC').value;

        if (!(eGFR === '' && AUC === '')) {
            calculateCarboplatin(eGFR, AUC);
        }
        

    });
});

function calculateCarboplatin(eGFR, AUC) {
    

    const dose = ((parseFloat(eGFR) + 25) * parseFloat(AUC)).toFixed(2);
    console.log(dose);

    document.getElementById('carboplatin').textContent = `${dose} mg`;
}


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
    document.getElementById('daunorubicin60rti').textContent = `${(bsa * 60).toFixed(2)} mg`;
    document.getElementById('daunorubicin75rti').textContent = `${(bsa * 75).toFixed(2)} mg`;
    document.getElementById('daunorubicin90rti').textContent = `${(bsa * 90).toFixed(2)} mg`;
    document.getElementById('idarubicinAPL').textContent = `${(bsa * 12).toFixed(2)} mg`;

    // Maintenance Chemo Therapy
    document.getElementById('ATRAmct').textContent = `${(bsa * 45).toFixed(2)} mg`
    document.getElementById('6mp100').textContent = `${(bsa * 100).toFixed(2)} mg`;
    document.getElementById('methotrexate').textContent = `${(bsa * 10).toFixed(2)} mg`;

    //ALL --------

    //month one
    document.getElementById('daunorubicin60crm1').textContent = `${(bsa * 60).toFixed(2)} mg`;
    document.getElementById('cyclophosphamide300').textContent = `${(bsa * 300).toFixed(2)} mg`;
    document.getElementById('prednisone60').textContent = `${(bsa * 60).toFixed(2)} mg`;
    document.getElementById('vincristine1.4').textContent = `${(bsa * 1.4).toFixed(2)} mg`;
    document.getElementById('lasparaginase6000').textContent = `${(bsa * 6000).toFixed(2)} u`;

    //month two
    document.getElementById('cytarabine600').textContent = `${(bsa * 600).toFixed(2)} mg`;
    document.getElementById('etoposide300').textContent = `${(bsa * 300).toFixed(2)} mg`;
    document.getElementById('cyclophosphamide300m2').textContent = `${(bsa * 300).toFixed(2)} mg`;

    //cns prophylaxis
    document.getElementById('methotrexate10').textContent = `${(bsa * 10).toFixed(2)} mg/m² intrathecally`;

    //general prophylaxis
    document.getElementById('methotrexate10gp').textContent = `${(bsa * 10).toFixed(2)} mg/m² orally weekly`;
    document.getElementById('6mp75').textContent = `${(bsa * 75).toFixed(2)} mg`;
    document.getElementById('6mp90').textContent = `${(bsa * 90).toFixed(2)} mg`;
    document.getElementById('6mp100gp').textContent = `${(bsa * 100).toFixed(2)} mg`;


    //CLL -------
    // FCR younger patients
    document.getElementById('fludarabinefcr').textContent = `${(bsa * 25).toFixed(2)} mg`;
    document.getElementById('cyclophosphamide250').textContent = `${(bsa * 250).toFixed(2)} mg`;
    document.getElementById('rituximab').textContent = `${(bsa * 375).toFixed(2)} mg`;

    // CCR over 70 years
    document.getElementById('chlorambucil').textContent = `${(bsa * 6).toFixed(2)} mg`;
    document.getElementById('cyclophosphamide100').textContent = `${(bsa * 100).toFixed(2)} mg`;
    document.getElementById('rituximabccr').textContent = `${(bsa * 375).toFixed(2)} mg`;


    // Hodgkin Lymphoma -----------

    // ABVD
    document.getElementById('adriamycin25').textContent = `${(bsa * 25).toFixed(2)} mg`;
    document.getElementById('bleomycin10').textContent = `${(bsa * 10).toFixed(2)} mg`;
    document.getElementById('vinblastine6').textContent = `${(bsa * 6).toFixed(2)} mg`;
    document.getElementById('dacarbazine375').textContent = `${(bsa * 375).toFixed(2)} mg`;

    // BEACOPP
    document.getElementById('bleomycin10b').textContent = `${(bsa * 10).toFixed(2)} units`;
    document.getElementById('etoposide100').textContent = `${(bsa * 120).toFixed(2)} mg`;
    document.getElementById('adriamycin25bp').textContent = `${(bsa * 25).toFixed(2)} mg`;
    document.getElementById('cyclophosphamide600').textContent = `${(bsa * 600).toFixed(2)} mg`;
    document.getElementById('vincristine1.4bp').textContent = `${(bsa * 1.4).toFixed(2)} mg`;


    // Non-Hodgkin's Lymphoma --------

    //CVP
    document.getElementById('cyclophosphamide750').textContent = `${(bsa * 750).toFixed(2)} mg`;
    document.getElementById('vincristine1.4cvp').textContent = `${(bsa * 1.4).toFixed(2)} mg (Max dose - 2.5mg)`;
    document.getElementById('prednisone100').textContent = `${(bsa * 100).toFixed(2)} mg`;

    //R-CVP
    document.getElementById('rituximab375').textContent = `${(bsa * 375).toFixed(2)} mg`;

    //R-CHOP
    document.getElementById('cyclophosphamide750rchop').textContent = `${(bsa * 750).toFixed(2)} mg`;
    document.getElementById('adriamycin50').textContent = `${(bsa * 50).toFixed(2)} mg`;
    document.getElementById('vincristine1.4rchop').textContent = `${(bsa * 1.4).toFixed(2)} mg (Max dose - 2.5mg)`;
    document.getElementById('prednisone100rchop').textContent = `${(bsa * 100).toFixed(2)} mg`;
    document.getElementById('rituximab375rchop').textContent = `${(bsa * 375).toFixed(2)} mg`;

    //R-ESHAP
    document.getElementById('cisplatin25').textContent = `${(bsa * 25).toFixed(2)} mg`;
    document.getElementById('etoposide40').textContent = `${(bsa * 60).toFixed(2)} mg`;
    document.getElementById('methylprednisolone500').textContent = `${(bsa * 500).toFixed(2)} mg`;
    document.getElementById('cytarabine2000').textContent = `${(bsa * 2000).toFixed(2)} mg`;
    document.getElementById('rituximab375reshap').textContent = `${(bsa * 375).toFixed(2)} mg`;

    //R-B
    document.getElementById('rituximab375rb').textContent = `${(bsa * 375).toFixed(2)} mg`;
    document.getElementById('bendamustine90').textContent = `${(bsa * 50).toFixed(2)} - ${(bsa * 100).toFixed(2)} mg`;

    //Breast Cancer --------  

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
    document.getElementById('gemcitabine').textContent = `${(bsa * 800).toFixed(2)} - ${(bsa * 1000).toFixed(2)} mg`;

    //triple negative f
    document.getElementById('cisplatin40f').textContent = `${(bsa * 45).toFixed(2)} mg`;
    document.getElementById('gemcitabine1gf').textContent = `${(bsa * 1000).toFixed(2)} mg`;

    // Mtriple negative g
    document.getElementById('cisplatin75g').textContent = `${(bsa * 75).toFixed(2)} mg`;
    document.getElementById('gemcitabinemeta1gg').textContent = `${(bsa * 1000).toFixed(2)} mg`;

    // Metastatic Breast cancer Salvage therapy Gemcitabine
    document.getElementById('gemcitabineSalvageh').textContent = `${(bsa * 1000).toFixed(2)} mg`;

    // Metastatic Breast cancer Capecitabine oral
    document.getElementById('capecitabine850o').textContent = `${(bsa * 850).toFixed(2)} mg`;
    
}
