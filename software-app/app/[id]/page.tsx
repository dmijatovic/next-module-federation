'use client'

import { useParams } from "next/navigation"

export default function SoftwarePage() {
  const params = useParams()
  return (
    <section>
      <h1>Software page {JSON.stringify(params)}</h1>
    </section>
  )
}