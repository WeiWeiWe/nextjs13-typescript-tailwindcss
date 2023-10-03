import { FC } from 'react';

interface IProps {}

const Logo: FC<IProps> = () => {
  return (
    <svg
      width="66"
      height="36"
      viewBox="0 0 66 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.0451 23.0622H26.4776C27.1957 23.0622 27.8121 23.1703 28.3269 23.3866C28.8417 23.6029 29.2375 23.923 29.5143 24.347C29.7912 24.7709 29.9296 25.2922 29.9296 25.9107C29.9296 26.3996 29.8431 26.8235 29.6701 27.1825C29.497 27.5416 29.2526 27.8422 28.9368 28.0845C28.6254 28.3267 28.2577 28.517 27.8338 28.6555L27.2757 28.941H24.2455L24.2325 27.5329H26.4971C26.8648 27.5329 27.1697 27.468 27.412 27.3383C27.6542 27.2085 27.8359 27.029 27.957 26.7997C28.0825 26.5704 28.1452 26.3087 28.1452 26.0146C28.1452 25.6988 28.0847 25.4263 27.9635 25.197C27.8424 24.9634 27.6586 24.7839 27.412 24.6584C27.1654 24.533 26.854 24.4703 26.4776 24.4703H24.8295V32.5098H23.0451V23.0622ZM28.3788 32.5098L26.1921 28.2791L28.0803 28.2726L30.293 32.4189V32.5098H28.3788ZM34.5171 32.6395C33.9851 32.6395 33.5071 32.553 33.0831 32.38C32.6592 32.207 32.298 31.9669 31.9995 31.6597C31.7054 31.3483 31.4783 30.9871 31.3182 30.5761C31.1625 30.1609 31.0846 29.7153 31.0846 29.2395V28.9799C31.0846 28.4392 31.1625 27.9482 31.3182 27.507C31.4739 27.0614 31.6945 26.6786 31.98 26.3585C32.2655 26.0384 32.6073 25.7918 33.0053 25.6188C33.4032 25.4457 33.8423 25.3592 34.3225 25.3592C34.8199 25.3592 35.259 25.4436 35.6397 25.6123C36.0204 25.7766 36.3383 26.0102 36.5935 26.313C36.8487 26.6159 37.0412 26.9792 37.171 27.4031C37.3008 27.8228 37.3657 28.2878 37.3657 28.7982V29.5185H31.8632V28.3375H35.6786V28.2077C35.67 27.9352 35.6181 27.6865 35.5229 27.4615C35.4277 27.2323 35.2806 27.0506 35.0816 26.9165C34.8827 26.7781 34.6253 26.7089 34.3095 26.7089C34.0543 26.7089 33.8315 26.7651 33.6412 26.8776C33.4551 26.9857 33.2994 27.1414 33.174 27.3448C33.0528 27.5437 32.962 27.7817 32.9014 28.0585C32.8409 28.3354 32.8106 28.6425 32.8106 28.9799V29.2395C32.8106 29.5336 32.8495 29.8061 32.9274 30.057C33.0096 30.3079 33.1285 30.5264 33.2843 30.7124C33.4443 30.8941 33.6347 31.0368 33.8553 31.1406C34.0802 31.2401 34.3354 31.2899 34.621 31.2899C34.98 31.2899 35.3044 31.2207 35.5943 31.0822C35.8884 30.9395 36.1436 30.7297 36.3599 30.4528L37.2229 31.3483C37.0758 31.5646 36.8769 31.7722 36.626 31.9712C36.3794 32.1702 36.0809 32.3324 35.7305 32.4579C35.3801 32.579 34.9757 32.6395 34.5171 32.6395ZM40.7528 31.212L42.3879 25.489H44.1788L41.7715 32.5098H40.6814L40.7528 31.212ZM39.5589 25.489L41.2135 31.225L41.2719 32.5098H40.1753L37.7615 25.489H39.5589ZM46.8976 25.489V32.5098H45.1781V25.489H46.8976ZM45.0613 23.6527C45.0613 23.3975 45.1478 23.1855 45.3208 23.0168C45.4982 22.8481 45.7361 22.7637 46.0346 22.7637C46.3331 22.7637 46.5688 22.8481 46.7419 23.0168C46.9192 23.1855 47.0079 23.3975 47.0079 23.6527C47.0079 23.9036 46.9192 24.1134 46.7419 24.2821C46.5688 24.4508 46.3331 24.5351 46.0346 24.5351C45.7361 24.5351 45.4982 24.4508 45.3208 24.2821C45.1478 24.1134 45.0613 23.9036 45.0613 23.6527ZM51.6863 32.6395C51.1542 32.6395 50.6762 32.553 50.2523 32.38C49.8283 32.207 49.4671 31.9669 49.1686 31.6597C48.8745 31.3483 48.6474 30.9871 48.4873 30.5761C48.3316 30.1609 48.2537 29.7153 48.2537 29.2395V28.9799C48.2537 28.4392 48.3316 27.9482 48.4873 27.507C48.6431 27.0614 48.8637 26.6786 49.1492 26.3585C49.4347 26.0384 49.7764 25.7918 50.1744 25.6188C50.5724 25.4457 51.0114 25.3592 51.4916 25.3592C51.9891 25.3592 52.4281 25.4436 52.8088 25.6123C53.1895 25.7766 53.5074 26.0102 53.7627 26.313C54.0179 26.6159 54.2104 26.9792 54.3401 27.4031C54.4699 27.8228 54.5348 28.2878 54.5348 28.7982V29.5185H49.0324V28.3375H52.8477V28.2077C52.8391 27.9352 52.7872 27.6865 52.692 27.4615C52.5968 27.2323 52.4498 27.0506 52.2508 26.9165C52.0518 26.7781 51.7944 26.7089 51.4786 26.7089C51.2234 26.7089 51.0006 26.7651 50.8103 26.8776C50.6243 26.9857 50.4685 27.1414 50.3431 27.3448C50.222 27.5437 50.1311 27.7817 50.0706 28.0585C50.01 28.3354 49.9797 28.6425 49.9797 28.9799V29.2395C49.9797 29.5336 50.0187 29.8061 50.0965 30.057C50.1787 30.3079 50.2977 30.5264 50.4534 30.7124C50.6135 30.8941 50.8038 31.0368 51.0244 31.1406C51.2494 31.2401 51.5046 31.2899 51.7901 31.2899C52.1491 31.2899 52.4736 31.2207 52.7634 31.0822C53.0575 30.9395 53.3128 30.7297 53.5291 30.4528L54.3921 31.3483C54.245 31.5646 54.046 31.7722 53.7951 31.9712C53.5485 32.1702 53.25 32.3324 52.8997 32.4579C52.5493 32.579 52.1448 32.6395 51.6863 32.6395ZM57.6364 30.8227L59.1742 25.489H60.2643L59.9399 27.3318L58.3891 32.5098H57.4482L57.6364 30.8227ZM56.7864 25.489L57.9414 30.8357L58.0452 32.5098H56.9616L55.1188 25.489H56.7864ZM61.6919 30.7578L62.8209 25.489H64.482L62.6522 32.5098H61.5686L61.6919 30.7578ZM60.433 25.489L61.9579 30.7708L62.159 32.5098H61.2182L59.6544 27.3318L59.3365 25.489H60.433Z"
        fill="white"
      />
      <path
        d="M14.9513 14.8249L7.28007 15.473L13.0948 20.517L11.3609 28.0131L17.9462 24.0374L19.2773 24.843C18.8219 25.6837 18.5066 26.5945 18.279 27.5402L17.9462 27.33L7.12244 33.8628L9.97725 21.5504L0.432037 13.2662L13.0247 12.1978L17.9462 0.585938L22.8677 12.1978L35.4603 13.2662L29.8558 18.1001C27.305 18.1796 24.8431 19.0553 22.8151 20.6046L22.7976 20.517L28.6123 15.473L20.9411 14.8249L17.9462 7.74923L14.9513 14.8249Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
