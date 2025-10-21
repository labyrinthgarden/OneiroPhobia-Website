'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (event:MouseEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        window.location.href = '/';
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className='min-h-screen' style={{backgroundImage:'url("/images/login/bg.png")'}}>
      <div className='flex flex-col items-center justify-center'>
        <div className=" bg-white/10 rounded-4xl mt-15 px-10 pt-3 py-15 max-w-md
          w-full flex flex-col items-center border-white">
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 flex-1 m-50%
          outline-0 border-0 mx-auto'>
            <h1 className='text-[13vw] mb-3 text-center'
              style={{fontFamily:'Ghastly Panic',/*WebkitTextStroke: '3px black',*/
                  color: 'white'}}>
              Login
            </h1>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              className="mb-10"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <button type="submit"
              className="bg-black/60 mb-1"
            >Login</button>
            {error && <p className="mb-0 text-center">{error}</p>}
            <div className="flex flex-col items-center gap-2 mt-1">
              <Link href="/forgot-password" className="text-sm text-blue-300 hover:underline">
                Forgot password?
              </Link>
              <span className="text-sm text-white">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-blue-300 hover:underline">
                  Create one
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
