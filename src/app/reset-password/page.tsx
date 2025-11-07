'use client'
import { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('');
    setError('');
    if (!email || !code || !newPassword) {
      setError('All fields are required.');
      return;
    }
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code, newPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Password changed successfully. You can now log in.');
      } else {
        setError(data.error || 'Failed to reset password.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center' style={{backgroundImage:'url("/images/login/bg.png")'}}>
      <div className="bg-white/10 rounded-4xl mt-15 px-10 pt-3 py-15 max-w-md w-full flex flex-col items-center border-white">
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 flex-1 outline-0 border-0 mx-auto'>
          <h1 className='text-[7vw] mb-3 text-center' style={{fontFamily:'Ghastly Panic', color: 'white'}}>
            Reset Password
          </h1>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
          <input
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Enter the 8-digit code"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            placeholder="New password"
          />
          <button type="submit" className="bg-black/60 mb-1">Change Password</button>
          {message && <p className="mb-0 text-center text-green-400">{message}</p>}
          {error && <p className="mb-0 text-center text-red-400">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
