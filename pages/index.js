import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="mt-16 flex h-screen flex-col space-y-2 pt-6 text-center md:mt-32 md:space-y-5">
        <div className="relative mx-auto mb-4 h-40 w-40 items-center justify-center rounded-full bg-gray-200 md:h-48 md:w-48">
          <Image
            className="rounded-full"
            alt="facebook avatar"
            layout="fill"
            src="/static/images/fbavatar.png"
          ></Image>
        </div>
        <h1 className="mx-auto text-center text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-5xl md:leading-14 lg:text-6xl">
          Hi, I'm
          <span className="relative ml-4 inline-block before:absolute before:-inset-2 before:block before:-skew-y-3 before:bg-primary-500">
            <span className="relative text-white">Khoa</span>
          </span>
        </h1>
        <p className="text-center text-lg text-gray-500 dark:text-gray-300 md:text-xl">
          Reactjs Developer with a passion in building modern and elegant
          websites
        </p>
        <Link href="#about-me">
          <a className="mx-auto !mt-8 inline-block rounded-lg bg-primary-500 px-5 py-3 text-lg font-medium text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg md:text-xl">
            More about me &darr;
          </a>
        </Link>
      </div>
      <div
        className="min- mx-auto flex flex-col md:flex-row md:space-x-10 md:pt-8 lg:space-x-20"
        id="about-me"
      >
        <div className="relative mt-4 mb-8 h-96 w-full flex-auto md:mb-0 md:mt-0 md:h-auto">
          <Image
            src="/static/images/home-1.jpg"
            alt="author image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="prose relative w-full max-w-prose dark:prose-dark ">
          <div className="flex flex-col">
            <h2 className="mt-0 mb-1 font-serif text-4xl">About me</h2>
            <div className="mb-4 w-40 border-b-2 !border-primary-500"></div>
            <p>
              I'm a Front-end developer with 1-year of experience. Fast and
              clean-design websites are something I want to achieve in every
              project. I currently commit to Reactjs, which has such a diverse
              ecosystem for me to dive into.
              <br />I was born and raised in Da Nang city, Vietnam. While I can
              be the most stay-at-home guy you have ever met, I still enjoy
              hanging out with people with similar interests - movies, soccer,
              or even some League of Legends matches.
            </p>
            <div className="not-prose flex gap-x-4">
              <Link href="https://drive.google.com/file/d/1ZeiB9qYwy646XMRAgE06kfwcEj2Ehng_/view?usp=sharing">
                <a
                  className=" inline-block rounded-lg bg-primary-500 px-4 py-2  !text-white !no-underline shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg"
                  target={'_blank'}
                >
                  My CV
                </a>
              </Link>
              <Link href="/projects">
                <a
                  className="rounded-lg border border-solid border-primary-500 bg-transparent px-4 py-2 font-bold text-primary-500 !no-underline outline-none transition-all duration-150 ease-linear hover:bg-primary-500 hover:!text-white focus:outline-none active:bg-primary-600"
                  type="button"
                >
                  What I've built
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="prose mx-auto mt-32" id="about-this-site">
        <h2 className="mt-0 mb-1 font-serif text-4xl dark:!text-gray-100">
          About this site
        </h2>
        <div className="mb-6 w-40 border-b-2 !border-primary-500"></div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full items-center justify-between rounded-lg  bg-gray-300 px-4 py-2 text-left font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 ${
                  !open && 'mb-4'
                }`}
              >
                <span>What's this site about?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-900`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="mb-4 px-4 pt-4 pb-5 text-gray-900 dark:text-gray-200">
                  When I was first starting to learn programming, I used to note
                  all my should-remember things in{' '}
                  <span>
                    <a
                      href="https://github.com/chaukhoa97/Storage"
                      className="!no-underline"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      one of my repositories
                    </a>
                  </span>
                  , sometimes in documents or anything that can be written on.
                  <br />
                  As my coding journey goes on they have started to become
                  unmanageable and it messes up when I try to find something. So
                  I come up with an idea - "Why don't I keep those all on a
                  personal page?". And here it is, a place for me to store and
                  implement the technologies I have perceived on my career path.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full items-center justify-between rounded-lg  bg-gray-300 px-4 py-2 text-left font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 ${
                  !open && 'mb-3'
                }`}
              >
                <span>How do you build this site?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-900`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="mb-4 px-4 pt-4 pb-2 text-gray-900 dark:text-gray-200">
                  This site is built with Nextjs, Tailwindcss, and deployed with
                  Vercel. It is based on{' '}
                  <a
                    className="!no-underline"
                    href="https://twitter.com/timlrxx"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    Timothy Lin
                  </a>
                  's blog starter (you can find it{' '}
                  <a
                    className="!no-underline"
                    href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    here
                  </a>
                  ). Since the site is not a blog itself so I have heavily
                  customized it to match my usage.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
