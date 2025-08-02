import React from 'react'
import { Button } from '@/components/ui/button'
import ProtagonistCard from '@/components/protagonistcard'
import ProtagonistList from '@/components/protagonistlist'
import Cta from '@/components/cta'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1>Find the fairy tale protagonist that reflects your soul</h1>
      
        <section className="home-section">
          <ProtagonistCard 
            id="123"
            name="Cinderella"
            topic="From ashes to royalty"
            subject="Fairy Tale"
            duration={15}
            color="#ffda6e" 
          />
          <ProtagonistCard 
            id="456"
            name="Snow White"
            topic="Innocence betrayed, redeemed by love"
            subject="Fairy Tale"
            duration={15}
            color="#e5d0ff" 
          />
          <ProtagonistCard 
            id="789"
            name="Rapunzel"
            topic="Freedom found in a towered prison"
            subject="Fairy Tale"
            duration={15}
            color="#bde7ff" 
          />
        </section>

        <section className="home-section">
          <ProtagonistList
            title="Recently viewed stories"
            protagonists={recentSessions}
            classNames="w-2/3 max-lg:w-full"/>
          <Cta/>
        </section>
    </main>
  )
}

export default Page