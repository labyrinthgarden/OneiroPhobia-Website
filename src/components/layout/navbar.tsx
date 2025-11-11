'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Navbar: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const showNavbar = time > 2;
  const isLoggedIn = status === 'authenticated';

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black/40 py-2 text-center z-[1000] transition-all duration-1000 ${
        showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
      } flex items-center`}
    >
      <div className="mx-auto flex items-center justify-center">
        <Link
          href="/"
          className={`mx-4 bg-white text-black rounded-2xl px-3 py-1 text-sm transition-colors hover:bg-black hover:text-white flex items-center gap-2`}
        >
          <Image
            src="/images/icons/logo.PNG"
            alt="Logo"
            width={22}
            height={22}
            priority
            style={{ borderRadius: '8px' }}
          />
          <span>Homepage</span>
        </Link>
        {!isLoggedIn && (
          <Link
            href="/login"
            className={`mx-4 bg-white text-black rounded-2xl px-3 py-1 text-sm transition-colors hover:bg-black hover:text-white`}
          >
            Login&nbsp;
            <FontAwesomeIcon icon={faUser} />
          </Link>
        )}
        {isLoggedIn && (
          <>
            <Link
              href="/downloads"
              className={`mx-4 bg-white text-black rounded-2xl px-3 py-1 text-sm transition-colors hover:bg-black hover:text-white`}
            >
              Downloads
            </Link>
            <Link
              href="/account"
              className={`mx-4 bg-white text-black rounded-2xl px-3 py-1 text-sm transition-colors hover:bg-black hover:text-white`}
            >
              Account&nbsp;
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
