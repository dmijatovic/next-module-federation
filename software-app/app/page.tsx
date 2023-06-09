
import SoftwareCard from '@/components/card'

const softwares = [
  {title: 'Software 1', url: '/item1', description:'This is test description 1'},
  {title: 'Software 2', url: '/item2' ,description:'This is test description 2'},
  {title: 'Software 3', url: '/item3', description:'This is test description 3'},
  {title:'Software 4', url:'/item4', description:'This is test description 4'},
]


export default function SoftwareOverview() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl my-4">Software overview page</h1>
      <p>
        This app contains software over page and subsequent software pages.
      </p>
      <section className="grid grid-cols-3 gap-8 py-8">
        {softwares.map(item => <SoftwareCard key={item.url} {...item} />) }
      </section>
    </main>
  )
}
