
type SoftwareCardProps = {
  title: string,
  description?: string,
  url: string
}
export default function SoftwareCard({title, url, description}:SoftwareCardProps) {

  return (
    <a href={url}>
      <article className="border p-4 bg-black text-white">
        <h2 className="text-xl">{title}</h2>
        <p>{description}</p>
      </article>
    </a>
  )
}
