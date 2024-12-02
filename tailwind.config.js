/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./niko-landing/index.html", "./dist/**/*.{html,js}"],
  theme: {
    extend: {@layer base {

      body{
          @apply bg-gray-200 dark:bg-slate-800
      }
      .head {
          @apply container border-t border-b border-solid border-black dark:border-white 
      }
      p.tag {
          @apply text-pink-600 dark:text-pink-600 text-xs mt-2
      }
      h1 {
        @apply !text-4xl text-gray-800 dark:text-gray-200;
      }
      h2 {
          @apply !text-3xl  text-gray-700 dark:text-gray-100
      }
      h3 {
          @apply !text-2xl !font-semibold  text-gray-700 dark:text-gray-300 !mb-2 ;
      }
      h4 {
          @apply !text-xl !font-semibold  text-gray-700 dark:text-gray-300 ;
      }
      h5 {
          @apply !font-semibold  text-gray-700 dark:text-gray-300 ;
      }
      p {
          @apply text-gray-700 dark:text-gray-400
      }
      p a {
          @apply !text-gray-700 dark:!text-gray-800  decoration-1  !underline !underline-offset-4 !decoration-gray-800 hover:!decoration-pink-600
      }
      a {
          @apply !text-gray-700 dark:!text-gray-800  !underline !underline-offset-4 dark:!decoration-gray-500
      }
      ul 
      {
          @apply  border-black  dark:border-white
      }
   
  }},
  },
  plugins: [],
}

