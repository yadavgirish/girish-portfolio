function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      {/* Purple Blob */}
      <div
        className="
          absolute
          -left-32
          -top-32
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500
          opacity-30
          blur-[80px]
          animate-ambient-one
        "
      />

      {/* Blue Blob */}
      <div
        className="
          absolute
          -right-32
          top-[20%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500
          opacity-25
          blur-[80px]
          animate-ambient-two
        "
      />

      {/* Pink Blob */}
      <div
        className="
          absolute
          bottom-[-150px]
          left-[30%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-pink-500
          opacity-20
          blur-[80px]
          animate-ambient-three
        "
      />

    </div>
  );
}

export default BackgroundEffects;