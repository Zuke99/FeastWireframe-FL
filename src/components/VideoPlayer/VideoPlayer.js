import React from 'react'
import { RiPlayCircleLine } from 'react-icons/ri'

function VideoPlayer() {
  return (
    <div className="flex flex-col h-full">
      {/* Title Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Financial Analysis Training</h2>
        <p className="text-sm text-gray-500 mt-1">
          Master the essentials of financial analysis and market evaluation
        </p>
      </div>

      {/* Video Player Section */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        {/* Video Thumbnail/Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="p-4 rounded-full hover:bg-white/10 transition-colors group">
            <RiPlayCircleLine className="w-16 h-16 text-white group-hover:text-orange-400 transition-colors" />
          </button>
        </div>

        {/* Video Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-white font-medium">Understanding Financial Statements & Ratios</h3>
          <div className="flex items-center mt-2 text-sm text-white/80">
            <span>Duration: 22:45</span>
            <span className="mx-2">•</span>
            <span>Module 3 of 8</span>
          </div>
        </div>

        {/* Actual Video Player (commented out for now) */}
        {/* <video 
          className="w-full h-full object-cover"
          controls
          poster="/path-to-thumbnail.jpg"
        >
          <source src="/path-to-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>

      {/* Video Progress */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Course Progress</span>
          <span>45%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-full w-[45%] bg-orange-400 rounded-full"></div>
        </div>
      </div>

      {/* Next Up Section */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Next in Queue</h4>
        <div className="space-y-3">
          {[
            {
              title: 'Advanced Cash Flow Analysis',
              duration: '18:30',
              module: 'Module 4',
              thumbnail: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80'
            },
            {
              title: 'Market Valuation Techniques',
              duration: '25:15',
              module: 'Module 5',
              thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80'
            }
          ].map((video, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <div 
                className="w-32 h-20 rounded-lg flex items-center justify-center shrink-0 overflow-hidden relative"
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <RiPlayCircleLine className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">{video.title}</h5>
                <div className="text-sm text-gray-500 mt-1">
                  <span>{video.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{video.module}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
