import Link from 'next/link';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

const Info = () => {
    const currentYear = new Date().getFullYear();
    const copyrightDate = `2023-${currentYear}`;
    const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
    const copyrightName = COMPANY_NAME || SITE_NAME || '';

    return (
        <footer className="text-sm text-neutral-500 dark:text-neutral-400">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
                {/* Placeholder for any additional content or links */}
                <Suspense
                    fallback={
                        <div className="flex h-[188px] w-[200px] flex-col gap-2">
                            <div className={skeleton} />
                            <div className={skeleton} />
                            <div className={skeleton} />
                            <div className={skeleton} />
                            <div className={skeleton} />
                            <div className={skeleton} />
                        </div>
                    }
                >
                    <nav className="flex flex-col gap-2 md:flex-row">
                        <Link href="/"
                        className={skeleton}>
                            Home
                        </Link>
                        <Link href="/about"
                        className="text-black dark:text-white">
                            About
                        </Link>
                        <Link href="/terms"
                        className="text-black dark:text-white">
                            Terms & Conditions
                        </Link>
                        <Link href="/shipping"
                        className="text-black dark:text-white">
                            Shipping & Return Policy
                        </Link>
                        <Link href="/privacy"
                        className="text-black dark:text-white">
                            Privacy Policy
                        </Link>
                        <Link href="/faq"
                        className="text-black dark:text-white">
                            FAQ
                        </Link>
                    </nav>
                </Suspense>
            </div>
            <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
                    <p>
                        &copy; {copyrightDate} {copyrightName}
                        {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''}
                        All rights reserved.
                    </p>
                    <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
                    <p>Designed in California</p>
                    <p className="md:ml-auto">
                        <a href="https://vercel.com" className="text-black dark:text-white">
                            Crafted by ▲ Straight
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Info;