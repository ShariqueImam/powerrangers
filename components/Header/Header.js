import React from 'react'
import Link from 'next/link'
// imprt header.webp

const style = {
  wrapper: 'h-[35vh] w-[100vw] flex items-center justify-center flex flex-col',
  smallHeading: 'text-4xl md:text-6xl text-[#ffc900] tracking-wider my-12',
  pagination:'flex flex-row text-[#ffc900] ',
  pagi:'text-lg md:text-md  mx-1 cursor-pointer'
}
const Header = ({ headingText }) => {
  return (
    // will take the text as the argument
    <div className={style.wrapper} style={{ background: 'linear-gradient(rgba(7, 0, 41, 0.8), rgba(7, 0, 41, 0.2)),url("https://res.cloudinary.com/shariqcloud/image/upload/v1656325697/Power%20Rangers/back1_hpjzoc.webp")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'auto' }}>
      <h2 className={style.smallHeading} style={{ fontFamily: 'Poppins, sans-serif' }} >
        {headingText}
      </h2>
      {/* adding the pagination */}
      <div className={style.pagination} style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Link href='/'>
        <h2 className={style.pagi}>Home  / </h2>
        </Link>
        <Link href="/contact">
        <h2 className={style.pagi}>{headingText.toLowerCase()} </h2>
        </Link>
      </div>
    </div>
  )
}

export default Header