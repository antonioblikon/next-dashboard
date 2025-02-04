import { Inter } from 'next/font/google';
import { Oswald } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const oswald = Oswald({ subsets: ['latin'], weight: ["200", "500"] });

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
});