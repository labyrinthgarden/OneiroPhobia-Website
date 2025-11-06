'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    // password validation
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must contain at least one lowercase letter');
      return;
    }
    if (!/[0-9]/.test(password)) {
      setError('Password must contain at least one digit');
      return;
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      setError('Password must contain at least one special character');
      return;
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Registration failed');
        return;
      }

      const signInResponse = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (signInResponse?.error) {
        setError('Registration successful but login failed, try logging again');
      } else {
        router.push('/');
      }
    } catch (error) {
      setError('An error occurred during registration');
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
                    sign up
            </h1>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
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
            >Sign Up</button>
            {error && <p className="mb-0 text-center max-w-70">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
