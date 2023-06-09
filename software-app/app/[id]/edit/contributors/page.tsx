
'use client'

import goBack from '@/utils/goBack'

export default function EditContributorsInfo({params}:{params:any}) {

  return (
    <section className="flex-1">
      <h1 className="text-3xl">Edit Software Contributors Page {JSON.stringify(params)}</h1>
      <p className="p-8">
        <button className="py-2 px-4 border" onClick={goBack}>Back</button>
      </p>
    </section>
  )
}
