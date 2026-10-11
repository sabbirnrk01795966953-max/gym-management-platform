"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Dumbbell, ArrowUpRight } from 'lucide-react';
export default function Header({name}:{name:string}) { const [open,setOpen]=useState(false); return <header className="header"><div className="container nav"><Link href="/" className="brand"><span className="brandmark"><Dumbbell size={22}/></span>{name}</Link><nav className={open?'navlinks showing':'navlinks'}><Link onClick={()=>setOpen(false)} href="/">HOME</Link><Link onClick={()=>setOpen(false)} href="/gallery">THE GYM</Link><Link onClick={()=>setOpen(false)} href="/packages">MEMBERSHIP</Link><Link onClick={()=>setOpen(false)} href="/contact">CONTACT</Link></nav><Link className="navcta" href="/packages">JOIN NOW <ArrowUpRight size={17}/></Link><button aria-label="Toggle menu" className="mobilemenu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header> }
