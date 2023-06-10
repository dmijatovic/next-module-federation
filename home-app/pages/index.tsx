
import dynamic from 'next/dynamic'

const SoftwareCard = dynamic(()=>import('rsd-components/card'))

export default function HomePage() {
  return (
    <section>
      <h1>Home page</h1>
      <SoftwareCard />
    </section>
  )
}
