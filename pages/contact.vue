<template>
  <Header />
  <div class="relative isolate bg-pink-500">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
            <svg class="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200" aria-hidden="true">
              <defs>
                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" class="fill-white" />
              <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
            <div class="absolute top-[calc(100%-13rem)] -left-56 hidden transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]" aria-hidden="true">
              <div class="aspect-1155/678 w-288.75 bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-10" style="clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)"></div>
            </div>
          </div>
          <h1 class="text-4xl font-semibold tracking-tight text-pink-500 sm:text-6xl">
            Get in touch
          </h1>
          <p class="mt-6 text-lg/8 text-gray-700 font-medium">
            I work with small businesses, organisations, and founders who want clear, practical support with their online presence. Whether you need help building your brand, improving your social media strategy, or learning the skills to manage it yourself, I’m here to help. </p>
          <p class="mt-6 text-lg/8 text-gray-700 font-medium">
            Based in Perth, Scotland, I work with clients locally across Perthshire, as well as remotely across the UK.</p>
          <dl class="mt-10 space-y-4 text-base/7 text-gray-700 font-medium">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6 text-sky-900" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-gray-900" href="tel:07894 264599">07894 264599</a></dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon class="h-7 w-6 text-sky-900" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-gray-900" href="mailto:hello@angebakersmc.co.uk">hello@angebakersmc.co.uk</a></dd>
            </div>
          </dl>
          <div class="flex items-center pt-4">
              <div class="flex-shrink-0">
                <a href="https://wa.me/447894264599" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-sky-900 px-3 py-2 text-lg font-semibold text-lime-300 shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="30" width="30" viewBox="0 0 640 640">
                    <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/>
                  </svg>
                  Whats App Me
                </a>
              </div>
            </div>
        </div>
      </div>
      <form class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48" name="Contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="Contact" />
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-md font-semibold text-white">First name</label>
              <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-amber-50 px-3.5 py-2 text-base text-gray-900 outline-2 -outline-offset-1 border-sky-900 border-2 outline-lime-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700" />
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-md font-semibold text-white">Last name</label>
              <div class="mt-2.5">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-amber-50 px-3.5 py-2 text-base text-gray-900 outline-2 -outline-offset-1 border-sky-900 border-2 outline-lime-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-md font-semibold text-white">Email</label>
              <div class="mt-2.5">
                <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-amber-50 px-3.5 py-2 text-base text-gray-900 outline-2 -outline-offset-1 border-sky-900 border-2 outline-lime-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-md font-semibold text-white">Phone number</label>
              <div class="mt-2.5">
                <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md bg-amber-50 px-3.5 py-2 text-base text-gray-900 outline-2 -outline-offset-1 border-sky-900 border-2 outline-lime-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-md font-semibold text-white">Message</label>
              <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="block w-full rounded-md bg-amber-50 px-3.5 py-2 text-base text-gray-900 outline-2 -outline-offset-1 border-sky-900 border-2 outline-lime-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700"></textarea>
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button type="submit" class="rounded-md bg-sky-900 px-3.5 py-2.5 text-center text-lg font-semibold text-lime-300 shadow-xs hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">Send message</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <testimonials />
  <newsletter-form />
  <Footer />
</template>

<script setup>
  import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
  useHead({
    title: 'Contact Ange Baker | Social Media Support for Small Businesses',
    meta: [
      { name: 'description', content: 'Ready to grow your social media with clarity and confidence? Get in touch to discuss management, training or audits.' },
      { property: 'og:description', content: 'Ready to grow your social media with clarity and confidence? Get in touch to discuss management, training or audits.' },
      //{ property: 'og:image', content: '/images/Classes.jpg' },
      //{ property: 'og:url', content: 'https://raspikidd.com/kids-coding-workshops-perth-waitlist' },
      { property: 'og:type', content: 'website' },
        //{ property: 'robots', content: 'index, follow' }
    ]
  });
  useSeoMeta({
    title: 'Contact Ange Baker | Social Media Support for Small Businesses',
    ogTitle: 'Contact Ange Baker | Social Media Support for Small Businesses'
  });
</script>