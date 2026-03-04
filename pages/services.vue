<template>
  <Header />
  <div class="bg-amber-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h1 class="text-4xl font-semibold tracking-tight text-pink-500 sm:text-6xl">
          Social Media Services for Small Businesses
        </h1>
        <h3 class="text-2xl font-semibold tracking-tight text-lime-500 sm:text-3xl">
          From Light Touch to Full management
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
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-4xl font-semibold tracking-tight text-white">{{ tier.priceMonthly }}</span>
              <span class="text-sm/6 font-semibold text-pink-500">/month</span>
            </p>
            <ul role="list" class="mt-8 space-y-3 text-sm/6 text-white">
              <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f44486" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
          <NuxtLink :to="`/${tier.id}`" :aria-describedby="`tier-${tier.id}`" class="mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/12 font-bold text-lime-300 ring-1 ring-pink-200 ring-inset bg-pink-500">
            Buy a Plan
          </NuxtLink>
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
    name: 'Done-For-You Social Media Management',
    id: 'done-for-you',
    href: '#',
    //priceMonthly: '$19',
    description: 'Full content creation, planning, posting and engagement so you can focus on running your business.',
    features: [
      'Content Creation', 
      'Strategic Planning', 
      'Scheduling & Posting', 
      'Community Engagement & Social Listening', 
      'Performance Tracking'],
    mostPopular: false,
  },
  {
    name: 'Social Media Workshops and Training',
    id: 'training',
    href: '#',
    //priceMonthly: '$49',
    description: 'Practical, hands-on sessions designed for small business owners and teams who want to take control of their content.',
    features: [
      'Group Workshops for Small Business Owners',
      'In-house Team Training',
      '1 to 1 Sessions',
    ],
    mostPopular: false,
  },
  {
    name: 'Social Media Audits',
    id: 'social-media-audits',
    href: '#',
    //priceMonthly: '$99',
    description: 'A deep dive into your current performance with clear, actionable recommendations.',
    features: [
      'A deep dive into yoursocial media presence',
      'Actionable insights to emprove engagement and visablility',
      'Custom recommendations tailored to your brand',
    ],
    mostPopular: false,
  },
]
  useHead({
    title: 'Social Media Management, Training & Audits | Small Business Support',
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
    title: 'Social Media Management, Training & Audits | Small Business Support',
    ogTitle: 'Social Media Management, Training & Audits | Small Business Support'
  });
</script>