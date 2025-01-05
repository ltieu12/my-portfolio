export const ContactLink = ({src, text}) => {
  if (src === "LinkedIn") {
    return (
      <>
          <a href="https://www.linkedin.com/in/lam-tieu-086621274/" className="flex flex-row gap-2 items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.7333 5.1001H9.26664C8.16252 5.10318 7.1045 5.54315 6.32376 6.32389C5.54303 7.10462 5.10305 8.16264 5.09998 9.26676V30.7334C5.10305 31.8376 5.54303 32.8956 6.32376 33.6763C7.1045 34.457 8.16252 34.897 9.26664 34.9001H30.7333C31.8384 34.9001 32.8982 34.4611 33.6796 33.6797C34.461 32.8983 34.9 31.8385 34.9 30.7334V9.26676C34.9 8.1617 34.461 7.10189 33.6796 6.32049C32.8982 5.53908 31.8384 5.1001 30.7333 5.1001ZM33.2333 30.7334C33.2289 31.3951 32.9641 32.0285 32.4962 32.4964C32.0284 32.9643 31.395 33.2291 30.7333 33.2334H9.26664C8.60495 33.2291 7.9716 32.9643 7.5037 32.4964C7.0358 32.0285 6.77101 31.3951 6.76664 30.7334V9.26676C6.77101 8.60507 7.0358 7.97172 7.5037 7.50382C7.9716 7.03593 8.60495 6.77113 9.26664 6.76676H30.7333C31.395 6.77113 32.0284 7.03593 32.4962 7.50382C32.9641 7.97172 33.2289 8.60507 33.2333 9.26676V30.7334Z"
                  fill="black"
                />
                <path
                  d="M10.6266 17.9132C10.6266 17.4712 10.8022 17.0473 11.1148 16.7347C11.4274 16.4222 11.8513 16.2466 12.2933 16.2466C12.7353 16.2466 13.1593 16.4222 13.4718 16.7347C13.7844 17.0473 13.96 17.4712 13.96 17.9132V28.7466C13.96 29.1886 13.7844 29.6125 13.4718 29.9251C13.1593 30.2377 12.7353 30.4132 12.2933 30.4132C11.8513 30.4132 11.4274 30.2377 11.1148 29.9251C10.8022 29.6125 10.6266 29.1886 10.6266 28.7466V17.9132Z"
                  fill="black"
                />
                <path
                  d="M12.2933 12.9066C13.2138 12.9066 13.96 12.1604 13.96 11.2399C13.96 10.3194 13.2138 9.57324 12.2933 9.57324C11.3728 9.57324 10.6266 10.3194 10.6266 11.2399C10.6266 12.1604 11.3728 12.9066 12.2933 12.9066Z"
                  fill="black"
                />
                <path
                  d="M29.3667 22.2834V28.7501C29.3667 29.1921 29.1911 29.6161 28.8785 29.9286C28.5659 30.2412 28.142 30.4168 27.7 30.4168C27.258 30.4168 26.834 30.2412 26.5215 29.9286C26.2089 29.6161 26.0333 29.1921 26.0333 28.7501V22.2834C26.0333 21.5696 25.7497 20.8849 25.2449 20.3801C24.7402 19.8754 24.0555 19.5918 23.3417 19.5918C22.6278 19.5918 21.9431 19.8754 21.4384 20.3801C20.9336 20.8849 20.65 21.5696 20.65 22.2834V28.7501C20.65 29.1921 20.4744 29.6161 20.1618 29.9286C19.8493 30.2412 19.4253 30.4168 18.9833 30.4168C18.5413 30.4168 18.1174 30.2412 17.8048 29.9286C17.4922 29.6161 17.3167 29.1921 17.3167 28.7501V17.9168C17.3235 17.4769 17.5013 17.0569 17.8124 16.7459C18.1235 16.4348 18.5434 16.257 18.9833 16.2501C19.2656 16.2424 19.5447 16.3111 19.7912 16.449C20.0376 16.5869 20.2422 16.7888 20.3833 17.0334C21.2998 16.514 22.3365 16.2443 23.3899 16.2513C24.4433 16.2583 25.4763 16.5417 26.3858 17.0732C27.2953 17.6047 28.0493 18.3657 28.5724 19.28C29.0955 20.1944 29.3694 21.23 29.3667 22.2834Z"
                  fill="black"
                />
              </svg> {text}
            </a>
      </>
    );
  }
  else if (src === "Gmail") {
    return (
      <>
        <a href="mailto:tieunhatlam1210@gmail.com" className="flex flex-row gap-2 items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75999 11.4C9.56958 11.2974 9.35579 11.2458 9.13951 11.2505C8.92323 11.2552 8.71187 11.316 8.52611 11.4268C8.34034 11.5377 8.18652 11.6949 8.0797 11.883C7.97287 12.0711 7.91669 12.2837 7.91666 12.5V28.3334C7.91666 28.6649 8.04835 28.9828 8.28277 29.2173C8.51719 29.4517 8.83514 29.5834 9.16666 29.5834C9.49818 29.5834 9.81612 29.4517 10.0505 29.2173C10.285 28.9828 10.4167 28.6649 10.4167 28.3334V14.5934L19.4067 19.4334C19.7767 19.6334 20.2233 19.6334 20.5933 19.4334L29.5833 14.5934V28.3334C29.5833 28.6649 29.715 28.9828 29.9494 29.2173C30.1839 29.4517 30.5018 29.5834 30.8333 29.5834C31.1648 29.5834 31.4828 29.4517 31.7172 29.2173C31.9516 28.9828 32.0833 28.6649 32.0833 28.3334V12.5C32.0833 12.2837 32.0271 12.0711 31.9203 11.883C31.8135 11.6949 31.6596 11.5377 31.4739 11.4268C31.2881 11.316 31.0767 11.2552 30.8605 11.2505C30.6442 11.2458 30.4304 11.2974 30.24 11.4L20 16.9134L9.75999 11.4Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.85 6.20338C22.9618 5.67667 17.0383 5.67667 11.15 6.20338L8.62001 6.42838C7.30216 6.54605 6.06244 7.10451 5.10108 8.01356C4.13972 8.9226 3.51284 10.1292 3.32168 11.4384C2.49137 17.116 2.49137 22.8841 3.32168 28.5617C3.51325 29.8709 4.14053 31.0772 5.10219 31.986C6.06386 32.8947 7.30377 33.4528 8.62168 33.57L11.1483 33.7967C17.0383 34.3234 22.9617 34.3234 28.8517 33.7967L31.38 33.57C32.6976 33.4524 33.9371 32.8942 34.8985 31.9855C35.8598 31.0768 36.4868 29.8706 36.6783 28.5617C37.5087 22.8841 37.5087 17.116 36.6783 11.4384C36.4871 10.1289 35.86 8.92215 34.8983 8.01307C33.9366 7.104 32.6965 6.5457 31.3783 6.42838L28.85 6.20338ZM11.3733 8.69338C17.1141 8.17891 22.8893 8.17891 28.63 8.69338L31.1583 8.92004C31.9163 8.98736 32.6294 9.30822 33.1825 9.83079C33.7357 10.3534 34.0965 11.0471 34.2067 11.8C35.0019 17.2378 35.0019 22.7623 34.2067 28.2C34.0965 28.9529 33.7357 29.6467 33.1825 30.1693C32.6294 30.6919 31.9163 31.0127 31.1583 31.08L28.63 31.3067C22.89 31.82 17.1133 31.82 11.3733 31.3067L8.84501 31.08C8.08706 31.0127 7.37393 30.6919 6.82082 30.1693C6.2677 29.6467 5.9069 28.9529 5.79668 28.2C5.00143 22.7623 5.00143 17.2378 5.79668 11.8C5.9069 11.0471 6.2677 10.3534 6.82082 9.83079C7.37393 9.30822 8.08706 8.98736 8.84501 8.92004L11.3733 8.69338Z"
              fill="black"
            />
          </svg> {text}
        </a>
      </>
    );
  }
  else {
    return (
      <>
        <a href="https://www.instagram.com/lam.tieu12_/" className="flex flex-row gap-2 items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 3.33325H27C32.3333 3.33325 36.6666 7.66659 36.6666 12.9999V26.9999C36.6666 29.5637 35.6482 32.0224 33.8353 33.8353C32.0225 35.6481 29.5637 36.6666 27 36.6666H13C7.66665 36.6666 3.33331 32.3333 3.33331 26.9999V12.9999C3.33331 10.4362 4.35176 7.9774 6.16461 6.16455C7.97747 4.3517 10.4362 3.33325 13 3.33325ZM12.6666 6.66659C11.0753 6.66659 9.54922 7.29873 8.42401 8.42394C7.29879 9.54916 6.66665 11.0753 6.66665 12.6666V27.3333C6.66665 30.6499 9.34998 33.3333 12.6666 33.3333H27.3333C28.9246 33.3333 30.4507 32.7011 31.576 31.5759C32.7012 30.4507 33.3333 28.9245 33.3333 27.3333V12.6666C33.3333 9.34992 30.65 6.66659 27.3333 6.66659H12.6666ZM28.75 9.16658C29.3025 9.16658 29.8324 9.38608 30.2231 9.77678C30.6138 10.1675 30.8333 10.6974 30.8333 11.2499C30.8333 11.8025 30.6138 12.3324 30.2231 12.7231C29.8324 13.1138 29.3025 13.3333 28.75 13.3333C28.1974 13.3333 27.6675 13.1138 27.2768 12.7231C26.8861 12.3324 26.6666 11.8025 26.6666 11.2499C26.6666 10.6974 26.8861 10.1675 27.2768 9.77678C27.6675 9.38608 28.1974 9.16658 28.75 9.16658ZM20 11.6666C22.2101 11.6666 24.3297 12.5446 25.8925 14.1074C27.4553 15.6702 28.3333 17.7898 28.3333 19.9999C28.3333 22.2101 27.4553 24.3297 25.8925 25.8925C24.3297 27.4553 22.2101 28.3333 20 28.3333C17.7898 28.3333 15.6702 27.4553 14.1074 25.8925C12.5446 24.3297 11.6666 22.2101 11.6666 19.9999C11.6666 17.7898 12.5446 15.6702 14.1074 14.1074C15.6702 12.5446 17.7898 11.6666 20 11.6666ZM20 14.9999C18.6739 14.9999 17.4021 15.5267 16.4644 16.4644C15.5268 17.4021 15 18.6738 15 19.9999C15 21.326 15.5268 22.5978 16.4644 23.5355C17.4021 24.4731 18.6739 24.9999 20 24.9999C21.3261 24.9999 22.5978 24.4731 23.5355 23.5355C24.4732 22.5978 25 21.326 25 19.9999C25 18.6738 24.4732 17.4021 23.5355 16.4644C22.5978 15.5267 21.3261 14.9999 20 14.9999Z"
              fill="black"
            />
          </svg> {text}
        </a>
      </>
    );
  }
}