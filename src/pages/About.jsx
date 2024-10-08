import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>


      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>



      <div className='my-10 flex flex-col md:flex-row gap-16'>
   <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
   <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis vitae, distinctio at consequuntur sed architecto quia molestias inventore mollitia minus?</p>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor consequuntur a, nulla inventore necessitatibus assumenda asperiores id? Esse, minus corrupti.</p>
 <b className='text-gray-800 '>Our Mission</b>
 <p>At RoyalBoutique, our mission is to inspire confidence and elevate style by providing premium footwear, bags, and accessories for men and women. We are committed to delivering products that combine elegance, quality, and innovation, ensuring that every customer feels empowered and fashionable in their daily lives. Our focus is on exceptional craftsmanship, attention to detail, and customer satisfaction, making RoyalBoutique the go-to destination for timeless fashion and modern trends.</p>
   </div>
      </div>
   
   <div className='text-xl py-4 '>
 <Title text1={'WHY'} text2={'CHOOSE US'}/>
   </div>
      
  <div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
  </div>
  <NewsLetter />

    </div>
  )
}

export default About
