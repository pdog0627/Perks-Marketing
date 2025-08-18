'use client'

import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'
import { MockDashboard } from '@/components/MockDashboard'
import { LogoRow } from '@/components/LogoRow'
import { Testimonial } from '@/components/Testimonial'
import { content } from '@/lib/content'

export default function Home() {
  return (
    <main>
      {/* Header/Nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
            <div className="text-xl font-bold text-gray-900">
              {content.appName}
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {content.nav.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get started free
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {content.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                {content.hero.primaryCta}
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                {content.hero.secondaryCta}
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <MockDashboard />
          </div>
        </div>
      </Section>

      {/* Value Props */}
      <Section id="features" title="Why teams choose us" className="bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.valueProps.map((prop, index) => (
            <Card key={index} hover className="text-center">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={prop.icon} className="text-brand" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {prop.title}
              </h3>
              <p className="text-gray-600">
                {prop.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section 
        id="how-it-works" 
        title={content.howItWorks.title}
        className="bg-gray-50"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {content.howItWorks.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section title="Perfect for every occasion" className="bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.useCases.map((useCase, index) => (
            <Card key={index} hover className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={useCase.icon} className="text-gray-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-gray-600">
                {useCase.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* For HR */}
      <Section id="for-hr" className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.forHR.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.forHR.subtitle}
            </p>
            <ul className="space-y-4">
              {content.forHR.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <div className="h-full bg-gradient-to-br from-brand/5 to-brand/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Icon name="chart" size={48} className="text-brand mx-auto mb-4" />
                  <p className="text-gray-600">HR Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* For Employees */}
      <Section id="for-employees" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.forEmployees.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.forEmployees.subtitle}
            </p>
            <ul className="space-y-4">
              {content.forEmployees.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:order-1 flex justify-center">
            <div className="w-64 h-96 bg-white rounded-3xl border border-gray-200 shadow-lg p-4">
              <div className="h-full bg-gradient-to-b from-brand/5 to-brand/10 rounded-2xl p-4">
                <div className="text-center">
                  <div className="w-8 h-8 bg-brand rounded-lg mx-auto mb-4"></div>
                  <p className="text-sm text-gray-600 mb-8">Mobile App</p>
                  <div className="space-y-3">
                    <div className="h-12 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-12 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-12 bg-white rounded-lg shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vendors CTA */}
      <Section id="vendors" className="bg-brand text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.vendors.title}
          </h2>
          <p className="text-lg text-brand-100 mb-12 max-w-2xl mx-auto">
            {content.vendors.subtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.vendors.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="heart" className="text-white" size={24} />
                </div>
                <p className="text-brand-100">{feature}</p>
              </div>
            ))}
          </div>
          <Button variant="secondary" size="lg" className="bg-white text-brand hover:bg-gray-100">
            {content.vendors.cta}
          </Button>
        </div>
      </Section>

      {/* Social Proof */}
      <Section title="Built with feedback from forward-thinking HR teams" className="bg-white">
        <div className="mb-16">
          <LogoRow companies={content.socialProof.companies} />
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {content.socialProof.testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section 
        id="contact"
        title={content.finalCta.title}
        subtitle={content.finalCta.subtitle}
        className="bg-gray-50"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            {content.finalCta.primaryCta}
          </Button>
          <Button variant="secondary" size="lg">
            {content.finalCta.secondaryCta}
          </Button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-xl font-bold mb-4 md:mb-0">
              {content.appName}
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {content.footer.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              {content.footer.disclosure}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}