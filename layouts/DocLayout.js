import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import SectionContainer from '@/components/SectionContainer';
import { BlogSEO } from '@/components/SEO';
import Image from '@/components/Image';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import Comments from '@/components/comments';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

const editUrl = (fileName) =>
  `${siteMetadata.siteRepo}/blob/master/data/docs/${fileName}`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/docs/${slug}`
  )}`;

const postDateTemplate = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export default function DocLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
}) {
  const { slug, fileName, date, title, tags } = frontMatter;

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/docs/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <PageTitle>{title}</PageTitle>
        {children}
        <hr className="mb-6 border-gray-200 dark:border-gray-700" />
        <div className="text-gray-700 dark:text-gray-300">
          {(next || prev) && (
            <div className="flex justify-between ">
              <div className="w-1/2">
                {prev && (
                  <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <Link href={`/docs/${prev.slug}`}>
                      <div className="flex items-center gap-2">
                        <ChevronLeftIcon className="h-4 w-4" />
                        <a className="no-underline">{prev.title}</a>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              {next && (
                <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <Link href={`/docs/${next.slug}`}>
                    <div className="flex items-center gap-2">
                      {next.title}
                      <ChevronRightIcon className="h-4 w-4" />
                    </div>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
        <hr className="mt-7 mb-6 border-gray-200 dark:border-gray-700" />
        <div className="flex justify-end text-sm ">
          <Link href={editUrl(fileName)}>
            <a className="!text-gray-700 dark:!text-gray-300">View on GitHub</a>
          </Link>
        </div>
      </article>
    </SectionContainer>
  );
}
