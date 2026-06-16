'use client'

import { useState } from 'react'
import { Image as ImageIcon, Grid, List, Search, Heart, Share2, Download, Filter, Plus, Camera, MapPin } from 'lucide-react'

interface Album {
  id: number
  name: string
  count: number
  cover: string
  color: string
}

interface Photo {
  id: number
  imageUrl: string
  liked: boolean
  location: string
  title: string
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([
    { id: 1, title: 'Maldives Paradise Beach', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80', liked: true, location: 'Maldives' },
    { id: 2, title: 'Swiss Alps Peak Peak', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80', liked: false, location: 'Alps' },
    { id: 3, title: 'Cherry Blossom Season', imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80', liked: true, location: 'Tokyo' },
    { id: 4, title: 'Nairobi Wildlife Park', imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&auto=format&fit=crop&q=80', liked: false, location: 'Nairobi' },
    { id: 5, title: 'New York Skyline Night', imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&auto=format&fit=crop&q=80', liked: true, location: 'NYC' },
    { id: 6, title: 'Santorini Blue Dome', imageUrl: 'https://images.unsplash.com/photo-1469796466635-455edd0287b4?w=600&auto=format&fit=crop&q=80', liked: false, location: 'Santorini' },
  ])

  const albums: Album[] = [
    { id: 1, name: 'Recent', count: 128, cover: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&auto=format&fit=crop&q=80', color: 'from-amber-400 to-orange-500' },
    { id: 2, name: 'Favorites', count: 45, cover: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=150&auto=format&fit=crop&q=80', color: 'from-pink-400 to-rose-500' },
    { id: 3, name: 'Travel', count: 234, cover: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=150&auto=format&fit=crop&q=80', color: 'from-blue-400 to-indigo-500' },
  ]

  const handleToggleLike = (id: number) => {
    setPhotos(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked } : p))
  }

  const likedCount = photos.filter(p => p.liked).length

  return (
    <div className="min-h-screen bg-[#F2F2F7] dark:bg-[#000000] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-md shadow-sm p-4 sticky top-0 z-20 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#007AFF] to-[#5856D6] flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Camera className="text-white animate-pulse" size={22} />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-[#000000] dark:text-[#FFFFFF]">GalleryPro</h1>
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-1">Photo Organizer</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Grid className="text-[#007AFF]" size={20} />
              </button>
              <button className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <List className="text-gray-400" size={20} />
              </button>
              <button className="bg-[#007AFF] hover:bg-[#0069D9] p-2.5 rounded-xl text-white shadow-md shadow-blue-500/10 active:scale-95 transition-all">
                <Plus size={20} />
              </button>
            </div>
          </div>
          <div className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2 border border-transparent focus-within:border-blue-500/50 transition-all">
            <Search className="text-gray-400 mr-2" size={18} />
            <input 
              type="text" 
              placeholder="Search albums and locations..." 
              className="w-full bg-transparent text-sm text-[#000000] dark:text-[#FFFFFF] focus:outline-none" 
            />
            <button className="text-gray-400 hover:text-[#007AFF]"><Filter size={16} /></button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Banner */}
        <section className="bg-gradient-to-br from-[#007AFF] to-[#5856D6] rounded-3xl p-6 text-white shadow-xl flex items-center justify-between relative overflow-hidden">
          <div className="space-y-1 relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight">Your Personal Gallery</h2>
            <p className="text-white/95 text-sm sm:text-base leading-relaxed">
              719 photos ? {likedCount} favorites ? 6 albums
            </p>
          </div>
          <div className="text-6xl opacity-15 pointer-events-none relative z-10 pr-6">??</div>
        </section>

        {/* Albums Carousel */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Your Albums</h3>
            <button className="text-[#007AFF] text-sm font-semibold">See All</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {albums.map((album) => (
              <div key={album.id} className="cursor-pointer group flex flex-col items-center">
                <div className={`relative w-full h-24 sm:h-28 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 group-hover:scale-102`}>
                  <img src={album.cover} alt={album.name} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center text-white font-extrabold text-sm">
                    {album.count} Photos
                  </div>
                </div>
                <h4 className="font-extrabold text-sm text-[#000000] dark:text-[#FFFFFF] mt-2 leading-none">{album.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Grid */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Recent Photos</h3>
            <button className="text-[#007AFF] text-sm font-semibold">See All</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="relative aspect-square rounded-3xl bg-gray-150 dark:bg-gray-850 border border-gray-100 dark:border-gray-800/80 overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={photo.imageUrl} 
                  alt={photo.title} 
                  className="object-cover w-full h-full group-hover:scale-[1.015] transition-transform duration-500" 
                />
                
                {/* Hover overlay details */}
                <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        handleToggleLike(photo.id)
                      }}
                      className="p-2.5 bg-white/95 rounded-full hover:scale-115 active:scale-90 transition-all shadow-md"
                    >
                      <Heart 
                        size={16} 
                        className={`transition-colors ${
                          photo.liked ? 'text-[#FF2D55] fill-[#FF2D55]' : 'text-gray-600'
                        }`} 
                      />
                    </button>
                  </div>
                  
                  <div>
                    <h4 className="font-extrabold text-sm text-white leading-tight">{photo.title}</h4>
                    <div className="flex items-center gap-1 text-gray-300 text-xs mt-1.5 font-semibold">
                      <MapPin size={12} className="text-[#007AFF]" />
                      <span>{photo.location}</span>
                    </div>
                  </div>
                </div>

                {photo.liked && (
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/60 p-1.5 rounded-full shadow-md z-10">
                    <Heart size={14} className="text-[#FF2D55] fill-[#FF2D55]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
