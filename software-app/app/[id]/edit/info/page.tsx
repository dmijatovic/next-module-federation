'use client'

import goBack from '@/utils/goBack'

export default function EditSoftwareInfo({params}:{params:any}) {

  return (
    <section className="flex-1">
      <h1 className="text-3xl">Edit Software Info Page {JSON.stringify(params)}</h1>
      <button className="py-2 px-4 border" onClick={goBack}>Back</button>
    </section>
  )
}
