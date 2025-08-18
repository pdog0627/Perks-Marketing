import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className,
  containerClassName 
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className={cn('container mx-auto px-4 md:px-6', containerClassName)}>
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}