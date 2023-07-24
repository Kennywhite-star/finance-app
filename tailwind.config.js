/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const rotateY = plugin(function({addUtilities}) 
{addUtilities({
  '.rotate-y-180': {
    transform: 'rotateY(180deg)'
  },
  '.-rotate-y-180': {
    transform: 'rotateY(-180deg)'
  }
})

})


module.exports = {
  content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
], 
  theme: {
    extend: {
      
    },
    container: {
      center:true,
      paddding:{
        DEFAULT:'20px',
        md:'50px'
      }
    }
  },
  plugins: [rotateY],
}

