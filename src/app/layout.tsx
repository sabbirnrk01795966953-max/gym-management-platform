import type { Metadata } from 'next';import './globals.css';import Header from '@/components/Header';import Footer from '@/components/Footer';import {gym} from '@/lib/content';
export const metadata: Metadata={title:`${gym.name} | Train Beyond Limits`,description:'Premium training space, expert coaching and memberships built for your goals.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header name={gym.name}/>{children}<Footer/></body></html>}
