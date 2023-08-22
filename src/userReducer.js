

const initialState = {
  isAuthenticated: false,
  user: null,
  userDetails: {},
  masteruser: {
    transactions: [],
    kycdetails: {
      imageSrc: null,
    },
  },
  beneficiary: {}
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

      // case 'UPDATE_IMAGE_DETAILS':
      //   return {
      //     ...state,
      //     masteruser: {
      //       ...state.masteruser,
      //       kycdetails: {
      //         ...state.masteruser.kycdetails,
      //         imageSrc:action.payload,
      //       },
      //     },
      //   };
  

    case 'LOGOUT_USER':
      return {
        ...initialState, // Reset to initial state on logout
      };
    default:
      return state;
   
  }
};

export default userReducer;



