import React from 'react';
import MobileStepper from '@mui/material/MobileStepper';

function Caroussel() {
    return (
        <div>
            <h1>Tout nos produits</h1>
            <MobileStepper
                variant="dots"
                steps={3}
                position="dynamic"
                activeStep={3}
                nextButton={
                    <button>
                        Next
                    </button>
                }
                backButton={
                    <button>
                        Back
                    </button>
                }
            />
        </div>
    )
}

export default Caroussel