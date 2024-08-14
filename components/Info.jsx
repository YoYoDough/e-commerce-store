import Link from 'next/link';

const { COMPANY_NAME, SITE_NAME } = process.env;

const Info = () => {
    const currentYear = new Date().getFullYear();
    const copyrightDate = `2023-${currentYear}`;
    const skeleton = "block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300 text-black dark:text-neutral-300";
    const copyrightName = COMPANY_NAME || SITE_NAME || '';
    return (
        <footer className="text-sm text-neutral-500 dark:text-neutral-400">
            <div className="mx-auto flex w-full max-w-7xl flex-row gap-6 border-t border-neutral-200 px-6 py-12 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
                {/* Placeholder for any additional content or links */}
                    <nav className="flex flex-row gap-2 md:flex-col">
                        <Link href="/"
                        className={skeleton}
                        >
                            Home
                        </Link>
                        <Link href="/about"
                        className={skeleton}>
                            About
                        </Link>
                        <Link href="/terms"
                        className={skeleton}>
                            Terms & Conditions
                        </Link>
                        <Link href="/shipping"
                        className={skeleton}>
                            Shipping & Return Policy
                        </Link>
                        <Link href="/privacy"
                        className={skeleton}>
                            Privacy Policy
                        </Link>
                        <Link href="/faq"
                        className={skeleton}>
                            FAQ
                        </Link>
                    </nav>
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
