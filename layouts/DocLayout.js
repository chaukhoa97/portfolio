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
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <div className="pt-6 xl:pb-6"></div>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:flex"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="xl:w-80">Navbar</div>
            <div className="flex-auto divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                <PageTitle>{title}</PageTitle>
                {children}
              </div>
              <div className="pt-6 pb-6 text-gray-700 dark:text-gray-300">
                {(next || prev) && (
                  <div className="flex justify-between py-4">
                    <div className="w-1/2">
                      {prev && (
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/docs/${prev.slug}`}>
                            <div className="flex items-center gap-2">
                              <ChevronLeftIcon className="h-4 w-4" />
                              {prev.title}
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {next && (
                        <div className="mb-3 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/docs/${next.slug}`}>
                            <div className="flex items-center gap-2">
                              {next.title}
                              <ChevronRightIcon className="h-4 w-4" />
                            </div>
                          </Link>
                        </div>
                      )}
                      <div className="text-sm">
                        <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
