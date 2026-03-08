<template>
  <Header />
  <div class="bg-amber-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h1 class="text-4xl font-semibold tracking-tight text-pink-500 sm:text-6xl">
          Clear Brands. Confident Content. Simpler Social Media.
        </h1>
        <h3 class="text-2xl font-semibold tracking-tight text-lime-500 sm:text-3xl">
          Helping small businesses build strong brands, plan purposeful content and create simple systems that 
          make marketing easier to manage.
        </h3>
      </div>
      <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div v-for="(tier, tierIdx) in tiers" :key="tier.id" :class="[tier.mostPopular ? 'lg:z-10 rounded-3xl' : 'lg:mt-8', tierIdx === 0 ? '-mr-px rounded-3xl' : '', tierIdx === tiers.length - 1 ? '-ml-px rounded-3xl' : '', 'flex flex-col justify-between rounded-3xl bg-sky-900 p-8 inset-ring inset-ring-gray-200 xl:p-10']">
          <div>
            <div class="flex items-center justify-between gap-x-4">
              <h3 :id="tier.id" :class="[tier.mostPopular ? 'text-indigo-600' : 'text-lime-300', 'text-lg/8 font-bold']">{{ tier.name }}</h3>
              <p v-if="tier.mostPopular" class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">Most popular</p>
            </div>
            <p class="mt-4 text-sm/8 text-white">{{ tier.description }}</p>
            <!--<p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-4xl font-semibold tracking-tight text-white">{{ tier.priceMonthly }}</span>
              <span class="text-sm/6 font-semibold text-pink-500">/month</span>
            </p>-->
            <ul role="list" class="mt-8 space-y-3 text-sm/6 text-white">
              <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f44486" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
          <a href="https://calendly.com/angebakersmc/30min" target="_blank" class="mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/12 font-bold text-lime-300 ring-1 ring-pink-200 ring-inset bg-pink-500">
            Let's Chat
          </a>
        </div>
      </div>
    </div>
  </div>
  <newsletter-form />
  <Footer />
</template>
<script setup>
const tiers = [
  {
    name: 'Brand Foundations & Design',
    id: 'brand-foundations',
    href: '#',
    //priceMonthly: '$19',
    description: 'Build a brand that feels clear, consistent and recognisable across your social media and marketing.',
    features: [
      'Brand foundations and visual identity', 
      'Colour palettes and font suites', 
      'Full brand suite development', 
      'Canva template packs', 
      'Design for print, including flyers, business cards and banners'],
    mostPopular: false,
  },
  {
    name: 'Social Media Strategy & Support',
    id: 'social-media-strategy',
    href: '#',
    //priceMonthly: '$49',
    description: 'Practical strategy and hands-on support to help your content feel purposeful and consistent.',
    features: [
      'Light Touch, Hybrid (bespoke) or Full social media support',
      'Content planning sessions',
      'Campaign or launch support',
      'Power Hour strategy sessions',
      'Profile and content audits',
    ],
    mostPopular: false,
  },
  {
    name: 'Mentoring, Systems & Workshops',
    id: 'mentoring-systems-workshops',
    href: '#',
    //priceMonthly: '$99',
    description: 'Build confidence and structure so marketing feels easier to manage.',
    features: [
      '1:1 mentoring, ongoing guidance',
      'Social media workshops and training',
      'Half-day or full-day group workshops',
      'Brand polish and content reviews',
      'Bespoke content planning systems',
    ],
    mostPopular: false,
  },
]
  useHead({
    title: 'Social Media Management and Brand Consultancy in Perth, Scotland',
    meta: [
      { name: 'description', content: 'From done-for-you social media management to workshops and strategy audits. Practical support tailored to small businesses.' },
      { property: 'og:description', content: 'From done-for-you social media management to workshops and strategy audits. Practical support tailored to small businesses.' },
      //{ property: 'og:image', content: '/images/Classes.jpg' },
      //{ property: 'og:url', content: 'https://raspikidd.com/kids-coding-workshops-perth-waitlist' },
      { property: 'og:type', content: 'website' },
        //{ property: 'robots', content: 'index, follow' }
    ]
  });
  useSeoMeta({
    title: 'Social Media Management and Brand Consultancy in Perth, Scotland',
    ogTitle: 'Social Media Management and Brand Consultancy in Perth, Scotland'
  });
</script>