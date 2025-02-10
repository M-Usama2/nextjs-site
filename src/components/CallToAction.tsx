const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get instant access</h2>
        <p className="text-xl text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="your@email.com" className="flex-1 py-4 h-12 bg-white/20 rounded-lg px-5 font-md placeholder:text-[#9CA3AF]" />
          <button className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
        </form>
      </div>
    </div>
  )
}

export default CallToAction