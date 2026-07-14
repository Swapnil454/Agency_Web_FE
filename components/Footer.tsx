import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#161616] pt-16 pb-12 border-t border-white/20">
      <div className="max-w-[1770px] mx-auto w-full px-5 sm:px-10 lg:px-24 xl:px-32">
        
        {/* Row 1: Our Clients */}
        <div className="pb-16 border-b border-white/[0.15]">
          <h3 className="text-[20px] text-white mb-8 ">Our clients:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* Client 1 */}
            <div>
              <div className="mb-4 flex items-center h-12">
                <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784024533/ChatGPT_Image_Jul_14_2026_03_10_40_PM_adosxq.png" alt="BitForge Logo" className="h-full w-auto object-contain" />
              </div>
              <p className="text-[15px] text-white leading-snug font-medium">
                Powering Global Digital Commerce with a Scalable Marketplace
              </p>
            </div>
            {/* Client 2 */}
            <div>
              <div className="mb-4 flex items-center h-12">
                <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784024533/BHAKTI_MUSIC_transparent_uqhpfq.png" alt="Bhakti Logo" className="h-full w-auto object-contain" />
              </div>
              <p className="text-[15px] text-white leading-snug font-medium">
                Redefining Digital Audio Through Personalized Streaming
              </p>
            </div>
            {/* Client 3 */}
            <div>
              <div className="mb-4 flex items-center h-12">
                <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784024534/ChatGPT_Image_Jul_14_2026_03_17_08_PM_ncrkin.png" alt="Deployra Logo" className="h-full w-auto object-contain" />
              </div>
              <p className="text-[15px] text-white leading-snug font-medium">
                Scaling AI-Powered Deployments for <br className="hidden lg:block"/> Modern Engineering Teams
              </p>
            </div>
            {/* Client 4 */}
            <div>
              <div className="mb-4 flex items-center h-12">
                <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784024533/ChatGPT_Image_Jul_14_2026_03_48_21_PM_xzrxye.png" alt="XRP Logo" className="h-full w-auto object-contain" />
              </div>
              <p className="text-[15px] text-white leading-snug font-medium">
                Empowering Digital Finance Through Scalable Blockchain Infrastructure
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Partnerships & Recognized by */}
        <div className="py-12 border-b border-white/[0.15] flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Partnerships */}
          <div className="flex-1">
            <h3 className="text-[15px] text-white mb-6">Trusted Technologies:</h3>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
              <div className="flex items-center gap-2.5">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="10" height="10" fill="white" />
                  <rect x="12" width="10" height="10" fill="white" />
                  <rect y="12" width="10" height="10" fill="white" />
                  <rect x="12" y="12" width="10" height="10" fill="white" />
                </svg>
                <span className="text-white font-semibold text-[21px] tracking-[-0.02em]" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>Microsoft</span>
              </div>
              <svg width="54" height="33" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_272_3455)">
                  <path d="M15.4152 11.7744C15.4152 12.4279 15.4858 12.9577 15.6094 13.3462C15.7507 13.7347 15.9273 14.1585 16.1746 14.6177C16.2629 14.759 16.2982 14.9003 16.2982 15.0239C16.2982 15.2005 16.1922 15.3771 15.9626 15.5537L14.8501 16.2954C14.6911 16.4014 14.5322 16.4544 14.3909 16.4544C14.2143 16.4544 14.0377 16.3661 13.8611 16.2071C13.6139 15.9422 13.4019 15.6597 13.2253 15.3771C13.0487 15.0769 12.8721 14.7413 12.6779 14.3351C11.3004 15.9599 9.56971 16.7722 7.48582 16.7722C6.00238 16.7722 4.81916 16.3484 3.95382 15.5007C3.08847 14.653 2.64697 13.5228 2.64697 12.11C2.64697 10.6089 3.17677 9.39034 4.25404 8.47201C5.3313 7.55369 6.76176 7.09453 8.58075 7.09453C9.18119 7.09453 9.79929 7.14751 10.4527 7.23581C11.1061 7.32411 11.7772 7.46539 12.4836 7.62433V6.33515C12.4836 4.99298 12.2011 4.057 11.6536 3.50954C11.0885 2.96208 10.1348 2.69718 8.77501 2.69718C8.15691 2.69718 7.52114 2.76782 6.86772 2.92676C6.2143 3.0857 5.57854 3.27996 4.96044 3.5272C4.67788 3.65082 4.46596 3.72146 4.34234 3.75678C4.21872 3.7921 4.13042 3.80976 4.05978 3.80976C3.81254 3.80976 3.68892 3.63316 3.68892 3.2623V2.39696C3.68892 2.1144 3.72424 1.90248 3.81254 1.77886C3.90084 1.65524 4.05978 1.53161 4.30702 1.40799C4.92512 1.09011 5.66684 0.825213 6.53218 0.613293C7.39752 0.383712 8.31585 0.277752 9.28715 0.277752C11.3887 0.277752 12.9251 0.754573 13.9141 1.70822C14.8854 2.66186 15.3799 4.10998 15.3799 6.05259V11.7744H15.4152ZM8.24521 14.4588C8.82799 14.4588 9.42843 14.3528 10.0642 14.1409C10.7 13.929 11.2651 13.5404 11.7419 13.0106C12.0245 12.6751 12.2364 12.3042 12.3423 11.8804C12.4483 11.4566 12.5189 10.9444 12.5189 10.344V9.60226C12.0068 9.47864 11.4593 9.37268 10.8942 9.30204C10.3291 9.2314 9.78163 9.19607 9.23417 9.19607C8.05095 9.19607 7.1856 9.42566 6.60282 9.90248C6.02004 10.3793 5.73748 11.0504 5.73748 11.9334C5.73748 12.7634 5.9494 13.3815 6.3909 13.8053C6.81474 14.2468 7.43284 14.4588 8.24521 14.4588ZM22.4262 16.3661C22.1083 16.3661 21.8964 16.3131 21.7551 16.1895C21.6139 16.0835 21.4902 15.8363 21.3843 15.5007L17.2342 1.8495C17.1282 1.49629 17.0752 1.26671 17.0752 1.14309C17.0752 0.860533 17.2165 0.701593 17.4991 0.701593H19.2298C19.5653 0.701593 19.7949 0.754573 19.9185 0.878193C20.0598 0.984154 20.1657 1.23139 20.2717 1.56694L23.2386 13.2579L25.9936 1.56694C26.0819 1.21373 26.1878 0.984154 26.3291 0.878193C26.4704 0.772233 26.7176 0.701593 27.0355 0.701593H28.4483C28.7838 0.701593 29.0134 0.754573 29.1547 0.878193C29.296 0.984154 29.4196 1.23139 29.4902 1.56694L32.2805 13.3992L35.3357 1.56694C35.4417 1.21373 35.5653 0.984154 35.6889 0.878193C35.8302 0.772233 36.0598 0.701593 36.3777 0.701593H38.02C38.3026 0.701593 38.4615 0.842873 38.4615 1.14309C38.4615 1.23139 38.4439 1.31969 38.4262 1.42565C38.4086 1.53162 38.3732 1.6729 38.3026 1.86716L34.0465 15.5184C33.9406 15.8716 33.8169 16.1012 33.6757 16.2071C33.5344 16.3131 33.3048 16.3837 33.0046 16.3837H31.4858C31.1503 16.3837 30.9207 16.3307 30.7794 16.2071C30.6381 16.0835 30.5145 15.8539 30.4439 15.5007L27.7066 4.10998L24.9869 15.4831C24.8986 15.8363 24.7927 16.0658 24.6514 16.1895C24.5101 16.3131 24.2629 16.3661 23.945 16.3661H22.4262ZM45.1194 16.8429C44.2011 16.8429 43.2827 16.7369 42.3997 16.525C41.5167 16.3131 40.828 16.0835 40.3688 15.8186C40.0863 15.6597 39.892 15.4831 39.8214 15.3241C39.7507 15.1652 39.7154 14.9886 39.7154 14.8296V13.929C39.7154 13.5581 39.8567 13.3815 40.1216 13.3815C40.2275 13.3815 40.3335 13.3992 40.4395 13.4345C40.5454 13.4698 40.7044 13.5404 40.881 13.6111C41.4814 13.876 42.1348 14.0879 42.8236 14.2292C43.53 14.3705 44.2187 14.4411 44.9251 14.4411C46.0377 14.4411 46.903 14.2468 47.5035 13.8583C48.1039 13.4698 48.4218 12.9047 48.4218 12.1806C48.4218 11.6861 48.2629 11.28 47.945 10.9444C47.6271 10.6089 47.0267 10.3087 46.1613 10.0261L43.6006 9.23139C42.3114 8.82521 41.3578 8.22477 40.775 7.43007C40.1922 6.65303 39.892 5.78769 39.892 4.86936C39.892 4.12764 40.0509 3.47422 40.3688 2.9091C40.6867 2.34398 41.1105 1.8495 41.6403 1.46097C42.1702 1.05479 42.7706 0.754573 43.477 0.542652C44.1834 0.330732 44.9251 0.242432 45.7022 0.242432C46.0907 0.242432 46.4969 0.260092 46.8854 0.313072C47.2916 0.366052 47.6624 0.436692 48.0333 0.507332C48.3865 0.595633 48.722 0.683933 49.0399 0.789893C49.3578 0.895853 49.605 1.00181 49.7816 1.10777C50.0289 1.24905 50.2055 1.39033 50.3114 1.54928C50.4174 1.69056 50.4704 1.88482 50.4704 2.13206V2.96208C50.4704 3.33294 50.3291 3.5272 50.0642 3.5272C49.9229 3.5272 49.6933 3.45656 49.3931 3.31528C48.3865 2.85612 47.2562 2.62654 46.0024 2.62654C44.9958 2.62654 44.2011 2.78548 43.6536 3.12102C43.1061 3.45656 42.8236 3.9687 42.8236 4.69276C42.8236 5.18724 43.0002 5.61109 43.3534 5.94663C43.7066 6.28217 44.36 6.61771 45.296 6.91793L47.8037 7.71263C49.0752 8.11881 49.9935 8.68393 50.541 9.408C51.0885 10.1321 51.3534 10.9621 51.3534 11.8804C51.3534 12.6398 51.1944 13.3285 50.8942 13.929C50.5763 14.5294 50.1525 15.0592 49.605 15.4831C49.0576 15.9246 48.4041 16.2424 47.6448 16.472C46.8501 16.7193 46.02 16.8429 45.1194 16.8429Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M48.4573 25.4257C42.6472 29.717 34.2057 31.9952 26.9474 31.9952C16.7752 31.9952 7.60963 28.2336 0.686895 21.9819C0.139434 21.4875 0.633915 20.8164 1.28734 21.2049C8.77519 25.5493 18.0114 28.1806 27.5655 28.1806C34.0114 28.1806 41.0931 26.8385 47.6096 24.0835C48.5809 23.642 49.4109 24.7193 48.4573 25.4257Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M50.8769 22.6707C50.1352 21.717 45.9674 22.2115 44.0778 22.4411C43.5127 22.5117 43.4244 22.0173 43.9365 21.6464C47.2566 19.3153 52.7136 19.9864 53.3493 20.7634C53.9851 21.5581 53.1727 27.0151 50.0646 29.6287C49.5878 30.0349 49.1286 29.823 49.3405 29.2932C50.0469 27.5449 51.6187 23.6067 50.8769 22.6707Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_272_3455">
                    <rect width="53.3333" height="31.7881" fill="white" transform="translate(0.333496 0.224731)"/>
                  </clipPath>
                </defs>
              </svg>
              <div className="flex items-center gap-2.5">
                <svg width="28" height="28" viewBox="0 0 128 128" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49H66V24H51v12H26v13H13v14H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.6-1zM28 39h10v11H28V39zm13.1 44.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7.1 3.1 1.4 3.1 3.1zM28 52h10v11H28V52zm-13 0h11v11H15V52zm27.7 50.2c-15.8-.1-24.3-5.4-31.3-12.4 2.1.1 4.1.2 5.9.2 1.6 0 3.2 0 4.7-.1 3.9-.2 7.3-.7 10.1-1.5 2.3 5.3 6.5 10.2 14 13.8h-3.4zM51 63H40V52h11v11zm0-13H40V39h11v11zm13 13H53V52h11v11zm0-13H53V39h11v11zm0-13H53V26h11v11zm13 26H66V52h11v11zM38.8 81.2c-.2-.1-.5-.2-.8-.2-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.3-.1-.6-.2-.8-.2.3-.4.5-.8.5-.5 0-.9-.4-.9-.9.1-.4.3-.7.5-.8z" />
                </svg>
                <span className="text-white font-bold text-[21px] tracking-[-0.02em]">Docker</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg width="25" height="25" viewBox="0 0 128 128" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M63.556 1.911a8.51 8.44 0 0 0-3.26.826L15.794 24a8.51 8.44 0 0 0-4.603 5.725L.214 77.484a8.51 8.44 0 0 0 1.154 6.47 8.51 8.44 0 0 0 .485.673l30.799 38.297a8.51 8.44 0 0 0 6.654 3.175l49.393-.011a8.51 8.44 0 0 0 6.654-3.17l30.79-38.303a8.51 8.44 0 0 0 1.644-7.14l-10.996-47.76a8.51 8.44 0 0 0-4.604-5.727L67.681 2.738a8.51 8.44 0 0 0-4.125-.827Zm.44 16.252c1.47 0 2.664 1.327 2.664 2.961 0 .232.014.544.006.758-.034.943-.24 1.662-.364 2.531-.224 1.858-.417 3.4-.3 4.832.105.717.522 1 .869 1.332a63.624 63.624 0 0 0 .062 1.19c8.468.751 16.335 4.625 22.112 10.682l1.011-.723c.343.021 1.1.124 1.618-.176 1.19-.802 2.276-1.915 3.59-3.25.601-.638 1.044-1.245 1.76-1.861.162-.14.409-.328.59-.473 1.278-1.018 3.057-.912 3.974.238.917 1.15.622 2.908-.655 3.928-.18.145-.416.346-.588.473-.758.56-1.456.846-2.212 1.29-1.593.984-2.913 1.8-3.961 2.784-.494.53-.457 1.03-.5 1.508-.148.136-.67.598-.946.848a34.478 34.478 0 0 1 4.99 11.537 34.398 34.398 0 0 1 .56 12.435l1.073.313c.194.274.592.94 1.15 1.156 1.372.431 2.914.59 4.776.785.875.073 1.628.03 2.555.205.222.042.545.13.773.182 1.57.379 2.578 1.822 2.254 3.244-.324 1.422-1.857 2.286-3.437 1.946l-.04-.006c-.016-.004-.033-.012-.05-.016-.221-.048-.497-.098-.69-.148-.91-.245-1.57-.61-2.388-.922-1.763-.632-3.224-1.16-4.647-1.366-.72-.058-1.09.287-1.49.551a39.835 39.835 0 0 0-1.139-.199c-2.552 8.02-7.985 14.966-15.353 19.317.127.306.342.958.443 1.074-.17.449-.421.88-.205 1.572.517 1.34 1.354 2.652 2.363 4.229.488.728.988 1.288 1.428 2.122.105.2.244.507.346.717.685 1.465.183 3.151-1.131 3.785-1.326.639-2.974-.037-3.684-1.51-.1-.208-.244-.485-.33-.683-.377-.864-.507-1.604-.773-2.44-.604-1.772-1.102-3.24-1.827-4.48-.406-.6-.903-.676-1.359-.824-.085-.146-.4-.724-.57-1.024a34.56 34.56 0 0 1-4.57 1.377 34.413 34.413 0 0 1-20.01-1.44l-.604 1.09c-.449.12-.882.244-1.148.561-.97 1.157-1.356 3.016-2.061 4.786-.265.836-.393 1.577-.77 2.441-.086.196-.229.468-.33.676v.008l-.006.006c-.71 1.468-2.352 2.139-3.675 1.502-1.315-.633-1.818-2.32-1.133-3.785.102-.211.236-.517.342-.717.44-.834.94-1.398 1.427-2.127 1.008-1.578 1.895-2.994 2.413-4.334.13-.446-.063-1.057-.237-1.508l.483-1.159c-7.09-4.2-12.688-10.897-15.36-19.181l-1.162.199c-.31-.174-.937-.586-1.531-.539-1.422.206-2.88.733-4.643 1.365-.82.314-1.48.672-2.39.916-.193.052-.47.105-.69.154-.017.004-.034.014-.05.018l-.04.004c-1.58.341-3.112-.523-3.437-1.945-.325-1.422.684-2.865 2.254-3.245l.039-.011.021-.006c.224-.052.51-.125.713-.164.927-.175 1.68-.132 2.555-.205 1.862-.195 3.405-.354 4.775-.785.434-.18.85-.775 1.145-1.155l1.115-.326c-1.25-8.655.864-17.15 5.434-24.027l-.852-.762c-.055-.333-.127-1.101-.537-1.537-1.047-.983-2.366-1.8-3.959-2.783-.756-.445-1.449-.733-2.209-1.293-.16-.12-.376-.3-.55-.444l-.042-.027c-1.278-1.019-1.571-2.778-.654-3.928.516-.647 1.304-.967 2.123-.94a3.168 3.168 0 0 1 1.854.702c.182.143.431.333.593.473.715.614 1.15 1.221 1.752 1.859 1.314 1.334 2.4 2.442 3.592 3.244.626.364 1.107.218 1.582.154.153.113.667.483.961.684a34.262 34.262 0 0 1 17.404-9.943 34.663 34.663 0 0 1 4.815-.74l.062-1.128c.355-.344.753-.837.866-1.377.116-1.43-.073-2.974-.297-4.832-.124-.869-.329-1.588-.364-2.53-.007-.194.004-.462.006-.684 0-.025-.006-.05-.006-.075 0-1.634 1.193-2.959 2.663-2.959zm-3.334 20.66a28.076 28.076 0 0 0-2.84.489 27.438 27.438 0 0 0-13.215 7.201l11.457 8.121.021-.011a2.334 2.334 0 0 0 1.383.449 2.348 2.348 0 0 0 2.346-2.248l.057-.028zm6.675 0 .791 13.95.012.006a2.35 2.35 0 0 0 3.733 1.793l.04.017 11.383-8.07a27.668 27.668 0 0 0-15.959-7.695ZM40.452 51.73a27.432 27.432 0 0 0-3.892 17.365l13.408-3.87.012-.046a2.348 2.348 0 0 0 1.217-.803 2.345 2.345 0 0 0-.295-3.232l.01-.057zm47.014.008-10.402 9.308.006.03a2.329 2.329 0 0 0-.746 1.246 2.35 2.35 0 0 0 1.668 2.789l.011.056L91.48 69.05a27.703 27.703 0 0 0-.58-8.931 27.774 27.774 0 0 0-3.434-8.381ZM61.853 61.81l-2.67 3.324.957 4.153 3.857 1.857 3.848-1.85.957-4.154-2.664-3.33zm13.736 11.395a2.333 2.333 0 0 0-.898.232 2.351 2.351 0 0 0-1.139 3.045l-.017.023L78.92 89.51a27.466 27.466 0 0 0 11.102-13.95l-13.871-2.344-.021.028a2.276 2.276 0 0 0-.542-.04zm-23.293.056a2.378 2.378 0 0 0-.46.04l-.024-.028-13.75 2.332a27.58 27.58 0 0 0 11.07 13.854l5.326-12.873-.039-.053a2.326 2.326 0 0 0 .131-1.446 2.349 2.349 0 0 0-2.254-1.826zm11.616 5.64a2.351 2.351 0 0 0-1.987 1.241h-.012l-6.761 12.225a27.542 27.542 0 0 0 15.031.773 28.056 28.056 0 0 0 2.71-.756l-6.78-12.248h-.051a2.337 2.337 0 0 0-1.053-1.002 2.32 2.32 0 0 0-1.097-.232z" />
                </svg>
                <span className="text-white font-bold text-[21px] tracking-[-0.02em]">Kubernetes</span>
              </div>
            </div>
          </div>
          {/* Recognized by */}
          <div className="flex-1">
            <h3 className="text-[15px] text-white mb-6">Client Success:</h3>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
              <div className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="text-white font-bold text-[17px] tracking-tight">98% Client Retention</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="text-white font-bold text-[17px] tracking-tight">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="text-white font-bold text-[17px] tracking-tight">Fast Response Time</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="text-white font-bold text-[17px] tracking-tight">Agile Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Footer Details */}
        <div className="py-12 border-b border-white/[0.15] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Address */}
          <div>
            <h4 className="text-white font-bold text-[17px] mb-4">Agency S.A.</h4>
            <div className="text-[15px] text-white space-y-1 mb-6 font-medium">
              <p>Nowe Garbary Office Center</p>
              <p>ul. Małe Garbary 9</p>
              <p>61-756 Poznań, Poland</p>
            </div>
            <a href="#" className="text-[15px] text-white font-bold underline underline-offset-4 decoration-white hover:text-gray-200 transition-colors">hello@agency.com</a>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-[15px] text-white mb-6 ">Key Achievements:</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              <div>
                <div className="text-[#00FF88] font-black text-[24px] leading-none mb-1">500+</div>
                <div className="text-white font-medium text-[13px] leading-tight">npm Downloads</div>
              </div>
              <div>
                <div className="text-[#00FF88] font-black text-[24px] leading-none mb-1">2M+</div>
                <div className="text-white font-medium text-[13px] leading-tight">Lines of Production Code</div>
              </div>
              <div>
                <div className="text-[#00FF88] font-black text-[24px] leading-none mb-1">99.9%</div>
                <div className="text-white font-medium text-[13px] leading-tight">Service Availability</div>
              </div>
              <div>
                <div className="text-[#00FF88] font-black text-[24px] leading-none mb-1">100%</div>
                <div className="text-white font-medium text-[13px] leading-tight">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-[17px] mb-2">Next in Commerce Newsletter</h4>
            <p className="text-[15px] text-white font-medium mb-6">Trends & insights for commerce leaders</p>
            <button className="border-2 border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 text-white font-bold text-[15px] px-8 py-4 flex items-center gap-2">
              Subscribe
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Row 4: Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-white ">
          <div>
            ©2026 Agency S.A. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy & Cookie Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of use</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
