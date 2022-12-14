import Link from 'next/link';

function Footer() {
    return (
        <div className="flex items-center justify-center py-10 bg-[#000] font-josefin">
            <div>
                <div className="flex justify-center mb-2">
                    <p className="text-[#929CA9]">
                        Ai găsit o problemă cu această pagină?{' '}
                        <a
                            href="https://github.com/HeartBit-Platform/smarthack22/issues"
                            target="_blank"
                        >
                            <span className="text-[#6C63FF]">
                                Fixează pe GitHub
                            </span>
                        </a>
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <hr className="border-dashed border-t-2 w-[60%] rounded-t-xl  border-[#929CA9] rounded-xl opacity-40" />
                </div>
                <div className="flex justify-center mt-2">
                    <p className="text-[#929CA9]">
                        Copyright &copy; 2022 MecaniX
                    </p>
                </div>
                <div className="flex justify-center mb-2">
                    <p className="text-[#929CA9] flex">
                        Creat cu{' '}
                        <span className="mx-1">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.98338 11.6601C10.9075 11.6601 11.6567 10.911 11.6567 9.9868C11.6567 9.06265 10.9075 8.31348 9.98338 8.31348C9.05923 8.31348 8.31006 9.06265 8.31006 9.9868C8.31006 10.911 9.05923 11.6601 9.98338 11.6601Z"
                                    fill="#00D8FF"
                                />
                                <path
                                    d="M9.98337 13.8199C7.63337 13.8199 5.58003 13.5432 4.04337 13.0165C3.0467 12.6765 2.20003 12.2232 1.5967 11.7065C0.956699 11.1599 0.616699 10.5632 0.616699 9.98652C0.616699 8.87986 1.83003 7.79652 3.8667 7.08986C5.53337 6.50986 7.7067 6.18652 9.98003 6.18652C12.2134 6.18652 14.3567 6.49986 16.0134 7.07319C16.9834 7.40652 17.8 7.83986 18.38 8.31986C19.01 8.84652 19.3434 9.42319 19.3434 9.98652C19.3434 11.1365 17.9867 12.2999 15.8 13.0232C14.2534 13.5365 12.1867 13.8199 9.98337 13.8199ZM9.98337 6.98652C7.8267 6.98652 5.69337 7.29986 4.13337 7.84319C2.26003 8.49652 1.42003 9.38986 1.42003 9.98652C1.42003 10.6065 2.32337 11.5832 4.30337 12.2599C5.7567 12.7565 7.72337 13.0199 9.98337 13.0199C12.1034 13.0199 14.08 12.7532 15.55 12.2632C17.6067 11.5799 18.5467 10.6032 18.5467 9.98652C18.5467 9.66986 18.3067 9.29652 17.87 8.93319C17.3667 8.51319 16.6334 8.12986 15.7567 7.82652C14.18 7.28652 12.13 6.98652 9.98337 6.98652Z"
                                    fill="#00D8FF"
                                />
                                <path
                                    d="M6.18679 18.3268C5.84679 18.3268 5.54679 18.2534 5.29346 18.1068C4.33679 17.5534 4.00346 15.9601 4.40679 13.8434C4.73679 12.1068 5.54346 10.0668 6.68013 8.09676C7.79679 6.16342 9.13679 4.46342 10.4601 3.31342C11.2335 2.64008 12.0168 2.14675 12.7235 1.88675C13.4935 1.60341 14.1601 1.60341 14.6468 1.88341C15.6435 2.45675 15.9735 4.21675 15.5068 6.47009C15.1768 8.07009 14.3901 10.0001 13.2901 11.9101C12.1168 13.9434 10.8501 15.5834 9.62679 16.6534C8.83346 17.3468 8.01679 17.8534 7.27013 18.1168C6.88013 18.2568 6.51346 18.3268 6.18679 18.3268ZM7.02346 8.29676L7.37013 8.49676C6.29346 10.3634 5.49679 12.3668 5.19013 13.9934C4.82013 15.9434 5.17679 17.1168 5.69013 17.4134C5.81679 17.4868 5.98346 17.5268 6.18679 17.5268C6.85013 17.5268 7.89346 17.1068 9.10012 16.0534C10.2568 15.0434 11.4668 13.4701 12.5968 11.5134C13.6568 9.67676 14.4101 7.83009 14.7235 6.31342C15.1601 4.19008 14.7835 2.89008 14.2468 2.58008C13.9735 2.42341 13.5301 2.44341 12.9968 2.64008C12.3801 2.86675 11.6835 3.31008 10.9835 3.92008C9.72679 5.01342 8.44346 6.64009 7.37013 8.50009L7.02346 8.29676Z"
                                    fill="#00D8FF"
                                />
                                <path
                                    d="M13.7804 18.3363C12.8737 18.3363 11.7237 17.7896 10.5237 16.7563C9.1837 15.6029 7.82037 13.8863 6.68037 11.9163C5.56037 9.98293 4.76037 7.97293 4.4237 6.24959C4.22703 5.24292 4.19037 4.31959 4.31703 3.57625C4.45703 2.76625 4.78703 2.18958 5.27703 1.90625C6.27037 1.32958 7.96037 1.92292 9.68037 3.45292C10.9004 4.53626 12.1804 6.18292 13.2837 8.0896C14.4604 10.1229 15.2504 12.0396 15.5637 13.6329C15.767 14.6663 15.8004 15.6263 15.657 16.4063C15.5037 17.2363 15.157 17.8263 14.657 18.1163C14.407 18.2629 14.1104 18.3363 13.7804 18.3363ZM7.3737 11.5163C8.4537 13.3829 9.7937 15.0729 11.047 16.1496C12.5504 17.4429 13.7437 17.7229 14.2604 17.4229C14.797 17.1129 15.1904 15.8429 14.7837 13.7896C14.4837 12.2829 13.727 10.4496 12.5937 8.49293C11.5304 6.65626 10.307 5.07959 9.15037 4.05292C7.53037 2.61292 6.21703 2.28958 5.68037 2.59959C5.40703 2.75625 5.2037 3.15292 5.10703 3.71292C4.99703 4.35959 5.03037 5.18626 5.21037 6.09626C5.53037 7.73293 6.29703 9.65627 7.3737 11.5163Z"
                                    fill="#00D8FF"
                                />
                            </svg>
                        </span>{' '}
                        <span className="mx-1">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8401 5.75098H8.98438V7.4382H10.8401V5.75098Z"
                                    fill="#099CEC"
                                />
                                <path
                                    d="M10.8401 7.77783H8.98438V9.44541H10.8401V7.77783Z"
                                    fill="#099CEC"
                                />
                                <path
                                    d="M8.6477 5.75098H6.79199V7.4382H8.6477V5.75098Z"
                                    fill="#099CEC"
                                />
                                <path
                                    d="M13.0354 7.77539H11.1797V9.44301H13.0354V7.77539Z"
                                    fill="#099CEC"
                                />
                                <path
                                    d="M10.8401 3.70996H8.98438V5.41407H10.8401V3.70996Z"
                                    fill="#099CEC"
                                />
                                <path
                                    d="M6.45478 5.75098H4.59912V7.4382H6.45478V5.75098Z"
                                    fill="#099CEC"
                                />
                                <path
                                    d="M8.6477 7.77539H6.79199V9.44301H8.6477V7.77539Z"
                                    fill="#099CEC"
                                />
                                <path
                                    d="M18.6109 8.55822C18.2066 8.28588 17.2746 8.18764 16.5587 8.32244C16.4661 7.64865 16.0898 7.06189 15.4049 6.53408L15.0118 6.27295L14.7507 6.666C14.2341 7.44647 14.0938 8.73225 14.6469 9.58014C14.4027 9.71205 13.9225 9.89178 13.288 9.88049H1.08421C0.839996 11.3067 1.24707 13.1596 2.31953 14.4313C3.36105 15.6638 4.92199 16.2899 6.96297 16.2899C11.3819 16.2899 14.6525 14.2546 16.1825 10.5571C16.7834 10.5683 18.0803 10.5599 18.7457 9.28818C18.7878 9.21799 18.931 8.91756 18.9843 8.80807L18.6109 8.55822Z"
                                    fill="#099CEC"
                                />
                                <path
                                    d="M4.26537 7.77539H4.26252H2.40967V9.44301H4.26537V7.77539Z"
                                    fill="#099CEC"
                                />
                                <path
                                    d="M6.45478 7.77539H4.59912V9.44301H6.45478V7.77539Z"
                                    fill="#099CEC"
                                />
                            </svg>
                        </span>{' '}
                        by <span className="text-[#6C63FF] mx-1">MecaniX</span>
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <hr className="border-dashed border-t-2 w-[60%] rounded-t-xl  border-[#929CA9] rounded-xl opacity-40" />
                </div>{' '}
                <div className="flex justify-center my-2">
                    <p className="text-[#0ACF83]">
                        <Link href="/privacy-policy" className="cursor-pointer">
                            Termeni si
                        </Link>{' '}
                        <Link href="/terms" className="cursor-pointer">
                            Conditii
                        </Link>
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <hr className="border-dashed border-t-2 w-[60%] rounded-t-xl  border-[#929CA9] rounded-xl opacity-40" />
                </div>{' '}
                <div className="flex items-center justify-center">
                    <svg
                        width="25"
                        height="25"
                        className="m-2"
                        viewBox="0 0 37 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.9028 15.2884C16.9455 14.3087 18.0118 12.8263 18.0118 10.5188C18.0118 5.96846 14.633 4.85986 10.7339 4.85986H0V27.702H11.0358C15.1726 27.702 19.0589 25.7104 19.0589 21.0698C19.0589 18.2017 17.7035 16.0812 14.9028 15.2884ZM5.00399 8.75928H9.69965C11.5047 8.75928 13.1299 9.26846 13.1299 11.3696C13.1299 13.3097 11.8644 14.0896 10.0786 14.0896H5.00399V8.75928ZM10.3549 23.822H5.00399V17.5313H10.4576C12.6609 17.5313 14.0549 18.453 14.0549 20.7927C14.0549 23.1001 12.3911 23.822 10.3549 23.822ZM33.3835 8.3081H24.1528V6.05869H33.3835V8.3081ZM37 19.6712C37 14.7792 34.1479 10.6993 28.9769 10.6993C23.9536 10.6993 20.5427 14.4892 20.5427 19.452C20.5427 24.6019 23.7738 28.1339 28.9769 28.1339C32.9146 28.1339 35.4648 26.355 36.6917 22.5716H32.6962C32.2658 23.9831 30.4929 24.7308 29.1182 24.7308C26.4653 24.7308 25.0714 23.171 25.0714 20.522H36.9615C36.9807 20.2513 37 19.9612 37 19.6712ZM25.0778 17.6603C25.2255 15.4882 26.6644 14.1282 28.8356 14.1282C31.1095 14.1282 32.253 15.4688 32.4457 17.6603H25.0778Z"
                            fill="white"
                        />
                    </svg>

                    <svg
                        width="25"
                        height="25"
                        className="m-2"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 0.515625C7.45325 0.515625 0.5 7.68616 0.5 16.5C0.5 25.3138 7.45325 32.4844 16 32.4844C24.5467 32.4844 31.5 25.3138 31.5 16.5C31.5 7.68616 24.5467 0.515625 16 0.515625ZM26.2481 7.88687C28.0921 10.2101 29.2087 13.1693 29.2378 16.3918C28.8013 16.2966 24.4242 15.381 20.0189 15.9523C19.6594 15.0474 19.3201 14.2512 18.8554 13.2702C23.7504 11.2092 25.969 8.27623 26.2481 7.88687ZM24.7763 6.30803C24.5382 6.65781 22.5452 9.42021 17.8375 11.2399C15.668 7.12935 13.2634 3.75253 12.8975 3.24721C17.096 2.20352 21.5204 3.32907 24.7763 6.30803ZM10.3713 4.16496C10.7204 4.65861 13.0862 8.03962 15.2799 12.061C9.08694 13.757 3.63238 13.7326 3.04025 13.7245C3.89875 9.48782 6.66737 5.96662 10.3713 4.16496ZM2.76062 16.5208C2.76062 16.3812 2.76331 16.2423 2.76737 16.1036C3.34662 16.1159 9.76237 16.2011 16.374 14.1606C16.753 14.9255 17.1151 15.702 17.4474 16.4776C12.6599 17.8682 8.31025 21.8612 6.16419 25.6497C4.04962 23.2292 2.76062 20.0275 2.76062 16.5208ZM7.87356 27.2918C9.2565 24.3764 13.0097 20.613 18.3472 18.7352C20.206 23.7164 20.9747 27.891 21.1716 29.0889C16.9146 30.9588 11.7956 30.4458 7.87356 27.2918ZM23.3973 27.8389C23.2616 27.0084 22.5569 23.0116 20.8253 18.1044C24.9741 17.4195 28.6191 18.5406 29.072 18.688C28.4819 22.4869 26.3674 25.7678 23.3973 27.8389Z"
                            fill="#B2215A"
                        />
                    </svg>

                    <a
                        href="https://github.com/HeartBit-Platform/"
                        target="_blank"
                    >
                        <svg
                            width="25"
                            height="25"
                            className="m-2"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.7032 24.8375C10.7032 24.9625 10.5548 25.0625 10.3677 25.0625C10.1548 25.0812 10.0065 24.9812 10.0065 24.8375C10.0065 24.7125 10.1548 24.6125 10.3419 24.6125C10.5355 24.5938 10.7032 24.6938 10.7032 24.8375ZM8.69677 24.5562C8.65161 24.6812 8.78065 24.825 8.97419 24.8625C9.14194 24.925 9.33548 24.8625 9.37419 24.7375C9.4129 24.6125 9.29032 24.4688 9.09677 24.4125C8.92903 24.3687 8.74194 24.4312 8.69677 24.5562ZM11.5484 24.45C11.3613 24.4938 11.2323 24.6125 11.2516 24.7563C11.271 24.8813 11.4387 24.9625 11.6323 24.9188C11.8194 24.875 11.9484 24.7563 11.929 24.6313C11.9097 24.5125 11.7355 24.4313 11.5484 24.45ZM15.7935 0.5C6.84516 0.5 0 7.08125 0 15.75C0 22.6812 4.50323 28.6125 10.9355 30.7C11.7613 30.8438 12.0516 30.35 12.0516 29.9438C12.0516 29.5562 12.0323 27.4188 12.0323 26.1063C12.0323 26.1063 7.51613 27.0437 6.56774 24.2437C6.56774 24.2437 5.83226 22.425 4.77419 21.9562C4.77419 21.9562 3.29677 20.975 4.87742 20.9937C4.87742 20.9937 6.48387 21.1188 7.36774 22.6063C8.78064 25.0188 11.1484 24.325 12.071 23.9125C12.2194 22.9125 12.6387 22.2188 13.1032 21.8062C9.49677 21.4187 5.85806 20.9125 5.85806 14.9C5.85806 13.1812 6.34839 12.3188 7.38065 11.2188C7.2129 10.8125 6.66452 9.1375 7.54839 6.975C8.89677 6.56875 12 8.6625 12 8.6625C13.2903 8.3125 14.6774 8.13125 16.0516 8.13125C17.4258 8.13125 18.8129 8.3125 20.1032 8.6625C20.1032 8.6625 23.2065 6.5625 24.5548 6.975C25.4387 9.14375 24.8903 10.8125 24.7226 11.2188C25.7548 12.325 26.3871 13.1875 26.3871 14.9C26.3871 20.9312 22.5871 21.4125 18.9806 21.8062C19.5742 22.3 20.0774 23.2375 20.0774 24.7062C20.0774 26.8125 20.0581 29.4187 20.0581 29.9312C20.0581 30.3375 20.3548 30.8312 21.1742 30.6875C27.6258 28.6125 32 22.6812 32 15.75C32 7.08125 24.7419 0.5 15.7935 0.5ZM6.27097 22.0562C6.1871 22.1187 6.20645 22.2625 6.31613 22.3813C6.41935 22.4813 6.56774 22.525 6.65161 22.4438C6.73548 22.3813 6.71613 22.2375 6.60645 22.1187C6.50323 22.0187 6.35484 21.975 6.27097 22.0562ZM5.57419 21.55C5.52903 21.6312 5.59355 21.7313 5.72258 21.7938C5.82581 21.8563 5.95484 21.8375 6 21.75C6.04516 21.6688 5.98064 21.5688 5.85161 21.5063C5.72258 21.4688 5.61935 21.4875 5.57419 21.55ZM7.66452 23.775C7.56129 23.8562 7.6 24.0438 7.74839 24.1625C7.89677 24.3062 8.08387 24.325 8.16774 24.225C8.25161 24.1438 8.2129 23.9562 8.08387 23.8375C7.94194 23.6938 7.74839 23.675 7.66452 23.775ZM6.92903 22.8563C6.82581 22.9188 6.82581 23.0813 6.92903 23.225C7.03226 23.3687 7.20645 23.4312 7.29032 23.3687C7.39355 23.2875 7.39355 23.125 7.29032 22.9813C7.2 22.8375 7.03226 22.775 6.92903 22.8563Z"
                                fill="#2C2D2E"
                            />
                        </svg>
                    </a>

                    <a href="https://twitter.com/" target="_blank">
                        <svg
                            width="25"
                            height="25"
                            className="m-2"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28.7106 9.48201C28.7309 9.76626 28.7309 10.0506 28.7309 10.3348C28.7309 19.0048 22.132 28.9947 10.0711 28.9947C6.35531 28.9947 2.90356 27.9185 0 26.0506C0.527938 26.1114 1.0355 26.1318 1.58375 26.1318C4.64969 26.1318 7.47206 25.0963 9.72588 23.3298C6.84263 23.2688 4.42638 21.3805 3.59388 18.7815C4 18.8424 4.40606 18.883 4.8325 18.883C5.42131 18.883 6.01019 18.8018 6.55838 18.6597C3.55331 18.0505 1.29944 15.4109 1.29944 12.2231V12.1419C2.1725 12.6293 3.18781 12.9338 4.26388 12.9744C2.49738 11.7967 1.34006 9.78657 1.34006 7.51245C1.34006 6.2942 1.66488 5.17745 2.23344 4.20282C5.46188 8.18251 10.3147 10.7814 15.7563 11.0658C15.6548 10.5784 15.5938 10.0709 15.5938 9.56326C15.5938 5.94901 18.5177 3.00488 22.1522 3.00488C24.0405 3.00488 25.7461 3.79676 26.9441 5.07595C28.4263 4.7917 29.8476 4.24345 31.1065 3.4922C30.6191 5.01507 29.5836 6.29426 28.2233 7.10638C29.5431 6.96432 30.8223 6.59876 31.9999 6.0912C31.1066 7.39063 29.9898 8.54795 28.7106 9.48201Z"
                                fill="#1A85C7"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
