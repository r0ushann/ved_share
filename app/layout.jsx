import "@styles/globals.css";

import Nav from '@components/Nav'
import Provider from '@components/Provider'


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vedanta share',
  description: 'Share your experience here!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Provider>

      <div className='main'>
      <div className='gradient'/>
      </div>

      <div className='app'>
      <Nav />
      {children}
      </div>
    
      
      </Provider>
     
      </body>
    </html>
  )
}
