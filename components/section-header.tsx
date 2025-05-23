interface SectionHeaderProps {
  id?: string
  title: string
  description: string
}

export default function SectionHeader({ id, title, description }: SectionHeaderProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}
