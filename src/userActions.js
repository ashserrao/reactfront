export const updateBeneficiaryDetails = (beneficiaryDetails) => {
    return {
      type: 'UPDATE_BENEFICIARY_DETAILS',
      payload: beneficiaryDetails,
    };
  };

  export const updatedMasteruserDetails = (masteruserDetails) => {
    return {
      type: 'UPDATE_MASTERUSER_DETAILS',
      payload: masteruserDetails,
    };
  };

  export const updateKycDetails = (kycDetails) => {
    return {
      type: 'UPDATE_KYC_DETAILS',
      payload: kycDetails,
    };
  };

  

  export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
};


