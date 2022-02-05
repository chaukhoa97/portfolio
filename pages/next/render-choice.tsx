import ClientSideRendering from '../../components/next/ClientSideRendering';
import IncrementalStaticGeneration from '../../components/next/IncrementalStaticGeneration';
import ServerSideRendering from '../../components/next/ServerSideRendering';
import StaticSiteGeneration from '../../components/next/StaticSiteGeneration';

const renderChoice = () => {
  return (
    <div className="container mx-auto flex h-2.5 w-5 items-center justify-center rounded-lg bg-gray-200 shadow-md">
      <ClientSideRendering></ClientSideRendering>
      <IncrementalStaticGeneration></IncrementalStaticGeneration>
      <ServerSideRendering></ServerSideRendering>
      <StaticSiteGeneration></StaticSiteGeneration>
    </div>
  );
};

export default renderChoice;
