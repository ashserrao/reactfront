

const initialState = {
  // Other state properties...
  masteruser: {
    // Other masteruser properties...
    transactions: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;

      case 'UPDATE_MASTERUSER_DETAILS':
      return {
        ...state,
        masteruser:action.payload,
        
      };
    case 'UPDATE_BENEFICIARY_DETAILS':
      return { ...state, beneficiary: action.payload };

      case 'UPDATE_KYC_DETAILS':
      return {
        ...state,
        masteruser: {
          ...state.masteruser,
          kycdetails: action.payload,
        },
      };

    case 'LOGOUT_USER':
      return null; // Reset user state to null when logging out
    default:
      return state;
   
  }
};

export default userReducer;



