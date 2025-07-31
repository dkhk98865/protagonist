import React from 'react'
import { Button } from '@/components/ui/button'
import ProtagonistCard from '@/components/protagonistcard'
import ProtagonistList from '@/components/protagonistlist'
import Cta from '@/components/cta'

const Page = () => {
  return (
    <main>
      <h1>Popular Protagonists</h1>
      
        <section className="home-section">
          <ProtagonistCard 
            id="123"
            name="Cinderella"
            topic="Cinderella Story"
            subject="Fairy Tale"
            duration={15}
            color="#ffda6e" 
          />
          <ProtagonistCard 
            id="456"
            name="Snow White"
            topic="Snow White Story"
            subject="Fairy Tale"
            duration={15}
            color="#e5d0ff" 
          />
          <ProtagonistCard 
            id="789"
            name="Rapunzel"
            topic="Rapunzel Story"
            subject="Fairy Tale"
            duration={15}
            color="#bde7ff" 
          />
        </section>

        <section className="home-section">
          <ProtagonistList/>
          <Cta/>
        </section>
    </main>
  )
}

export default Page