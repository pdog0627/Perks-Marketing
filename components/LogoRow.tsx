interface LogoRowProps {
  companies: string[]
}

export function LogoRow({ companies }: LogoRowProps) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
      {companies.map((company, index) => (
        <div
          key={index}
          className="text-lg md:text-xl font-semibold text-gray-500"
        >
          {company}
        </div>
      ))}
    </div>
  )
}