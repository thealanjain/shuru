import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <header className="fixed top-0 w-full h-16 border-b bg-white/80 backdrop-blur-md flex items-center px-8 z-50">
        <h1 className="text-xl font-bold text-neutral-900">Shuru Tech</h1>
      </header>
      <main className="flex-1 mt-16 p-8">
        {children}
      </main>
      <footer className="h-16 border-t flex items-center justify-center text-neutral-500 text-sm">
        © 2026 Shuru Tech. All rights reserved.
      </footer>
    </div>
  )
}

export default MainLayout
