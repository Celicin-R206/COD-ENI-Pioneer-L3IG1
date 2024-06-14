/** @format */
"use client"

import React, { useEffect } from "react";
import "./hero.css";
import Image from "next/image";
import gsap from 'gsap'
import Link from "next/link";

const Hero = () => {

  useEffect(()=>{

    gsap.to(".middle h1 span",{duration:1,yPercent:-100,ease:"power2",stagger:0.2})
    gsap.to(".hero h1 svg",{delay:0.6,duration:1,scale:1,ease:"power2"})
    gsap.to(".hero > .top svg",{delay:0.6,duration:1,transform:"translate(0%,0%)  rotate(0deg) scale(1)",ease:"power2"})

  },[])
  return (
    <div className="containers hero">
      <div className="top">
        <svg
          width="112"
          height="40"
          viewBox="0 0 112 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.878603 31.0374C0.148067 32.209 0.505632 33.751 1.67725 34.4815C2.84886 35.2121 4.39086 34.8545 5.1214 33.6829L0.878603 31.0374ZM105.063 39.3334C106.423 39.5746 107.72 38.6681 107.962 37.3086L111.893 15.1547C112.134 13.7952 111.227 12.4976 109.868 12.2563C108.508 12.0151 107.211 12.9216 106.97 14.2811L103.475 33.9735L83.7829 30.4792C82.4234 30.238 81.1257 31.1445 80.8845 32.504C80.6433 33.8635 81.5498 35.1611 82.9093 35.4023L105.063 39.3334ZM5.1214 33.6829C17.9631 13.0877 35.52 4.42562 53.1455 5.60595C70.886 6.79398 89.2617 17.993 103.451 38.3035L107.549 35.4401C92.7383 14.2388 73.114 1.93198 53.4795 0.617122C33.73 -0.705446 14.5369 9.13255 0.878603 31.0374L5.1214 33.6829Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="middle">
        <h1>
          <span>Faciliter </span>
          <svg
            width="119"
            height="61"
            viewBox="0 0 119 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="1.5"
              y="1.5"
              width="116"
              height="58"
              rx="29"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M98.0607 31.0607C98.6464 30.4749 98.6464 29.5251 98.0607 28.9393L88.5147 19.3934C87.9289 18.8076 86.9792 18.8076 86.3934 19.3934C85.8076 19.9792 85.8076 20.9289 86.3934 21.5147L94.8787 30L86.3934 38.4853C85.8076 39.0711 85.8076 40.0208 86.3934 40.6066C86.9792 41.1924 87.9289 41.1924 88.5147 40.6066L98.0607 31.0607ZM22 31.5L97 31.5V28.5L22 28.5V31.5Z"
              fill="black"
            />
          </svg>
          <span> votre inscription</span>
        </h1>
        <h1>
          <span>et gestion</span> <span className="stroke">Scolaire</span>
        </h1>
      </div>
      <div className="bottom">
        <svg
          width="152"
          height="59"
          viewBox="0 0 152 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow">
          <path
            d="M2.79151 32.29C1.41561 32.4051 0.393562 33.6139 0.508709 34.9898C0.623856 36.3657 1.83259 37.3877 3.20849 37.2726L2.79151 32.29ZM150.959 40.1863C151.817 39.1041 151.635 37.5317 150.553 36.6742L132.918 22.7006C131.836 21.8431 130.263 22.0253 129.406 23.1074C128.548 24.1896 128.73 25.762 129.813 26.6195L145.488 39.0404L133.067 54.7159C132.209 55.7981 132.392 57.3705 133.474 58.2279C134.556 59.0854 136.128 58.9033 136.986 57.8211L150.959 40.1863ZM3.20849 37.2726C8.31766 36.845 12.2876 34.2653 15.4162 30.9113C18.5097 27.5948 20.8931 23.4046 22.8798 19.4774C24.9486 15.3882 26.4878 11.8181 28.124 9.02702C28.9214 7.66687 29.622 6.71445 30.2474 6.12349C30.8572 5.54732 31.1932 5.5 31.327 5.5V0.5C29.469 0.5 27.9655 1.4007 26.8135 2.48921C25.6771 3.56293 24.6937 4.99184 23.8106 6.49832C22.0857 9.44057 20.2777 13.5449 18.4183 17.2204C16.4768 21.058 14.3511 24.7228 11.7599 27.5007C9.20371 30.2411 6.31322 31.9952 2.79151 32.29L3.20849 37.2726ZM31.327 5.5C33.8873 5.5 35.9075 6.82494 37.8039 9.43525C39.7535 12.1188 41.2948 15.7935 42.8902 19.8129C44.4247 23.6789 46.0294 27.9261 48.0746 31.1536C50.1317 34.4001 53.0583 37.2813 57.4409 37.2813V32.2813C55.6271 32.2813 54.0169 31.1899 52.298 28.4773C50.5672 25.7459 49.1567 22.0477 47.5375 17.9684C45.9793 14.0425 44.2287 9.77188 41.849 6.49641C39.4162 3.14773 36.0698 0.5 31.327 0.5V5.5ZM57.4409 37.2813C61.3788 37.2813 64.2994 35.5512 66.6321 33.2473C68.8543 31.0526 70.7353 28.1242 72.4913 25.6134C76.1503 20.3813 79.8093 16.0799 87.0958 16.0799V11.0799C77.1204 11.0799 72.1485 17.3791 68.3939 22.7478C66.443 25.5373 64.9214 27.9093 63.1186 29.6899C61.4264 31.3612 59.6996 32.2813 57.4409 32.2813V37.2813ZM87.0958 16.0799C89.7164 16.0799 92.6362 17.4723 96.3909 20.0964C98.2299 21.3816 100.159 22.8793 102.273 24.5188C104.37 26.145 106.629 27.8953 109.056 29.6186C118.814 36.5509 131.459 43.1822 149.288 41.117L148.712 36.1502C132.613 38.0151 121.21 32.1195 111.951 25.5424C109.623 23.8884 107.442 22.2 105.337 20.5677C103.25 18.9488 101.216 17.3686 99.2551 15.998C95.4094 13.3104 91.3798 11.0799 87.0958 11.0799V16.0799Z"
            fill="black"
          />
        </svg>
        <Link href={"/register"}>
          <button className="btn primary">
            <div>Commencer maintenant</div>
          </button>
        </Link>
        <svg
          width="123"
          height="123"
          viewBox="0 0 123 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="disq">
          <circle cx="61.5" cy="61.5" r="61.5" fill="black" />
          <path
            d="M55.9071 104.112L54.4658 111.241L49.3283 110.202L49.6435 108.643L52.8458 109.29L53.0935 108.065L50.1558 107.471L50.4711 105.912L53.4088 106.506L53.6565 105.28L50.4682 104.636L50.7835 103.076L55.9071 104.112Z"
            fill="white"
          />
          <path
            d="M40.1095 103.865L41.9537 104.646C41.9022 104.804 41.8784 104.958 41.8825 105.106C41.8844 105.253 41.9154 105.392 41.9757 105.523C42.0328 105.655 42.1199 105.775 42.2369 105.881C42.353 105.989 42.4983 106.08 42.6727 106.154C42.9779 106.283 43.2676 106.319 43.5418 106.26C43.8139 106.2 44.063 106.055 44.2893 105.824C44.5134 105.593 44.7076 105.283 44.8719 104.895C45.0455 104.485 45.1364 104.119 45.1447 103.796C45.1498 103.474 45.0773 103.199 44.9271 102.971C44.776 102.745 44.5533 102.57 44.259 102.445C44.0912 102.374 43.932 102.331 43.7814 102.316C43.63 102.303 43.4881 102.316 43.3559 102.355C43.2236 102.395 43.103 102.458 42.9939 102.545C42.8818 102.634 42.7843 102.746 42.7016 102.881L40.8629 102.086C41.0047 101.812 41.2066 101.557 41.4686 101.321C41.7296 101.087 42.0392 100.899 42.3974 100.758C42.7524 100.618 43.1471 100.551 43.5814 100.557C44.0157 100.564 44.4781 100.671 44.9685 100.879C45.5833 101.139 46.079 101.505 46.4556 101.975C46.83 102.445 47.0504 102.996 47.1168 103.628C47.1811 104.26 47.0562 104.946 46.7423 105.687C46.4266 106.433 46.0168 107 45.513 107.388C45.0082 107.778 44.4563 108.001 43.8572 108.056C43.2572 108.113 42.6563 108.014 42.0547 107.759C41.6318 107.58 41.2671 107.357 40.9607 107.091C40.6543 106.825 40.4141 106.524 40.2402 106.188C40.0653 105.854 39.9644 105.492 39.9376 105.1C39.9107 104.708 39.968 104.296 40.1095 103.865Z"
            fill="white"
          />
          <path
            d="M31.9378 97.3587C32.4086 96.7 32.9338 96.2358 33.5134 95.9662C34.0917 95.6986 34.6818 95.6038 35.2836 95.6818C35.8841 95.7617 36.4521 95.993 36.9876 96.3757C37.5269 96.7611 37.9309 97.2258 38.1997 97.77C38.4651 98.3147 38.5649 98.9039 38.499 99.5377C38.4298 100.172 38.1612 100.817 37.6932 101.472C37.2224 102.13 36.6989 102.594 36.1226 102.863C35.5429 103.133 34.9538 103.228 34.3553 103.15C33.7534 103.072 33.1828 102.84 32.6435 102.455C32.108 102.072 31.7059 101.609 31.4371 101.064C31.167 100.522 31.0656 99.9332 31.1329 99.2975C31.1988 98.6637 31.4671 98.0175 31.9378 97.3587ZM33.5905 98.5397C33.3372 98.8941 33.1711 99.2264 33.092 99.5366C33.0096 99.8472 33.0152 100.131 33.1087 100.387C33.199 100.643 33.377 100.866 33.6428 101.056C33.9086 101.246 34.1784 101.343 34.4522 101.347C34.7228 101.351 34.9926 101.264 35.2618 101.087C35.5277 100.91 35.7873 100.645 36.0406 100.291C36.2938 99.9362 36.4616 99.6036 36.544 99.2929C36.623 98.9828 36.6175 98.6994 36.5272 98.4429C36.4337 98.187 36.2541 97.964 35.9883 97.7741C35.7224 97.5841 35.4543 97.487 35.1837 97.4829C34.9099 97.4792 34.6401 97.5657 34.3742 97.7423C34.105 97.9195 33.8437 98.1853 33.5905 98.5397Z"
            fill="white"
          />
          <path
            d="M32.1847 92.6042L26.8594 97.5573L25.5147 96.1116L29.6751 92.242L27.6726 90.0889L28.8375 89.0055L32.1847 92.6042Z"
            fill="white"
          />
          <path
            d="M27.1924 86.8985L21.0569 90.8034L18.2427 86.3815L19.5848 85.5273L21.339 88.2835L22.3935 87.6124L20.7843 85.0839L22.1264 84.2297L23.7357 86.7582L24.7902 86.087L23.0437 83.3428L24.3858 82.4886L27.1924 86.8985Z"
            fill="white"
          />
          <path
            d="M12.6639 71.3445L19.7044 69.5213L20.1175 71.1164L17.0772 74.6182L17.0879 74.6595L20.7869 73.7016L21.2819 75.6129L14.2414 77.4362L13.8212 75.8136L16.8584 72.3565L16.8441 72.3015L13.1589 73.2559L12.6639 71.3445Z"
            fill="white"
          />
          <path
            d="M19.1924 64.7518L19.2838 66.8805L11.9148 64.7942L11.799 62.0978L18.962 59.3874L19.0534 61.5162L13.8566 63.3317L13.8591 63.3885L19.1924 64.7518ZM16.3428 65.2723L16.1709 61.2703L17.6468 61.2069L17.8187 65.2089L16.3428 65.2723Z"
            fill="white"
          />
          <path
            d="M13.5451 57.1459L11.974 56.8952L12.9699 50.6532L14.541 50.9038L14.1963 53.064L19.8072 53.9592L19.5006 55.8809L13.8897 54.9857L13.5451 57.1459Z"
            fill="white"
          />
          <path
            d="M14.5554 45.4548L21.4757 47.6912L20.8686 49.57L13.9483 47.3336L14.5554 45.4548Z"
            fill="white"
          />
          <path
            d="M22.3758 37.1607C23.0936 37.5352 23.6263 37.9908 23.9738 38.5273C24.3193 39.0627 24.4953 39.6339 24.5017 40.2407C24.506 40.8465 24.356 41.4411 24.0515 42.0246C23.7448 42.6123 23.3407 43.077 22.8393 43.4188C22.3368 43.7575 21.7671 43.9382 21.1303 43.9611C20.4925 43.9807 19.8168 43.8044 19.1032 43.432C18.3854 43.0574 17.8532 42.6035 17.5067 42.0701C17.1591 41.5336 16.9826 40.9635 16.9772 40.3598C16.9707 39.753 17.1209 39.1557 17.4275 38.568C17.732 37.9846 18.135 37.5219 18.6365 37.1801C19.1359 36.8372 19.705 36.6549 20.3439 36.6331C20.9807 36.6102 21.658 36.7861 22.3758 37.1607ZM21.4361 38.9615C21.0499 38.7599 20.6977 38.6416 20.3796 38.6064C20.0605 38.5681 19.7807 38.613 19.5402 38.7412C19.2987 38.8662 19.1024 39.0735 18.9513 39.3632C18.8001 39.6528 18.7418 39.9335 18.7763 40.2052C18.8098 40.4736 18.9329 40.7289 19.1458 40.9708C19.3577 41.2095 19.6567 41.4297 20.0429 41.6312C20.4291 41.8327 20.7818 41.9527 21.1009 41.991C21.419 42.0262 21.6988 41.9812 21.9403 41.8562C22.1808 41.728 22.3766 41.5191 22.5277 41.2295C22.6789 40.9398 22.7377 40.6608 22.7042 40.3923C22.6698 40.1206 22.5466 39.8654 22.3347 39.6267C22.1218 39.3847 21.8223 39.163 21.4361 38.9615Z"
            fill="white"
          />
          <path
            d="M25.5577 27.2325L31.1165 31.9221L30.054 33.1815L25.439 32.7262L25.4115 32.7587L28.332 35.2226L27.0588 36.7318L21.5001 32.0421L22.5809 30.761L27.1576 31.2398L27.1942 31.1963L24.2846 28.7416L25.5577 27.2325Z"
            fill="white"
          />
          <path
            d="M34.7115 28.7456L33.0277 30.0511L30.4686 22.8326L32.6014 21.1789L38.9548 25.4556L37.271 26.7611L32.7847 23.5712L32.7397 23.606L34.7115 28.7456ZM32.6391 26.7217L35.8047 24.2672L36.7099 25.4347L33.5442 27.8891L32.6391 26.7217Z"
            fill="white"
          />
          <path
            d="M40.3666 24.7634L37.0875 18.2718L38.8499 17.3816L41.4116 22.4531L44.0361 21.1274L44.7534 22.5474L40.3666 24.7634Z"
            fill="white"
          />
          <path
            d="M47.2371 21.5514L45.1901 14.5727L50.2197 13.0974L50.6674 14.624L47.5325 15.5436L47.8843 16.7431L50.7603 15.8995L51.2081 17.426L48.3321 18.2696L48.6839 19.4691L51.8053 18.5535L52.2531 20.0801L47.2371 21.5514Z"
            fill="white"
          />
          <path
            d="M62.5164 19.0877L59.7192 19.0092L59.9233 11.7394L62.6921 11.8171C63.4399 11.8381 64.0819 12.0017 64.618 12.3081C65.1565 12.6122 65.5661 13.0405 65.8466 13.5931C66.1296 14.1434 66.2604 14.7972 66.2392 15.5544C66.2179 16.3117 66.0517 16.9584 65.7406 17.4943C65.4296 18.028 64.9991 18.4327 64.449 18.7086C63.8989 18.9821 63.2547 19.1085 62.5164 19.0877ZM61.7399 17.3891L62.4924 17.4103C62.8521 17.4204 63.1602 17.371 63.4167 17.2621C63.6755 17.1534 63.8752 16.9588 64.0157 16.6786C64.1586 16.3984 64.2371 16.0051 64.2513 15.4986C64.2655 14.9922 64.208 14.5951 64.0787 14.3073C63.9518 14.0195 63.7586 13.8139 63.4992 13.6906C63.2421 13.5673 62.9243 13.5004 62.5457 13.4898L61.8499 13.4702L61.7399 17.3891Z"
            fill="white"
          />
          <path
            d="M68.9053 19.6007L70.5576 12.5181L75.662 13.7089L75.3006 15.2582L72.1189 14.516L71.8349 15.7333L74.7537 16.4142L74.3923 17.9636L71.4735 17.2826L71.1895 18.4999L74.3573 19.239L73.9959 20.7883L68.9053 19.6007Z"
            fill="white"
          />
          <path
            d="M81.0227 23.5915L84.6607 17.2941L86.3704 18.2818L83.5281 23.2016L86.0741 24.6725L85.2783 26.05L81.0227 23.5915Z"
            fill="white"
          />
          <path
            d="M93.2379 22.9483L92.7156 23.6219C92.5735 23.8052 92.3939 23.9596 92.1769 24.0849C91.9632 24.2098 91.7384 24.3066 91.5024 24.3753C91.2698 24.4435 91.053 24.4836 90.852 24.4956L90.4645 23.6739C90.6475 23.6001 90.8388 23.4983 91.0384 23.3684C91.2379 23.2386 91.4378 23.0445 91.638 22.7863L92.1602 22.1128L93.2379 22.9483Z"
            fill="white"
          />
          <path
            d="M96.9965 26.3249L91.9734 31.5843L90.5455 30.2206L95.5686 24.9612L96.9965 26.3249Z"
            fill="white"
          />
          <path
            d="M103.526 34.1692L97.7127 38.5397L96.7225 37.2226L98.1975 32.826L98.1719 32.792L95.1178 35.0881L93.9313 33.51L99.7444 29.1395L100.752 30.4793L99.2624 34.8333L99.2965 34.8787L102.339 32.5911L103.526 34.1692Z"
            fill="white"
          />
          <path
            d="M99.1922 41.0639L105.761 37.9429L107.956 42.5618L106.519 43.2445L105.172 40.409L104.043 40.9454L105.256 43.4986L103.819 44.1814L102.606 41.6282L100.04 42.8473L99.1922 41.0639Z"
            fill="white"
          />
          <path
            d="M107.632 54.3326C106.845 54.5233 106.144 54.5311 105.529 54.3561C104.917 54.1806 104.408 53.8665 104.004 53.414C103.602 52.9609 103.323 52.4145 103.168 51.7749C103.012 51.1307 103.01 50.5148 103.163 49.9274C103.318 49.3417 103.628 48.8306 104.092 48.3941C104.559 47.9594 105.184 47.6472 105.966 47.4577C106.753 47.267 107.452 47.2583 108.064 47.4315C108.679 47.6065 109.187 47.9194 109.589 48.3702C109.993 48.8227 110.273 49.3711 110.43 50.0154C110.585 50.655 110.586 51.2685 110.433 51.856C110.283 52.4429 109.975 52.9548 109.509 53.3919C109.044 53.8283 108.419 54.1419 107.632 54.3326ZM107.153 52.3585C107.577 52.2559 107.92 52.1131 108.182 51.9301C108.448 51.7489 108.629 51.5308 108.725 51.276C108.825 51.0229 108.836 50.7376 108.759 50.4201C108.682 50.1026 108.541 49.853 108.337 49.6712C108.135 49.4911 107.874 49.3801 107.554 49.3382C107.238 49.298 106.868 49.3292 106.444 49.4318C106.021 49.5344 105.677 49.6763 105.411 49.8575C105.148 50.0405 104.967 50.2586 104.868 50.5116C104.771 50.7665 104.762 51.0526 104.839 51.3701C104.915 51.6877 105.055 51.9364 105.257 52.1165C105.462 52.2983 105.722 52.4092 106.039 52.4494C106.359 52.4914 106.73 52.461 107.153 52.3585Z"
            fill="white"
          />
          <path
            d="M104.362 57.754L111.632 57.5558L111.718 60.6939C111.732 61.2335 111.647 61.7083 111.462 62.1183C111.276 62.5283 111.002 62.8508 110.639 63.0857C110.276 63.3206 109.837 63.445 109.321 63.4591C108.8 63.4733 108.358 63.3693 107.994 63.1471C107.631 62.9273 107.352 62.6116 107.158 62.2001C106.965 61.7909 106.861 61.3094 106.845 60.7556L106.794 58.8813L108.328 58.8395L108.368 60.3163C108.374 60.5482 108.408 60.745 108.469 60.9068C108.533 61.0708 108.63 61.1949 108.76 61.2789C108.891 61.3654 109.059 61.4058 109.264 61.4002C109.473 61.3945 109.641 61.3449 109.768 61.2515C109.899 61.1603 109.992 61.031 110.049 60.8637C110.109 60.6987 110.135 60.5002 110.129 60.2683L110.11 59.5725L104.416 59.7277L104.362 57.754ZM107.815 61.9228L104.528 63.8313L104.469 61.6872L107.758 59.8213L107.815 61.9228Z"
            fill="white"
          />
          <path
            d="M111.56 67.542L111.078 69.9517L106.708 70.802L106.691 70.8855L110.399 73.3504L109.917 75.7602L102.786 74.3348L103.164 72.4404L107.287 73.2645L107.298 73.2088L103.549 70.8079L103.777 69.6657L108.189 68.8963L108.2 68.8406L104.05 68.011L104.428 66.1166L111.56 67.542Z"
            fill="white"
          />
          <path
            d="M101.114 78.3549L101.995 76.415L107.623 81.609L106.507 84.0661L98.8926 83.2433L99.774 81.3034L105.23 82.0349L105.253 81.9832L101.114 78.3549ZM103.89 79.1797L102.234 82.8266L100.889 82.2155L102.546 78.5686L103.89 79.1797Z"
            fill="white"
          />
          <path
            d="M102.709 87.6922L103.997 88.6264L100.286 93.7429L98.9978 92.8087L100.282 91.0381L95.6832 87.7017L96.8259 86.1265L101.425 89.4629L102.709 87.6922Z"
            fill="white"
          />
          <path
            d="M96.519 97.662L91.3587 92.5372L92.75 91.1362L97.9104 96.261L96.519 97.662Z"
            fill="white"
          />
          <path
            d="M88.6908 98.2977L87.4427 99.1896L86.5873 98.9454L85.2051 98.6237L83.3523 98.1321L84.7738 97.1162L86.0652 97.433L87.0263 97.7763L88.6908 98.2977ZM85.7919 101.522C85.3212 100.863 85.0522 100.216 84.9849 99.5798C84.919 98.9461 85.0204 98.3571 85.2892 97.813C85.5593 97.2707 85.9621 96.8083 86.4976 96.4256C87.0369 96.0402 87.6075 95.8085 88.2094 95.7305C88.8107 95.6558 89.4005 95.7523 89.9787 96.0199C90.5565 96.2909 91.0793 96.7538 91.5473 97.4087C92.0181 98.0675 92.2873 98.713 92.3552 99.3454C92.4225 99.9812 92.322 100.569 92.0538 101.11C91.785 101.654 91.381 102.119 90.8417 102.505C90.3062 102.887 89.7375 103.118 89.1357 103.196C88.5352 103.276 87.9451 103.181 87.3655 102.911C86.7872 102.643 86.2627 102.18 85.7919 101.522ZM87.4446 100.341C87.6979 100.695 87.9584 100.96 88.2262 101.135C88.4935 101.314 88.7633 101.4 89.0358 101.395C89.3077 101.392 89.5766 101.296 89.8424 101.106C90.1082 100.916 90.2871 100.692 90.3793 100.434C90.4709 100.18 90.4765 99.8965 90.396 99.5845C90.3151 99.2757 90.1479 98.9441 89.8947 98.5897C89.6414 98.2353 89.3811 97.9688 89.1139 97.7903C88.8461 97.615 88.5762 97.5285 88.3043 97.5308C88.0318 97.5363 87.7627 97.6341 87.4969 97.824C87.2311 98.014 87.0524 98.2363 86.9608 98.4908C86.8687 98.7487 86.8631 99.0321 86.944 99.3408C87.0245 99.6529 87.1913 99.9861 87.4446 100.341Z"
            fill="white"
          />
          <path
            d="M80.2955 108.161L78.4774 108.931L76.6604 104.641C76.4443 104.131 76.3794 103.638 76.4657 103.162C76.5507 102.689 76.7672 102.259 77.1152 101.873C77.464 101.488 77.9251 101.175 78.4985 100.932C79.0762 100.687 79.6244 100.573 80.1431 100.59C80.6628 100.609 81.1221 100.753 81.521 101.021C81.9187 101.292 82.2256 101.683 82.4416 102.193L84.2587 106.483L82.4406 107.253L80.69 103.12C80.6023 102.913 80.4781 102.747 80.3172 102.622C80.1574 102.499 79.9774 102.427 79.7773 102.403C79.575 102.381 79.3703 102.414 79.1632 102.501C78.9539 102.59 78.788 102.714 78.6655 102.874C78.543 103.034 78.4701 103.214 78.4468 103.414C78.4245 103.616 78.4572 103.821 78.5449 104.028L80.2955 108.161Z"
            fill="white"
          />
          <path
            d="M72.8205 103.067L74.2618 110.195L69.1243 111.234L68.809 109.675L72.0112 109.027L71.7635 107.802L68.8258 108.396L68.5105 106.837L71.4482 106.243L71.2005 105.018L68.0122 105.662L67.6969 104.103L72.8205 103.067Z"
            fill="white"
          />
          <path
            d="M62.1919 105.658L62.8893 107.804L65.1459 107.804L63.3202 109.13L64.0176 111.277L62.1919 109.95L60.3663 111.277L61.0636 109.13L59.238 107.804L61.4946 107.804L62.1919 105.658Z"
            fill="white"
          />
          <circle cx="61.5" cy="61.5" r="17.5" fill="#004491" />
          <path
            d="M54 60C53.4477 60 53 60.4477 53 61C53 61.5523 53.4477 62 54 62V60ZM70.7071 61.7071C71.0976 61.3166 71.0976 60.6834 70.7071 60.2929L64.3431 53.9289C63.9526 53.5384 63.3195 53.5384 62.9289 53.9289C62.5384 54.3195 62.5384 54.9526 62.9289 55.3431L68.5858 61L62.9289 66.6569C62.5384 67.0474 62.5384 67.6805 62.9289 68.0711C63.3195 68.4616 63.9526 68.4616 64.3431 68.0711L70.7071 61.7071ZM54 62H70V60H54V62Z"
            fill="white"
          />
        </svg>
      </div>

      <Image
        alt="stars"
        src={"/assets/images/stars.svg"}
        width={70}
        height={70}
        className="absolute"
      />
      <Image
        alt="stars"
        src={"/assets/images/hero-left-blob.svg"}
        width={70}
        height={70}
        className="absolute left"
      />
      <Image
        alt="stars"
        src={"/assets/images/hero-right-blob.svg"}
        width={10}
        height={10}
        className="right"
      />

      <Image
        alt="stars"
        src={"/assets/images/hero-star.svg"}
        width={10}
        height={10}
        className="absolute star"
      />

    </div>
  );
};

export default Hero;
