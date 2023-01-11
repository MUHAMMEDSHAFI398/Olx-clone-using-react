import React from 'react';

import Signup from '../Components/Signup/Signup';
import { Loading } from '../store/Context';

function SignupPage() {
  return (
    <div>
       <Loading>
       <Signup />
       </Loading>
    </div>
  );
}

export default SignupPage;
