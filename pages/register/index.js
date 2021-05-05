import Link from 'next/link'
import Head from 'next/head'
import { useState, useContext } from 'react'
import valid from '../../utils/valid';
import { DataContext } from '../../store/GlobalState';

function RegisterPage() {
  return (
    <div className="container my-4">
      <div className="card mx-auto shadow-sm bg-body rounded" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <form className='mx-auto my-4' style={{ maxWidth: '400px' }}>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" className="form-control py-3" id="name" aria-describedby="emailHelp" />
              {/* <div id="emailHelp" className="form-text pt-2" style={{ color: 'red' }}> Here Error Text </div> */}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control py-3" id="email" aria-describedby="emailHelp" />
              {/* <div id="emailHelp" className="form-text pt-2" style={{ color: 'red' }}> Here Error Text </div> */}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control  py-3" id="password" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
              <input type="password" className="form-control  py-3" id="password2" />
            </div>

            <p className="my-2"> Already have an account?
              <Link href='/login'><a style={{ color: 'crimson' }}> Login</a></Link>
            </p>
            <div className="d-grid gap-2 my-4">
              <button type="submit" className="btn btn-primary block py-3">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
