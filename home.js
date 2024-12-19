function updateVariants() {
        const model = document.getElementById('model').value;
        const variant = document.getElementById('variant');
        variant.innerHTML = ''; // Clear existing options

        const variants = {
            v167: ['GLE 450'],
            v177: ['A200', 'A250', 'A35'],
            c254: ['GLC 350E', 'GLC 43'],
            x254: ['GLCX 350E'],
            h247: ['GLA 250', 'GLA 35 ', 'GLA 200'],
            v223: ['S580E'],
            w214: ['E350E', 'E200'],
        };

        if (model in variants) {
            variants[model].forEach(function(variantOption) {
                const option = document.createElement('option');
                option.value = variantOption.toLowerCase().replace(/\s+/g, '');
                option.textContent = variantOption;
                variant.appendChild(option);
            });
        }
    }
    
