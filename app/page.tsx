import { Image as ImageIcon, Grid, List, Search, Heart, Share2, Download, Filter, Plus, Camera } from 'lucide-react'

export default function GalleryPage() {
  const albums = [
    { id: 1, name: 'Recent', count: 128, cover: '🌅', color: 'from-amber-400 to-orange-500' },
    { id: 2, name: 'Favorites', count: 45, cover: '❤️', color: 'from-pink-400 to-rose-500' },
    { id: 3, name: 'Travel', count: 234, cover: '✈️', color: 'from-blue-400 to-indigo-500' },
    { id: 4, name: 'People', count: 89, cover: '👥', color: 'from-green-400 to-emerald-500' },
    { id: 5, name: 'Nature', count: 167, cover: '🌿', color: 'from-teal-400 to-green-500' },
    { id: 6, name: 'Food', count: 56, cover: '🍕', color: 'from-yellow-400 to-orange-400' },
  ]

  const recentPhotos = [
    { id: 1, emoji: '🌊', liked: true, location: 'Maldives' },
    { id: 2, emoji: '🏔️', liked: false, location: 'Alps' },
    { id: 3, emoji: '🌸', liked: true, location: 'Tokyo' },
    { id: 4, emoji: '🦁', liked: false, location: 'Nairobi' },
    { id: 5, emoji: '🌆', liked: true, location: 'NYC' },
    { id: 6, emoji: '🌄', liked: false, location: 'Santorini' },
    { id: 7, emoji: '🐬', liked: true, location: 'Hawaii' },
    { id: 8, emoji: '🦋', liked: false, location: 'Costa Rica' },
    { id: 9, emoji: '🏜️', liked: false, location: 'Sahara' },
  ]

  return (
    <div className="min-h-screen bg-[#F2F2F7] dark:bg-[#000000]">
      <header className="bg-white dark:bg-[#1C1C1E] shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center">
                <Camera className="text-white" size={20} />
              </div>
              <h1 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">GalleryPro</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><Grid className="text-[#007AFF]" size={20} /></button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><List className="text-gray-400" size={20} /></button>
              <button className="bg-[#007AFF] p-2 rounded-full text-white hover:bg-[#0069D9]"><Plus size={20} /></button>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl px-3 py-2">
            <Search className="text-gray-400" size={18} />
            <input type="text" placeholder="Search photos..." className="flex-1 bg-transparent text-[#000000] dark:text-[#FFFFFF] placeholder-gray-400 focus:outline-none text-sm" />
            <button className="text-gray-400 hover:text-[#007AFF]"><Filter size={16} /></button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <section className="bg-gradient-to-br from-[#007AFF] to-[#5856D6] rounded-2xl p-6 text-white flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">My Gallery</h2>
            <p className="text-white/80">719 photos · 6 albums</p>
          </div>
          <div className="text-6xl">📸</div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Albums</h3>
            <button className="text-[#007AFF] text-sm font-medium">See All</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {albums.map((album) => (
              <div key={album.id} className="cursor-pointer group">
                <div className={`relative h-24 rounded-xl bg-gradient-to-br ${album.color} flex items-center justify-center text-4xl mb-2 group-hover:scale-105 transition-transform shadow-sm`}>
                  {album.cover}
                </div>
                <h4 className="font-semibold text-sm text-[#000000] dark:text-[#FFFFFF]">{album.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{album.count} photos</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Recent Photos</h3>
            <button className="text-[#007AFF] text-sm font-medium">See All</button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {recentPhotos.map((photo) => (
              <div key={photo.id} className="relative aspect-square rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-5xl overflow-hidden group cursor-pointer">
                {photo.emoji}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-end p-2 opacity-0 group-hover:opacity-100">
                  <div className="flex justify-between w-full">
                    <button className="p-1.5 bg-white/90 rounded-full">
                      <Heart size={14} className={photo.liked ? 'text-[#FF2D55] fill-[#FF2D55]' : 'text-gray-600'} />
                    </button>
                    <div className="flex gap-1">
                      <button className="p-1.5 bg-white/90 rounded-full"><Share2 size={14} className="text-gray-600" /></button>
                      <button className="p-1.5 bg-white/90 rounded-full"><Download size={14} className="text-gray-600" /></button>
                    </div>
                  </div>
                </div>
                {photo.liked && (
                  <div className="absolute top-2 right-2">
                    <Heart size={16} className="text-[#FF2D55] fill-[#FF2D55]" />
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