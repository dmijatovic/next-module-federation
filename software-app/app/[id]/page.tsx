'use client'

import {useParams} from 'next/navigation'

export default function SoftwarePage() {
  const params = useParams()

  function goBack() {
    history.back()
  }

  return (
    <section className="flex-1">
      <h1 className="text-3xl">Software page {JSON.stringify(params)}</h1>
      <p className="p-8 grid grid-cols-1 gap-8">
        <button className="py-2 px-4 border" onClick={goBack}>Back</button>
        <a href={`${params.id}/edit/info`} className="p4">Edit software info</a>
        <a href={`${params.id}/edit/contributors`} className="p4">Edit software contributors</a>
      </p>
    </section>
  )
}
