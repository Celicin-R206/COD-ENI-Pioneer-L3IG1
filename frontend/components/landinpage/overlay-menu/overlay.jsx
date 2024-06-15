"use client"
import React, { useEffect, useState } from 'react'
import './overlay.css'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import { MessageSquareMore } from 'lucide-react'

const OverlayMenu = () => {

  const [width,setWidth] = useState(null)

  useEffect(()=>{
    const {innerWidth} = window
    setWidth(innerWidth)
  },[])

  return (
    <div className='overlay-menu'>
       <div className="content">
          <div className="top">
            <div className="logo">
              <svg width="109" height="67" viewBox="0 0 109 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M64 17.1579V2H106L74 65.5" stroke="#2D68FF" strokeWidth="3"/>
                  <path d="M10.48 37.44C9.71733 37.44 9.03533 37.3593 8.434 37.198C7.83267 37.0513 7.29733 36.8607 6.828 36.626C6.35867 36.3767 5.948 36.098 5.596 35.79C5.25867 35.4673 4.97267 35.1373 4.738 34.8C4.166 34.0227 3.77 33.1427 3.55 32.16H6.96C7.092 32.6 7.30467 32.9887 7.598 33.326C7.84733 33.6193 8.19933 33.8833 8.654 34.118C9.12333 34.3527 9.732 34.47 10.48 34.47C11.5213 34.47 12.2547 34.3013 12.68 33.964C13.12 33.6267 13.34 33.2087 13.34 32.71C13.34 32.2407 13.1127 31.874 12.658 31.61C12.218 31.346 11.6533 31.1187 10.964 30.928C10.2893 30.7227 9.556 30.5247 8.764 30.334C7.98667 30.1287 7.25333 29.8573 6.564 29.52C5.88933 29.168 5.32467 28.7133 4.87 28.156C4.43 27.584 4.21 26.8287 4.21 25.89C4.21 25.2593 4.342 24.658 4.606 24.086C4.88467 23.514 5.27333 23.0153 5.772 22.59C6.28533 22.15 6.90867 21.8053 7.642 21.556C8.37533 21.292 9.21133 21.16 10.15 21.16C10.8687 21.16 11.5067 21.2333 12.064 21.38C12.6213 21.512 13.1127 21.688 13.538 21.908C13.978 22.128 14.352 22.3847 14.66 22.678C14.9827 22.9567 15.254 23.2427 15.474 23.536C15.9873 24.24 16.3393 25.0247 16.53 25.89H13.12C13.032 25.5673 12.8633 25.274 12.614 25.01C12.4087 24.79 12.108 24.592 11.712 24.416C11.3307 24.2253 10.81 24.13 10.15 24.13C9.27 24.13 8.62467 24.2987 8.214 24.636C7.818 24.9587 7.62 25.34 7.62 25.78C7.62 26.132 7.752 26.4253 8.016 26.66C8.28 26.8947 8.62467 27.1 9.05 27.276C9.47533 27.4373 9.95933 27.584 10.502 27.716C11.0593 27.848 11.6167 27.9947 12.174 28.156C12.746 28.3173 13.3033 28.508 13.846 28.728C14.4033 28.948 14.8947 29.2267 15.32 29.564C15.7453 29.9013 16.09 30.3193 16.354 30.818C16.618 31.302 16.75 31.896 16.75 32.6C16.75 33.2453 16.618 33.8613 16.354 34.448C16.09 35.0347 15.694 35.548 15.166 35.988C14.638 36.428 13.978 36.78 13.186 37.044C12.4087 37.308 11.5067 37.44 10.48 37.44ZM24.1234 37.33C23.2728 37.33 22.4734 37.176 21.7254 36.868C20.9921 36.56 20.3541 36.142 19.8114 35.614C19.2688 35.0713 18.8434 34.4407 18.5354 33.722C18.2274 32.9887 18.0734 32.2113 18.0734 31.39C18.0734 30.5687 18.2274 29.7987 18.5354 29.08C18.8434 28.3467 19.2688 27.716 19.8114 27.188C20.3541 26.6453 20.9921 26.22 21.7254 25.912C22.4734 25.604 23.2728 25.45 24.1234 25.45C25.0034 25.45 25.8028 25.604 26.5214 25.912C27.2548 26.22 27.8854 26.6453 28.4134 27.188C28.9414 27.7307 29.3448 28.3613 29.6234 29.08C29.9168 29.7987 30.0634 30.5687 30.0634 31.39V32.05H21.2634C21.3221 32.402 21.4321 32.7393 21.5934 33.062C21.7694 33.3847 21.9821 33.6707 22.2314 33.92C22.4954 34.1547 22.7888 34.3453 23.1114 34.492C23.4341 34.624 23.7714 34.69 24.1234 34.69C24.6221 34.69 25.0254 34.624 25.3334 34.492C25.6561 34.3453 25.9201 34.1913 26.1254 34.03C26.3454 33.8393 26.5214 33.6193 26.6534 33.37H29.9534C29.7188 34.1033 29.3521 34.7633 28.8534 35.35C28.6334 35.5993 28.3768 35.8413 28.0834 36.076C27.7901 36.3107 27.4528 36.5233 27.0714 36.714C26.6901 36.9047 26.2501 37.0513 25.7514 37.154C25.2674 37.2713 24.7248 37.33 24.1234 37.33ZM26.7634 30.18C26.7048 29.9013 26.6021 29.6373 26.4554 29.388C26.3088 29.1387 26.1181 28.9187 25.8834 28.728C25.6634 28.5373 25.3994 28.3833 25.0914 28.266C24.7981 28.1487 24.4754 28.09 24.1234 28.09C23.4048 28.09 22.8034 28.3027 22.3194 28.728C21.8501 29.1387 21.5348 29.6227 21.3734 30.18H26.7634ZM36.5448 37.33C35.8262 37.33 35.1515 37.1907 34.5208 36.912C33.9048 36.6333 33.3622 36.2373 32.8928 35.724C32.4235 35.2107 32.0495 34.5873 31.7708 33.854C31.5068 33.1207 31.3748 32.2993 31.3748 31.39C31.3748 30.4807 31.5068 29.6593 31.7708 28.926C32.0495 28.1927 32.4235 27.5693 32.8928 27.056C33.3622 26.5427 33.9048 26.1467 34.5208 25.868C35.1515 25.5893 35.8262 25.45 36.5448 25.45C37.1608 25.45 37.6815 25.5453 38.1068 25.736C38.5468 25.912 38.9135 26.11 39.2068 26.33C39.5442 26.594 39.8302 26.8873 40.0648 27.21H40.1748V25.78H43.2548V37H40.1748V35.57H40.0648C39.8302 35.8927 39.5442 36.186 39.2068 36.45C38.9135 36.67 38.5468 36.868 38.1068 37.044C37.6815 37.2347 37.1608 37.33 36.5448 37.33ZM37.3148 34.69C38.1508 34.69 38.8328 34.404 39.3608 33.832C39.9035 33.26 40.1748 32.446 40.1748 31.39C40.1748 30.334 39.9035 29.52 39.3608 28.948C38.8328 28.376 38.1508 28.09 37.3148 28.09C36.5375 28.09 35.8848 28.376 35.3568 28.948C34.8288 29.52 34.5648 30.334 34.5648 31.39C34.5648 32.446 34.8288 33.26 35.3568 33.832C35.8848 34.404 36.5375 34.69 37.3148 34.69ZM45.6748 25.78H48.7548V27.43H48.8648C48.9968 27.078 49.1948 26.77 49.4588 26.506C49.6788 26.2713 49.9722 26.0587 50.3388 25.868C50.7055 25.6627 51.1675 25.56 51.7248 25.56H53.0448V28.53H51.3948C50.5588 28.53 49.9062 28.7573 49.4368 29.212C48.9822 29.6667 48.7548 30.2827 48.7548 31.06V37H45.6748V25.78ZM59.9809 37.33C59.1302 37.33 58.3309 37.176 57.5829 36.868C56.8495 36.56 56.2115 36.142 55.6689 35.614C55.1262 35.0713 54.7009 34.4407 54.3929 33.722C54.0849 32.9887 53.9309 32.2113 53.9309 31.39C53.9309 30.5687 54.0849 29.7987 54.3929 29.08C54.7009 28.3467 55.1262 27.716 55.6689 27.188C56.2115 26.6453 56.8495 26.22 57.5829 25.912C58.3309 25.604 59.1302 25.45 59.9809 25.45C60.5822 25.45 61.1249 25.516 61.6089 25.648C62.0929 25.7653 62.5255 25.9267 62.9069 26.132C63.2882 26.3373 63.6182 26.572 63.8969 26.836C64.1902 27.1 64.4395 27.3713 64.6449 27.65C65.1289 28.2953 65.4809 29.0287 65.7009 29.85H62.5109C62.3789 29.5273 62.2029 29.234 61.9829 28.97C61.7775 28.75 61.5135 28.552 61.1909 28.376C60.8829 28.1853 60.4795 28.09 59.9809 28.09C59.5995 28.09 59.2329 28.1707 58.8809 28.332C58.5435 28.4933 58.2429 28.7207 57.9789 29.014C57.7149 29.2927 57.5022 29.6373 57.3409 30.048C57.1942 30.444 57.1209 30.8913 57.1209 31.39C57.1209 31.8887 57.1942 32.3433 57.3409 32.754C57.5022 33.15 57.7149 33.4947 57.9789 33.788C58.2429 34.0667 58.5435 34.2867 58.8809 34.448C59.2329 34.6093 59.5995 34.69 59.9809 34.69C60.4795 34.69 60.8829 34.602 61.1909 34.426C61.5135 34.2353 61.7775 34.03 61.9829 33.81C62.2029 33.546 62.3789 33.2527 62.5109 32.93H65.7009C65.5102 33.7513 65.1729 34.4847 64.6889 35.13C64.4835 35.4087 64.2342 35.68 63.9409 35.944C63.6622 36.208 63.3322 36.4427 62.9509 36.648C62.5695 36.8533 62.1295 37.0147 61.6309 37.132C61.1469 37.264 60.5969 37.33 59.9809 37.33ZM67.46 21.6H70.54V27.32H70.65C70.8553 26.968 71.1267 26.66 71.464 26.396C71.7573 26.1613 72.1167 25.9487 72.542 25.758C72.982 25.5527 73.5247 25.45 74.17 25.45C75.5487 25.45 76.6267 25.8533 77.404 26.66C78.1813 27.452 78.57 28.6253 78.57 30.18V37H75.49V30.62C75.49 29.784 75.2847 29.1533 74.874 28.728C74.4633 28.3027 73.8987 28.09 73.18 28.09C72.828 28.09 72.4907 28.1633 72.168 28.31C71.8453 28.4567 71.5593 28.662 71.31 28.926C71.0753 29.1753 70.8847 29.4833 70.738 29.85C70.606 30.2167 70.54 30.62 70.54 31.06V37H67.46V21.6Z" fill="black"/>
                  <path d="M5.17 46.68H0.22V43.6H13.42V46.68H8.47V59H5.17V46.68ZM19.3617 59.33C18.5111 59.33 17.7117 59.176 16.9637 58.868C16.2304 58.56 15.5924 58.142 15.0497 57.614C14.5071 57.0713 14.0817 56.4407 13.7737 55.722C13.4657 54.9887 13.3117 54.2113 13.3117 53.39C13.3117 52.5687 13.4657 51.7987 13.7737 51.08C14.0817 50.3467 14.5071 49.716 15.0497 49.188C15.5924 48.6453 16.2304 48.22 16.9637 47.912C17.7117 47.604 18.5111 47.45 19.3617 47.45C20.2417 47.45 21.0411 47.604 21.7597 47.912C22.4931 48.22 23.1237 48.6453 23.6517 49.188C24.1797 49.7307 24.5831 50.3613 24.8617 51.08C25.1551 51.7987 25.3017 52.5687 25.3017 53.39V54.05H16.5017C16.5604 54.402 16.6704 54.7393 16.8317 55.062C17.0077 55.3847 17.2204 55.6707 17.4697 55.92C17.7337 56.1547 18.0271 56.3453 18.3497 56.492C18.6724 56.624 19.0097 56.69 19.3617 56.69C19.8604 56.69 20.2637 56.624 20.5717 56.492C20.8944 56.3453 21.1584 56.1913 21.3637 56.03C21.5837 55.8393 21.7597 55.6193 21.8917 55.37H25.1917C24.9571 56.1033 24.5904 56.7633 24.0917 57.35C23.8717 57.5993 23.6151 57.8413 23.3217 58.076C23.0284 58.3107 22.6911 58.5233 22.3097 58.714C21.9284 58.9047 21.4884 59.0513 20.9897 59.154C20.5057 59.2713 19.9631 59.33 19.3617 59.33ZM22.0017 52.18C21.9431 51.9013 21.8404 51.6373 21.6937 51.388C21.5471 51.1387 21.3564 50.9187 21.1217 50.728C20.9017 50.5373 20.6377 50.3833 20.3297 50.266C20.0364 50.1487 19.7137 50.09 19.3617 50.09C18.6431 50.09 18.0417 50.3027 17.5577 50.728C17.0884 51.1387 16.7731 51.6227 16.6117 52.18H22.0017ZM31.7831 59.33C31.0645 59.33 30.3898 59.1907 29.7591 58.912C29.1431 58.6333 28.6005 58.2373 28.1311 57.724C27.6618 57.2107 27.2878 56.5873 27.0091 55.854C26.7451 55.1207 26.6131 54.2993 26.6131 53.39C26.6131 52.4807 26.7451 51.6593 27.0091 50.926C27.2878 50.1927 27.6618 49.5693 28.1311 49.056C28.6005 48.5427 29.1431 48.1467 29.7591 47.868C30.3898 47.5893 31.0645 47.45 31.7831 47.45C32.3991 47.45 32.9198 47.5453 33.3451 47.736C33.7851 47.912 34.1518 48.11 34.4451 48.33C34.7825 48.594 35.0685 48.8873 35.3031 49.21H35.4131V47.78H38.4931V59H35.4131V57.57H35.3031C35.0685 57.8927 34.7825 58.186 34.4451 58.45C34.1518 58.67 33.7851 58.868 33.3451 59.044C32.9198 59.2347 32.3991 59.33 31.7831 59.33ZM32.5531 56.69C33.3891 56.69 34.0711 56.404 34.5991 55.832C35.1418 55.26 35.4131 54.446 35.4131 53.39C35.4131 52.334 35.1418 51.52 34.5991 50.948C34.0711 50.376 33.3891 50.09 32.5531 50.09C31.7758 50.09 31.1231 50.376 30.5951 50.948C30.0671 51.52 29.8031 52.334 29.8031 53.39C29.8031 54.446 30.0671 55.26 30.5951 55.832C31.1231 56.404 31.7758 56.69 32.5531 56.69ZM40.9131 47.78H43.9931V49.32H44.1031C44.2938 48.968 44.5431 48.66 44.8511 48.396C45.1151 48.1613 45.4525 47.9487 45.8631 47.758C46.2738 47.5527 46.7871 47.45 47.4031 47.45C48.1218 47.45 48.7158 47.56 49.1851 47.78C49.6691 48 50.0578 48.242 50.3511 48.506C50.6885 48.814 50.9525 49.1587 51.1431 49.54H51.2531C51.4438 49.1587 51.7078 48.814 52.0451 48.506C52.3385 48.242 52.7051 48 53.1451 47.78C53.5998 47.56 54.1791 47.45 54.8831 47.45C56.2178 47.45 57.2665 47.8533 58.0291 48.66C58.7918 49.452 59.1731 50.6253 59.1731 52.18V59H56.0931V52.51C56.0931 51.674 55.9098 51.0653 55.5431 50.684C55.1765 50.288 54.6631 50.09 54.0031 50.09C53.3431 50.09 52.7711 50.3467 52.2871 50.86C51.8178 51.3733 51.5831 52.07 51.5831 52.95V59H48.5031V52.51C48.5031 51.674 48.3198 51.0653 47.9531 50.684C47.5865 50.288 47.0731 50.09 46.4131 50.09C45.7531 50.09 45.1811 50.3467 44.6971 50.86C44.2278 51.3733 43.9931 52.07 43.9931 52.95V59H40.9131V47.78ZM66.3137 59.33C65.7123 59.33 65.1697 59.2713 64.6857 59.154C64.2017 59.0513 63.769 58.9047 63.3877 58.714C63.021 58.5233 62.691 58.3107 62.3977 58.076C62.119 57.8413 61.8843 57.5993 61.6937 57.35C61.2243 56.7633 60.8943 56.1033 60.7037 55.37H63.8937C64.011 55.6487 64.1723 55.8907 64.3777 56.096C64.5537 56.272 64.7957 56.4333 65.1037 56.58C65.4117 56.7267 65.815 56.8 66.3137 56.8C67.0323 56.8 67.5237 56.7047 67.7877 56.514C68.0517 56.3087 68.1837 56.0373 68.1837 55.7C68.1837 55.4067 68.0077 55.1867 67.6557 55.04C67.3183 54.8933 66.893 54.7613 66.3797 54.644C65.8663 54.5267 65.309 54.402 64.7077 54.27C64.121 54.138 63.571 53.94 63.0577 53.676C62.5443 53.412 62.1117 53.06 61.7597 52.62C61.4223 52.18 61.2537 51.5933 61.2537 50.86C61.2537 50.42 61.3563 49.9947 61.5617 49.584C61.767 49.1733 62.0677 48.814 62.4637 48.506C62.8597 48.1833 63.351 47.9267 63.9377 47.736C64.5243 47.5453 65.2063 47.45 65.9837 47.45C66.5703 47.45 67.0983 47.5013 67.5677 47.604C68.037 47.7067 68.4477 47.846 68.7997 48.022C69.1663 48.198 69.4817 48.396 69.7457 48.616C70.0097 48.836 70.2297 49.056 70.4057 49.276C70.831 49.804 71.117 50.4053 71.2637 51.08H68.1837C68.0957 50.8747 67.9637 50.6913 67.7877 50.53C67.6263 50.398 67.399 50.2733 67.1057 50.156C66.827 50.0387 66.453 49.98 65.9837 49.98C65.4263 49.98 65.0303 50.0753 64.7957 50.266C64.561 50.442 64.4437 50.64 64.4437 50.86C64.4437 51.1533 64.6123 51.3733 64.9497 51.52C65.3017 51.6667 65.7343 51.7987 66.2477 51.916C66.761 52.0333 67.311 52.158 67.8977 52.29C68.499 52.422 69.0563 52.62 69.5697 52.884C70.083 53.148 70.5083 53.5 70.8457 53.94C71.1977 54.38 71.3737 54.9667 71.3737 55.7C71.3737 56.1693 71.2637 56.624 71.0437 57.064C70.8237 57.4893 70.501 57.8707 70.0757 58.208C69.6503 58.5453 69.1223 58.8167 68.4917 59.022C67.861 59.2273 67.135 59.33 66.3137 59.33Z" fill="black"/>
              </svg>
            </div>
            <div>
              <h1 className='overlay-text'>
                <div><span className="stroke">01 </span><span>Home</span></div>
                <div><span className="stroke">02 </span><span>A propos</span></div>
                <div><span className="stroke">03 </span><span>Services</span></div>
              </h1>
            </div>
            <div>
              <h1 className='overlay-text'>
                <div><span className="stroke">04 </span><span>Details</span></div>
                <div><span className="stroke">05 </span><span>Mode de livraison</span></div>
              </h1>
            </div>
          </div>

          <div className="bottom">
              <div className="info info-menu info-menu1">
                <div><div><Phone/></div></div>
                <div><div><span>Call</span></div></div>
                <div><div><small>+261326603472</small></div></div>
              </div>
              <div className="info info-menu info-menu2">
                <div><div><Mail/></div></div>
                <div><div><span>Email</span></div></div>
                <div><div><small>pioneercoder@gmail.com</small></div></div>
              </div>
              <div className="info info-menu info-menu3">
                <div><div><MessageSquareMore/></div></div>
                <div><div><span>Message</span></div></div>
                <div><div><small>via typeforme</small></div></div>
              </div>
          </div>
       </div> 
        <svg className='overlay-blob left' width="474" height="781" viewBox="0 0 474 781" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M126.939 367.113L0 0V782H473.5L457.144 721.912C437.545 649.911 385.105 591.388 315.679 564.033C227.028 529.105 158.077 457.166 126.939 367.113Z" fill="#F8F5E6"/>
        </svg>
        <svg className='overlay-blob right' width="479" height="457" viewBox="0 0 479 457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M479 0C230 107 85.5 208 0 457H479V0Z" fill="#F9AA0F"/>
        </svg>
       <svg className='overlay-svg'>
            <path d={`M0 0 Q${width/2} 0, ${width} 0`}></path>
        </svg>
    </div>
  )
}

export default OverlayMenu