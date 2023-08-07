import React from 'react';

import Accounts from './admin/Accounts';
import UnauthorizedPage from './Utility/UnauthorizedPage'

function PrivateRoutes() {
  
  const userRole = localStorage.getItem('role');
  //const token = localStorage.getItem('token');
  


return userRole === 'ROLE_ADMIN' ? <Accounts/> :<UnauthorizedPage/>


}

export default PrivateRoutes;
