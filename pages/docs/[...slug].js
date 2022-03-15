import { MDXLayoutRenderer } from '@/components/MDXComponents';
import PageTitle from '@/components/PageTitle';
import generateRss from '@/lib/generate-rss';
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '@/lib/mdx';
import fs from 'fs';
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { PageSEO } from '@/components/SEO';

const DEFAULT_LAYOUT = 'DocLayout';

export async function getStaticPaths() {
  const posts = getFiles('docs');
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allDocs = await getAllFilesFrontMatter('docs');
  const allDocCategories = {};
  for (const post of allDocs) {
    if (!allDocCategories[post.category]) {
      allDocCategories[post.category] = [];
    }
    allDocCategories[post.category].push({
      title: post.title,
      slug: post.slug,
    });
  }

  const postIndex = allDocs.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join('/')
  );
  const prev = allDocs[postIndex + 1] || null;
  const next = allDocs[postIndex - 1] || null;
  const post = await getFileBySlug('docs', params.slug.join('/'));
  const authorList = post.frontMatter.authors || ['default'];
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author]);
    return authorResults.frontMatter;
  });
  const authorDetails = await Promise.all(authorPromise);
  // rss
  if (allDocs.length > 0) {
    const rss = generateRss(allDocs);
    fs.writeFileSync('./public/feed.xml', rss);
  }

  return { props: { post, authorDetails, prev, next, allDocCategories } };
}

const docCategoriesOrder = [
  'React',
  'JavaScript',
  'Typescript',
  'Nextjs',
  'HTML',
  'CSS',
  'undefined',
  'Archive',
];
export default function Doc({
  post,
  authorDetails,
  prev,
  next,
  allDocCategories,
}) {
  const { mdxSource, toc, frontMatter, title } = post;
  console.log(post);
  const docCategories = Object.keys(allDocCategories);

  docCategoriesOrder.forEach((category) => {
    docCategories.push(
      docCategories.splice(docCategories.indexOf(category), 1)[0]
    );
  });
  const [showNav, setShowNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);
  const handleShowNav = () => {
    if (windowWidth < 1024) {
      setShowNav((prevState) => !prevState);
    }
  };

  const docNav = docCategories.map((category) => (
    <div key={category} className="mb-8">
      <h2 className="mb-2 text-lg font-semibold">
        {category !== 'undefined' ? category : 'ETC'}
      </h2>
      <ul className="space-y-2 border-l border-gray-300 dark:border-gray-600">
        {allDocCategories[category].map((doc) => (
          <li key={doc.slug}>
            <Link href={`/docs/${doc.slug}`}>
              <a
                className="-ml-px border-l border-transparent pl-4 text-gray-500 hover:border-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-300 dark:hover:text-gray-300"
                onClick={handleShowNav}
              >
                {doc.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <>
      <PageSEO title={title} />
      {windowWidth < 1024 && (
        <div
          onClick={handleShowNav}
          className="mb-3 flex cursor-pointer items-center"
        >
          {showNav ? (
            <ChevronDownIcon className="mr-1 h-4 w-4" />
          ) : (
            <ChevronRightIcon className="mr-1 h-4 w-4" />
          )}
          Menu
        </div>
      )}
      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="relative lg:flex">
        {(showNav || windowWidth >= 1024) && (
          <div className="top-0 z-10 w-full bg-transparent pt-6 lg:sticky lg:max-h-screen lg:w-max lg:min-w-[16rem] lg:overflow-y-scroll lg:pr-4 lg:pt-8">
            {docNav}
          </div>
        )}
        {frontMatter.draft !== true ? (
          <div
            className={`prose max-w-none flex-1 overflow-hidden pt-10 pb-8 prose-a:!no-underline dark:prose-dark lg:pl-8 ${
              showNav ? 'hidden' : ''
            }`}
          >
            <MDXLayoutRenderer
              layout={frontMatter.layout || DEFAULT_LAYOUT}
              toc={toc}
              mdxSource={mdxSource}
              frontMatter={frontMatter}
              authorDetails={authorDetails}
              prev={prev}
              next={next}
            />
          </div>
        ) : (
          <div className="mt-4 max-w-none flex-auto text-center xl:max-w-[52rem]">
            <PageTitle>
              Under Construction{' '}
              <span role="img" aria-label="roadwork sign">
                🚧
              </span>
            </PageTitle>
          </div>
        )}
      </div>
    </>
  );
}
