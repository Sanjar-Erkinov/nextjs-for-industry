import Link from 'next/link'

function LoginPage() {
  return (
    <div className="container my-4">
      <div className="card mx-auto shadow-sm bg-body rounded" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <form className='mx-auto my-4' style={{ maxWidth: '400px' }}>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control py-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
              {/* <div id="emailHelp" className="form-text pt-2" style={{ color: 'red' }}> Here Error Text </div> */}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control  py-3" id="exampleInputPassword1" />
            </div>

            <p className="my-2"> You don't have an account?
              <Link href='/register'><a style={{ color: 'crimson' }}> Register</a></Link>
            </p>
            <div className="d-grid gap-2 my-4">
              <button type="submit" className="btn btn-primary block py-3">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
