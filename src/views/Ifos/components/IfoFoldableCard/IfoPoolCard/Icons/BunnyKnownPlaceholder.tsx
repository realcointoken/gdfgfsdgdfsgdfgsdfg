import { Svg, SvgProps } from 'packages/uikit'
import { useTheme } from 'styled-components'

const BunnyKnownPlaceholder: React.FC<SvgProps> = (props) => {
  const theme = useTheme()
  const primaryColor = theme.isDark ? '#3C3742' : '#e9eaeb'
  const secondaryColor = theme.isDark ? '#666171' : '#bdc2c4'

  return (
    <Svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M80 40.0001C80 62.0914 62.0914 80.0001 40 80.0001C17.9086 80.0001 0 62.0914 0 40.0001C0 17.9087 17.9086 6.10352e-05 40 6.10352e-05C62.0914 6.10352e-05 80 17.9087 80 40.0001Z"
        fill={primaryColor}
      />
      <mask
        id="mask0_1825_148632"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="4"
        width="72"
        height="72"
      >
        <path
          d="M75.8333 40.0001C75.8333 59.7903 59.7902 75.8334 40 75.8334C20.2098 75.8334 4.16663 59.7903 4.16663 40.0001C4.16663 20.2099 20.2098 4.16675 40 4.16675C59.7902 4.16675 75.8333 20.2099 75.8333 40.0001Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_1825_148632)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.3253 25.8504C29.0321 25.7068 33.4249 30.8086 32.4489 36.4309L30.7598 46.1606C33.5887 45.6126 36.5893 45.3194 39.6921 45.3194C41.8959 45.3194 44.0471 45.4673 46.1211 45.749L54.7625 32.8585C57.5237 28.7396 63.101 27.639 67.2199 30.4001C71.9808 33.5918 72.5729 40.3666 68.4376 44.3356L61.3984 51.092C66.5606 54.4454 70.1451 59.2196 70.1451 64.8962V69.2467C70.1451 75.1599 66.2331 80.1109 60.7641 83.453C55.2525 86.8213 47.7962 88.8236 39.6921 88.8236C31.5881 88.8236 24.1318 86.8213 18.6201 83.453C13.1512 80.1109 9.23914 75.1599 9.23914 69.2467V64.8963C9.23918 60.4762 11.4404 56.5743 14.8205 53.5094L14.4557 35.1282C14.3565 30.1278 18.3255 25.9761 23.3253 25.8504ZM17.3523 54.6126C17.3337 54.4569 17.3226 54.2987 17.3194 54.1384L16.9412 35.0788C16.8691 31.446 19.7554 28.4269 23.3878 28.3355C27.5236 28.2315 30.7079 31.9256 29.9995 36.0057L27.6635 49.4625C28.5201 49.2127 29.4009 48.9888 30.3029 48.7924C33.2376 48.1533 36.3984 47.8054 39.6921 47.8054C42.4028 47.8054 45.0235 48.041 47.5022 48.4807C47.6361 48.0677 47.8288 47.6661 48.0825 47.2876L56.8274 34.2427C58.8241 31.2643 62.8572 30.4684 65.8356 32.4651C69.2784 34.773 69.7065 39.672 66.7162 42.5421L57.2743 51.6045C58.0712 51.9986 58.8318 52.419 59.5528 52.8634C64.5638 55.952 67.6591 60.2032 67.6592 64.8962V69.2467C67.6592 78.6857 55.1379 86.3376 39.6921 86.3376C24.2464 86.3376 11.7251 78.6857 11.7251 69.2467V64.8963C11.7251 61.0357 13.8197 57.474 17.3523 54.6126Z"
          fill={secondaryColor}
        />
        <path
          d="M67.6592 69.2467C67.6592 78.6857 55.1379 86.3376 39.6921 86.3376C24.2464 86.3376 11.7251 78.6857 11.7251 69.2467V64.8962H67.6592V69.2467Z"
          fill={primaryColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.9995 36.0057C30.7079 31.9256 27.5236 28.2315 23.3878 28.3355C19.7554 28.4269 16.8691 31.446 16.9412 35.0788L17.3194 54.1384C17.3226 54.2987 17.3337 54.4568 17.3523 54.6126C13.8197 57.474 11.7251 61.0357 11.7251 64.8963C11.7251 74.3354 24.2464 81.9873 39.6921 81.9873C55.1379 81.9873 67.6592 74.3354 67.6592 64.8963C67.6592 59.528 63.6091 54.7378 57.2743 51.6045L66.7162 42.5421C69.7065 39.672 69.2784 34.773 65.8356 32.465C62.8572 30.4684 58.8241 31.2643 56.8274 34.2427L48.0825 47.2876C47.8288 47.6661 47.6361 48.0677 47.5022 48.4807C45.0235 48.041 42.4029 47.8053 39.6921 47.8053C35.386 47.8053 31.3071 48.4001 27.6635 49.4625L29.9995 36.0057Z"
          fill={primaryColor}
        />
        <path
          d="M35.6526 63.6534C35.6526 66.2276 34.2614 68.3145 32.5452 68.3145C30.829 68.3145 29.4377 66.2276 29.4377 63.6534C29.4377 61.0791 30.829 58.9922 32.5452 58.9922C34.2614 58.9922 35.6526 61.0791 35.6526 63.6534Z"
          fill={secondaryColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.1012 60.0391C32.7345 60.9891 33.1666 62.3731 33.1666 63.9639C33.1666 64.6504 33.7231 65.2069 34.4096 65.2069C35.0961 65.2069 35.6526 64.6504 35.6526 63.9639C35.6526 61.9508 35.1108 60.0719 34.1696 58.6601C33.2342 57.257 31.8054 56.1953 30.0592 56.1953C28.3129 56.1953 26.8842 57.257 25.9487 58.6601C25.0075 60.0719 24.4658 61.9508 24.4658 63.9639C24.4658 65.0554 24.6247 66.1007 24.9161 67.0513C25.1172 67.7076 25.8124 68.0766 26.4687 67.8754C27.1251 67.6742 27.494 66.979 27.2929 66.3227C27.0761 65.6157 26.9517 64.8164 26.9517 63.9639C26.9517 62.3731 27.3839 60.9891 28.0172 60.0391C28.6563 59.0804 29.4027 58.6813 30.0592 58.6813C30.7156 58.6813 31.4621 59.0804 32.1012 60.0391Z"
          fill={secondaryColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.5426 60.0391C54.1759 60.9891 54.608 62.3731 54.608 63.9639C54.608 64.6504 55.1645 65.2069 55.851 65.2069C56.5375 65.2069 57.094 64.6504 57.094 63.9639C57.094 61.9508 56.5522 60.0719 55.611 58.6601C54.6756 57.257 53.2468 56.1953 51.5006 56.1953C49.7543 56.1953 48.3256 57.257 47.3901 58.6601C46.4489 60.0719 45.9072 61.9508 45.9072 63.9639C45.9072 65.0554 46.0661 66.1007 46.3575 67.0513C46.5586 67.7076 47.2538 68.0766 47.9101 67.8754C48.5665 67.6742 48.9354 66.979 48.7343 66.3227C48.5176 65.6157 48.3931 64.8164 48.3931 63.9639C48.3931 62.3731 48.8253 60.9891 49.4586 60.0391C50.0977 59.0804 50.8441 58.6813 51.5006 58.6813C52.157 58.6813 52.9035 59.0804 53.5426 60.0391Z"
          fill={secondaryColor}
        />
        <path
          d="M57.0938 63.6534C57.0938 66.2276 55.7025 68.3145 53.9864 68.3145C52.2702 68.3145 50.8789 66.2276 50.8789 63.6534C50.8789 61.0791 52.2702 58.9922 53.9864 58.9922C55.7025 58.9922 57.0938 61.0791 57.0938 63.6534Z"
          fill={secondaryColor}
        />
        <path
          d="M39.8625 34.7469L36.2414 31.8519L42.5578 19.2988L47.6794 23.3934L51.0824 16.6287L49.3503 15.2447L55.9523 12.0001L56.4369 20.9076L54.7035 19.5238L49.2165 30.4298L44.0949 26.3352L39.8625 34.7469Z"
          fill={secondaryColor}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.982 41.2112L77.4831 41.1368C77.4943 40.7594 77.5 40.3804 77.5 40.0001C77.5 39.6197 77.4943 39.2407 77.4831 38.8633L79.982 38.789C79.994 39.1912 80 39.5949 80 40.0001C80 40.4052 79.994 40.8089 79.982 41.2112ZM79.8382 36.3776L77.3482 36.6011C77.2803 35.8449 77.19 35.0953 77.0779 34.3529L79.5499 33.9798C79.6695 34.7717 79.7658 35.5712 79.8382 36.3776ZM79.1169 31.6016L76.672 32.124C76.5136 31.3824 76.3332 30.649 76.1316 29.9245L78.5402 29.2544C78.7553 30.0276 78.9478 30.8103 79.1169 31.6016ZM77.8219 26.9473L75.4586 27.7627C75.2117 27.0472 74.9438 26.3414 74.6555 25.6462L76.9648 24.6885C77.2724 25.4305 77.5584 26.1836 77.8219 26.9473ZM75.9718 22.4857L73.7249 23.5817C73.3932 22.9017 73.0414 22.2331 72.6704 21.5767L74.8469 20.3466C75.2426 21.0468 75.6179 21.7601 75.9718 22.4857ZM73.5948 18.2798L71.4966 19.6391C71.0855 19.0045 70.6557 18.3831 70.208 17.7757L72.2205 16.2924C72.6979 16.9402 73.1563 17.603 73.5948 18.2798ZM70.7289 14.3912L68.8093 15.9927C68.3251 15.4124 67.8236 14.8468 67.3058 14.2969L69.1258 12.583C69.6779 13.1693 70.2126 13.7723 70.7289 14.3912ZM67.4171 10.8743L65.7032 12.6943C65.1533 12.1764 64.5877 11.675 64.0073 11.1908L65.6088 9.27114C66.2277 9.78745 66.8307 10.3221 67.4171 10.8743ZM63.7076 7.7796L62.2244 9.79206C61.6169 9.34434 60.9955 8.91453 60.3609 8.50342L61.7203 6.40526C62.3971 6.84376 63.0598 7.30214 63.7076 7.7796ZM59.6535 5.1532L58.4233 7.32961C57.767 6.95863 57.0984 6.6069 56.4183 6.27516L57.5144 4.02824C58.24 4.38219 58.9533 4.75745 59.6535 5.1532ZM55.3115 3.03528L54.3539 5.34459C53.6586 5.05629 52.9529 4.78832 52.2373 4.54142L53.0528 2.17815C53.8164 2.44165 54.5696 2.72762 55.3115 3.03528ZM50.7456 1.4599L50.0755 3.86842C49.351 3.66684 48.6176 3.48647 47.8761 3.32802L48.3984 0.883207C49.1898 1.05229 49.9724 1.24477 50.7456 1.4599ZM46.0203 0.450115L45.6471 2.92211C44.9048 2.81006 44.1552 2.71975 43.3989 2.65186L43.6224 0.161873C44.4288 0.234259 45.2284 0.330579 46.0203 0.450115ZM41.2111 0.0180454C40.8089 0.00608403 40.4051 6.10352e-05 40 6.10352e-05C39.5949 6.10352e-05 39.1911 0.00608406 38.7889 0.0180455L38.8632 2.51694C39.2407 2.50572 39.6196 2.50006 40 2.50006C40.3804 2.50006 40.7593 2.50572 41.1368 2.51694L41.2111 0.0180454ZM36.3776 0.161873L36.6011 2.65186C35.8448 2.71975 35.0952 2.81006 34.3529 2.92211L33.9797 0.450116C34.7716 0.330579 35.5712 0.23426 36.3776 0.161873ZM31.6016 0.883208L32.1239 3.32802C31.3824 3.48647 30.649 3.66684 29.9245 3.86842L29.2544 1.4599C30.0276 1.24477 30.8102 1.05229 31.6016 0.883208ZM26.9472 2.17815L27.7627 4.54142C27.0471 4.78832 26.3414 5.05629 25.6461 5.3446L24.6885 3.03528C25.4304 2.72762 26.1836 2.44165 26.9472 2.17815ZM22.4856 4.02824L23.5817 6.27517C22.9016 6.6069 22.233 6.95864 21.5767 7.32962L20.3465 5.1532C21.0467 4.75745 21.76 4.38219 22.4856 4.02824ZM18.2797 6.40527L19.639 8.50342C19.0045 8.91454 18.3831 9.34434 17.7756 9.79207L16.2924 7.7796C16.9402 7.30215 17.6029 6.84376 18.2797 6.40527ZM14.3911 9.27114L15.9927 11.1908C15.4123 11.675 14.8467 12.1764 14.2968 12.6943L12.5829 10.8743C13.1693 10.3221 13.7723 9.78745 14.3911 9.27114ZM10.8742 12.583L12.6942 14.2969C12.1764 14.8468 11.6749 15.4124 11.1907 15.9928L9.27108 14.3912C9.78739 13.7723 10.322 13.1693 10.8742 12.583ZM7.77954 16.2924L9.792 17.7757C9.34428 18.3831 8.91447 19.0045 8.50336 19.6391L6.4052 18.2798C6.84369 17.603 7.30208 16.9402 7.77954 16.2924ZM5.15314 20.3466L7.32955 21.5767C6.95857 22.2331 6.60684 22.9017 6.2751 23.5817L4.02818 22.4857C4.38213 21.7601 4.75739 21.0468 5.15314 20.3466ZM3.03522 24.6886L5.34453 25.6462C5.05623 26.3414 4.78826 27.0472 4.54136 27.7627L2.17809 26.9473C2.44159 26.1836 2.72756 25.4305 3.03522 24.6886ZM1.45984 29.2544L3.86836 29.9245C3.66678 30.649 3.48641 31.3824 3.32796 32.124L0.883146 31.6016C1.05223 30.8103 1.24471 30.0277 1.45984 29.2544ZM0.450054 33.9798L2.92205 34.3529C2.81 35.0953 2.71969 35.8449 2.6518 36.6012L0.161811 36.3776C0.234198 35.5712 0.330518 34.7717 0.450054 33.9798ZM0.0179843 38.789C0.006023 39.1912 0 39.5949 0 40.0001C0 40.4052 0.00602303 40.8089 0.0179844 41.2112L2.51688 41.1368C2.50565 40.7594 2.5 40.3804 2.5 40.0001C2.5 39.6197 2.50565 39.2407 2.51688 38.8633L0.0179843 38.789ZM0.161812 43.6225L2.6518 43.399C2.71969 44.1552 2.81 44.9049 2.92205 45.6472L0.450055 46.0203C0.330518 45.2284 0.234199 44.4289 0.161812 43.6225ZM0.883147 48.3985L3.32796 47.8761C3.48641 48.6177 3.66678 49.3511 3.86836 50.0756L1.45984 50.7457C1.24471 49.9725 1.05223 49.1898 0.883147 48.3985ZM2.17809 53.0528L4.54136 52.2374C4.78826 52.9529 5.05623 53.6587 5.34454 54.3539L3.03522 55.3116C2.72756 54.5697 2.44159 53.8165 2.17809 53.0528ZM4.02818 57.5145L6.2751 56.4184C6.60684 57.0985 6.95858 57.7671 7.32956 58.4234L5.15314 59.6535C4.75739 58.9534 4.38213 58.2401 4.02818 57.5145ZM6.40521 61.7203L8.50336 60.361C8.91448 60.9956 9.34428 61.617 9.792 62.2245L7.77954 63.7077C7.30209 63.0599 6.8437 62.3972 6.40521 61.7203ZM9.27108 65.6089L11.1907 64.0074C11.6749 64.5878 12.1764 65.1533 12.6942 65.7033L10.8742 67.4172C10.322 66.8308 9.78739 66.2278 9.27108 65.6089ZM12.5829 69.1259L14.2968 67.3058C14.8467 67.8237 15.4123 68.3251 15.9927 68.8093L14.3911 70.729C13.7723 70.2127 13.1693 69.678 12.5829 69.1259ZM16.2924 72.2205L17.7756 70.2081C18.3831 70.6558 19.0045 71.0856 19.6391 71.4967L18.2797 73.5948C17.6029 73.1564 16.9402 72.698 16.2924 72.2205ZM20.3465 74.8469L21.5767 72.6705C22.233 73.0415 22.9016 73.3932 23.5817 73.725L22.4856 75.9719C21.76 75.6179 21.0467 75.2427 20.3465 74.8469ZM24.6885 76.9648L25.6461 74.6555C26.3414 74.9438 27.0471 75.2118 27.7627 75.4587L26.9472 77.822C26.1836 77.5585 25.4304 77.2725 24.6885 76.9648ZM29.2544 78.5402L29.9245 76.1317C30.649 76.3333 31.3824 76.5136 32.1239 76.6721L31.6016 79.1169C30.8102 78.9478 30.0276 78.7553 29.2544 78.5402ZM33.9797 79.55L34.3529 77.078C35.0952 77.1901 35.8448 77.2804 36.6011 77.3483L36.3776 79.8382C35.5712 79.7659 34.7716 79.6695 33.9797 79.55ZM38.7889 79.9821L38.8632 77.4832C39.2407 77.4944 39.6196 77.5001 40 77.5001C40.3804 77.5001 40.7593 77.4944 41.1368 77.4832L41.2111 79.9821C40.8089 79.994 40.4051 80.0001 40 80.0001C39.5949 80.0001 39.1911 79.994 38.7889 79.9821ZM43.6224 79.8382L43.3989 77.3483C44.1552 77.2804 44.9048 77.1901 45.6471 77.078L46.0203 79.55C45.2284 79.6695 44.4288 79.7659 43.6224 79.8382ZM48.3984 79.1169L47.8761 76.6721C48.6176 76.5136 49.351 76.3333 50.0755 76.1317L50.7456 78.5402C49.9724 78.7553 49.1898 78.9478 48.3984 79.1169ZM53.0528 77.822L52.2373 75.4587C52.9529 75.2118 53.6586 74.9438 54.3539 74.6555L55.3115 76.9648C54.5696 77.2725 53.8164 77.5585 53.0528 77.822ZM57.5144 75.9719L56.4183 73.725C57.0984 73.3932 57.767 73.0415 58.4233 72.6705L59.6535 74.8469C58.9533 75.2427 58.24 75.6179 57.5144 75.9719ZM61.7203 73.5948L60.361 71.4967C60.9955 71.0856 61.6169 70.6558 62.2244 70.2081L63.7076 72.2205C63.0598 72.698 62.3971 73.1564 61.7203 73.5948ZM65.6089 70.729L64.0073 68.8093C64.5877 68.3251 65.1533 67.8237 65.7032 67.3058L67.4171 69.1259C66.8307 69.678 66.2277 70.2127 65.6089 70.729ZM69.1258 67.4172L67.3058 65.7032C67.8236 65.1533 68.3251 64.5878 68.8093 64.0074L70.7289 65.6089C70.2126 66.2278 69.678 66.8308 69.1258 67.4172ZM72.2205 63.7077L70.208 62.2245C70.6557 61.617 71.0855 60.9956 71.4966 60.361L73.5948 61.7203C73.1563 62.3972 72.6979 63.0599 72.2205 63.7077ZM74.8469 59.6535L72.6704 58.4234C73.0414 57.767 73.3932 57.0985 73.7249 56.4184L75.9718 57.5144C75.6179 58.24 75.2426 58.9533 74.8469 59.6535ZM76.9648 55.3116L74.6555 54.3539C74.9438 53.6587 75.2117 52.9529 75.4586 52.2374L77.8219 53.0528C77.5584 53.8165 77.2724 54.5697 76.9648 55.3116ZM78.5402 50.7457L76.1316 50.0756C76.3332 49.3511 76.5136 48.6177 76.672 47.8761L79.1169 48.3985C78.9478 49.1898 78.7553 49.9725 78.5402 50.7457ZM79.5499 46.0203L77.0779 45.6472C77.19 44.9049 77.2803 44.1552 77.3482 43.399L79.8382 43.6225C79.7658 44.4289 79.6695 45.2284 79.5499 46.0203Z"
        fill={secondaryColor}
      />
    </Svg>
  )
}

export default BunnyKnownPlaceholder
