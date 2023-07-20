import React from 'react';
import './App.css';
import { TwitterFollowCard } from './twitterFollowCard';

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard userName='ghandi18'>
        Ghandi Aboultaif
      </TwitterFollowCard>
      <TwitterFollowCard userName='nadiaS'>Nadia Sintabay</TwitterFollowCard>
      <TwitterFollowCard userName='nani1986'>Nancy Aboultaif</TwitterFollowCard>
      <TwitterFollowCard userName='yhas1984'>
        Youssef Aboultaif
      </TwitterFollowCard>
    </section>
  );
}
