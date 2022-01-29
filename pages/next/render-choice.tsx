import ClientSideRendering from "../../components/next/ClientSideRendering";
import IncrementalStaticGeneration from "../../components/next/IncrementalStaticGeneration";
import ServerSideRendering from "../../components/next/ServerSideRendering";
import StaticSiteGeneration from "../../components/next/StaticSiteGeneration";

const renderChoice = () => {
  return (
    <div className="mx-auto items-center bg-gray-200 rounded-lg shadow-md container flex w-5 h-2.5 justify-center">
      <ClientSideRendering></ClientSideRendering>
      {/* <IncrementalStaticGeneration></IncrementalStaticGeneration> */}
      {/* <ServerSideRendering></ServerSideRendering> */}
      {/* <StaticSiteGeneration></StaticSiteGeneration> */}
    </div>
  );
};

export default renderChoice;
