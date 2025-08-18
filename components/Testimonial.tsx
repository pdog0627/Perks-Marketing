import { Card } from './Card'

interface TestimonialProps {
  quote: string
  name: string
  role: string
}

export function Testimonial({ quote, name, role }: TestimonialProps) {
  return (
    <Card className="max-w-lg">
      <blockquote className="text-gray-700 mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <footer>
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-sm text-gray-600">{role}</div>
      </footer>
    </Card>
  )
}