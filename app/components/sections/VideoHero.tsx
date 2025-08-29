'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

interface VideoData {
  src: string
  title: string
  client: string
}

const videos: VideoData[] = [
  {
    src: 'https://player.vimeo.com/video/76979871?autoplay=1&muted=1&loop=1&background=1',
    title: '스타트업 브랜드 캠페인',
    client: '테크스타트'
  },
  {
    src: 'https://player.vimeo.com/video/74630229?autoplay=1&muted=1&loop=1&background=1',
    title: '패션 이커머스 광고',
    client: '패션플러스'
  },
  {
    src: 'https://player.vimeo.com/video/73234721?autoplay=1&muted=1&loop=1&background=1',
    title: '푸드테크 브랜딩',
    client: '프레시먼트'
  },
  {
    src: 'https://player.vimeo.com/video/84250902?autoplay=1&muted=1&loop=1&background=1',
    title: '헬스케어 플랫폼 UI',
    client: '헬스플러스'
  }
]

const VideoHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
    }, 5000) // 5초마다 비디오 전환

    return () => clearInterval(interval)
  }, [])

  const handleMuteToggle = () => {
    setIsMuted(!isMuted)
    // iframe의 음소거 상태 변경
    const iframes = document.querySelectorAll('iframe')
    iframes.forEach((iframe) => {
      const src = iframe.src
      if (src.includes('muted=1') && !isMuted) {
        iframe.src = src.replace('muted=1', 'muted=0')
      } else if (src.includes('muted=0') && isMuted) {
        iframe.src = src.replace('muted=0', 'muted=1')
      }
    })
  }

  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <iframe
            src={videos[currentIndex].src}
            className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100vh] min-w-[100vw] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title={videos[currentIndex].title}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center px-4">
          <motion.p
            key={`client-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-wider mb-2"
          >
            {videos[currentIndex].client}
          </motion.p>
          <motion.h2
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            {videos[currentIndex].title}
          </motion.h2>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={handleMuteToggle}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
        
        <div className="flex gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoHero