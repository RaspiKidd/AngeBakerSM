<template>
  <div class="relative bg-pink-500">
    <header class="absolute inset-x-0 top-0 z-50">
      <div class="mx-auto max-w-7xl">
        <div class="px-6 pt-6 lg:max-w-2xl lg:pr-0 lg:pl-8">
          <nav class=" flex items-center justify-between lg:justify-start" aria-label="Global">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Ange Baker Social Media Consultant</span>
              <img alt="Ange Baker Social Media Consultant" class="h-8 w-auto" src="/public/Logo.jpeg" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-white lg:hidden" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="size-6" aria-hidden="true" />
            </button>
            <div class="hidden lg:ml-12 lg:flex lg:gap-x-14">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :target="item.target" class="text-sm/6 font-semibold text-white">{{ item.name }}</a>
            </div>
          </nav>
        </div>
      </div>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"></div>
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-pink-500 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Ange Baker Social Media Consultant</span>
              <img class="h-8 w-auto" src="/public/Logo.jpeg" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-pink-200">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="https://calendly.com/angebakersmc/30min" target="_blank" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-pink-200">Book a Call</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div class="mx-auto max-w-7xl">
        <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-pink-500 lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div class="relative px-6 py-12 sm:py-10 lg:px-8 lg:py-16 lg:pr-0">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 class="text-4xl font-semibold tracking-tight text-sky-900 sm:text-6xl">
                Social Media Consultant for Small Business Owners
              </h1>
              <h3 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Helping you tell your story, engage your audience and grow your business
              </h3>
              <p class="mt-8 text-lg font-semibold text-pretty text-white sm:text-xl/8">
                I help small business owners and marketing consultants simplify their social media strategy, stay 
                consistent and grow with confidence.
              </p>
              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
                Social Media Consultant for Small Business Owners
              </h2>
              <p class="mt-4 text-lg font-medium text-pretty text-white sm:text-xl/8">
                From done-for-you management to practical training and in-depth audits, you get clear support 
                tailored to your business.
              </p>
              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
                What’s Holding You Back?
              </h2>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                <div class="relative ml-8 pl-9 text-lg">
                  <dt class="inline text-white font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                      stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-lime-300">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  Struggling to stay consistent
                </dt>
              </div>
              <div class="relative ml-8 pl-9 text-lg">
                <dt class="inline text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-lime-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                  Confused by constant algorithm changes
                </dt>
              </div>
              <div class="relative ml-8 pl-9 text-lg">
                <dt class="inline text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-lime-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                  Not sure where to start
                </dt>
              </div>
              <div class="relative ml-8 pl-9 text-lg">
                <dt class="inline text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-lime-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                  Finding it hard to stand out
                </dt>
              </div>
              <div class="relative ml-8 pl-9 text-lg">
                <dt class="inline text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-lime-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                  Lacking confidence in your content
                </dt>
              </div>
            </dl>
            <p class="mt-4 text-lg font-medium text-pretty text-white sm:text-xl/8">
              Social media shouldn’t feel overwhelming. It should feel manageable and aligned with your business.
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
                How I Help
            </h2>
            <p class="mt-4 text-lg font-medium text-pretty text-white sm:text-xl/8">
              I help small business owners and marketing consultants simplify social media so it becomes stress-
              free, strategic and effective.
            </p>
            <p class="mt-4 text-lg font-medium text-pretty text-white sm:text-xl/8">
              Whether you need full management, mentoring, brand identity support or a strategic audit, there’s a 
              service designed around you.
            </p>
            <!-- CTA -->
            <div class="bg-red-200 mt-4">
              <div class="py-6 sm:py-8 lg:px-4">
                <div class="mx-auto max-w-2xl text-center">
                  <h3 class="text-xl font-semibold tracking-tight text-pink-500 sm:text-2xl">
                    Ready to simplify your social media?
                  </h3>
                  <p class="mt-4 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
                    Explore the services designed to save you time and grow your business.
                  </p>
                  <div class="mt-10 flex items-center justify-center gap-x-6">
                    <NuxtLink to="/services" class="rounded-md bg-sky-900 px-3.5 py-2.5 text-sm font-semibold text-lime-300 shadow-xs hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">
                      Explore My Services
                    </NuxtLink>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="aspect-3/2 object-cover lg:aspect-auto lg:size-full" src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="" />
      </div>
    </div>
  </div>
  <newsletter-form />
  <Footer />
</template>

<script setup>
import { ref } from 'vue'
//import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Book a Call', href: 'https://calendly.com/angebakersmc/30min', target: '_blank', },
]

const mobileMenuOpen = ref(false)
  useHead({
    title: 'Social Media Consultant for Small Businesses | Ange Baker',
    meta: [
      { name: 'description', content: 'Social media made simple for small business owners and marketing consultants. Management, training and audits to help you grow with confidence.' },
      { property: 'og:description', content: 'Social media made simple for small business owners and marketing consultants. Management, training and audits to help you grow with confidence.' },
      //{ property: 'og:image', content: '/images/Classes.jpg' },
      //{ property: 'og:url', content: 'https://raspikidd.com/kids-coding-workshops-perth-waitlist' },
      { property: 'og:type', content: 'website' },
        //{ property: 'robots', content: 'index, follow' }
    ]
  });
  useSeoMeta({
    title: 'Social Media Consultant for Small Businesses | Ange Baker',
    ogTitle: 'Social Media Consultant for Small Businesses | Ange Baker'
  });
</script>