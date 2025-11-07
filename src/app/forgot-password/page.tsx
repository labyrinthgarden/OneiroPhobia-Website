'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('');
    setError('');
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    try {
  const response = await fetch('/api/forgot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || 'If this email exists, a recovery code has been sent.');
        // Redirigir después de 10 segundos
        setTimeout(() => {
          router.push('/reset-password');
        }, 10000);
      } else {
        setError(data.error || 'Failed to send recovery code.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='min-h-screen' style={{backgroundImage:'url("/images/login/bg.png")'}}>
      <div className='flex flex-col items-center justify-center'>
        <div className="bg-white/10 rounded-4xl mt-15 px-10 pt-3 py-15 max-w-md w-full flex flex-col items-center border-white">
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 flex-1 m-50% outline-0 border-0 mx-auto'>
            <h1 className='text-[7vw] mb-3 text-center' style={{fontFamily:'Ghastly Panic', color: 'white'}}>
              Forgot Password
            </h1>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
            <button type="submit" className="bg-black/60 mb-1">Send Reset Link</button>
            {message && <p className="mb-0 text-center text-green-400">{message}</p>}
            {error && <p className="mb-0 text-center text-red-400">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
