import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="login-box ">
            <div className="login-logo">
                <a href="/login"><b>VM</b> System</a>
            </div>
            <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <div className="form-group has-feedback">
                    <input name="txt_UserName" type="text" id="txt_UserName" placeholder="User Name" className="form-control" />
                    
                </div>
                <div className="form-group has-feedback">
                   <input name="txt_Password" type="password" id="txt_Password" className="form-control" placeholder="Password" />
                </div>
                <div className="row">

                    <div className="col-xs-4">
                        <input type="submit" name="btn_Sign" value="Sign In" id="btn_Sign" className="btn btn-primary btn-block btn-flat" />
                    </div>
             
                </div>
                
            </div>
         
        </div>
    </div>
  )
}

export default Login
