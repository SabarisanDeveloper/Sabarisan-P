import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white px-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1470&q=80')" }}>
      <div className="text-center max-w-3xl bg-black/50 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Sabarisan P</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          <span className="text-pink-400">Software</span> Developer
        </h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6">
          Passionate Software Developer based in Chennai. Experienced in building scalable web applications, optimizing performance, and crafting beautiful user interfaces using modern technologies.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition font-medium">
            Hire Me
          </button>
          <a
            href="/resume.pdf" // update this path with your resume link
            className="flex items-center text-sm text-blue-300 hover:underline"
            download
          >
            <span className="mr-2">⬇️</span> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;