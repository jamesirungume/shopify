import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import { storesData } from './FakeData2';
import Footer from './Footer'


export default function OnlineStores() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredStores, setFilteredStores] = useState(storesData.stores);

  useEffect(() => {
    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filterStores = () => {
    if (searchInput.trim() === '') {
      setFilteredStores([]);
    } else {
      const filteredStores = storesData.stores.filter(store =>
        store.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredStores(filteredStores);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center relative 1top-24 left-0 right-0">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleSearchInputChange}
            className="px-20 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            style={{ backgroundColor: '#0000FF' }}
            className="px-7 py-3 bg-blue-500 text-white font-semibold rounded-md transition-all duration-300 hover:py-4 hover:px-8 ml-4"
            onClick={filterStores}
          >
            Search
          </button>
        </div>
      </div>
      <div className="overflow-hidden mt-16 relative">
        <aside id="sidebar-multi-level-sidebar" className="fixed top-3 bottom-0 left-0 z-40 w-64 h-full bg-gray-50 dark:bg-gray-800  mt-6">
        <svg width="244" height="1024" viewBox="0 0 244 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M82.9333 696.75V249.25H133.067V696.75H202L108 831L14 696.75H82.9333ZM108 115L202 249.25H14L108 115Z" fill="black"/>
<path d="M34.4538 81V64.2727H37.9904V71.1744H45.1697V64.2727H48.6982V81H45.1697V74.0902H37.9904V81H34.4538ZM51.5487 81V68.4545H55.0281V81H51.5487ZM53.2965 66.8374C52.7792 66.8374 52.3355 66.6658 51.9652 66.3228C51.6004 65.9743 51.418 65.5578 51.418 65.0732C51.418 64.594 51.6004 64.1829 51.9652 63.8398C52.3355 63.4914 52.7792 63.3171 53.2965 63.3171C53.8138 63.3171 54.2549 63.4914 54.6197 63.8398C54.9899 64.1829 55.1751 64.594 55.1751 65.0732C55.1751 65.5578 54.9899 65.9743 54.6197 66.3228C54.2549 66.6658 53.8138 66.8374 53.2965 66.8374ZM63.4672 85.9659C62.3401 85.9659 61.3736 85.8107 60.5677 85.5004C59.7673 85.1954 59.1302 84.7789 58.6565 84.2507C58.1828 83.7225 57.8751 83.129 57.7336 82.4702L60.9516 82.0373C61.0496 82.2878 61.2048 82.5219 61.4172 82.7397C61.6295 82.9575 61.9099 83.1317 62.2584 83.2624C62.6124 83.3986 63.0425 83.4666 63.5489 83.4666C64.3058 83.4666 64.9292 83.2815 65.4193 82.9112C65.9148 82.5464 66.1626 81.9338 66.1626 81.0735V78.7784H66.0155C65.8631 79.1269 65.6344 79.4563 65.3295 79.7667C65.0245 80.0771 64.6325 80.3303 64.1533 80.5263C63.6742 80.7223 63.1024 80.8203 62.4381 80.8203C61.4961 80.8203 60.6385 80.6025 59.8653 80.1669C59.0976 79.7259 58.485 79.0534 58.0276 78.1495C57.5757 77.2402 57.3497 76.0913 57.3497 74.7028C57.3497 73.2816 57.5811 72.0946 58.0439 71.1417C58.5068 70.1888 59.1221 69.4755 59.8898 69.0018C60.663 68.5281 61.5097 68.2912 62.43 68.2912C63.1324 68.2912 63.7204 68.411 64.1942 68.6506C64.6679 68.8847 65.049 69.1787 65.3376 69.5327C65.6317 69.8812 65.8576 70.2242 66.0155 70.5618H66.1462V68.4545H69.6011V81.1225C69.6011 82.1897 69.3398 83.0827 68.817 83.8015C68.2943 84.5202 67.5701 85.0593 66.6444 85.4187C65.7242 85.7835 64.6652 85.9659 63.4672 85.9659ZM63.5407 78.2067C64.1016 78.2067 64.5753 78.0678 64.9619 77.7901C65.354 77.507 65.6534 77.104 65.8604 76.5813C66.0727 76.0531 66.1789 75.4215 66.1789 74.6864C66.1789 73.9513 66.0754 73.3143 65.8685 72.7752C65.6616 72.2307 65.3621 71.8087 64.9701 71.5092C64.578 71.2098 64.1016 71.06 63.5407 71.06C62.969 71.06 62.4871 71.2152 62.0951 71.5256C61.703 71.8305 61.4063 72.2552 61.2048 72.7997C61.0033 73.3442 60.9026 73.9731 60.9026 74.6864C60.9026 75.4106 61.0033 76.0368 61.2048 76.565C61.4117 77.0877 61.7085 77.4934 62.0951 77.782C62.4871 78.0651 62.969 78.2067 63.5407 78.2067ZM75.8493 73.7472V81H72.3699V64.2727H75.7513V70.668H75.8983C76.1815 69.9274 76.6389 69.3475 77.2705 68.9283C77.9021 68.5036 78.6944 68.2912 79.6473 68.2912C80.5185 68.2912 81.2781 68.4818 81.926 68.8629C82.5795 69.2386 83.0858 69.7804 83.4452 70.4883C83.81 71.1907 83.9897 72.032 83.9843 73.0121V81H80.5049V73.6328C80.5103 72.8596 80.3143 72.2579 79.9168 71.8278C79.5248 71.3976 78.9748 71.1825 78.267 71.1825C77.7932 71.1825 77.374 71.2833 77.0091 71.4847C76.6498 71.6862 76.3666 71.9802 76.1597 72.3668C75.9582 72.748 75.8548 73.2081 75.8493 73.7472ZM92.4398 81.245C91.1493 81.245 90.0385 80.9837 89.1074 80.4609C88.1818 79.9328 87.4685 79.1868 86.9675 78.223C86.4666 77.2538 86.2161 76.1076 86.2161 74.7844C86.2161 73.494 86.4666 72.3614 86.9675 71.3867C87.4685 70.4121 88.1736 69.6525 89.0829 69.108C89.9977 68.5634 91.0704 68.2912 92.301 68.2912C93.1286 68.2912 93.8991 68.4246 94.6124 68.6914C95.3311 68.9528 95.9573 69.3475 96.4909 69.8757C97.03 70.4039 97.4493 71.0682 97.7488 71.8686C98.0482 72.6636 98.198 73.5947 98.198 74.6619V75.6175H87.6046V73.4613H94.9228C94.9228 72.9603 94.8139 72.5166 94.5961 72.13C94.3783 71.7434 94.0761 71.4412 93.6895 71.2234C93.3083 71.0001 92.8645 70.8885 92.3581 70.8885C91.83 70.8885 91.3617 71.011 90.9533 71.256C90.5504 71.4956 90.2346 71.8196 90.0059 72.228C89.7772 72.6309 89.6601 73.0801 89.6547 73.5756V75.6257C89.6547 76.2464 89.769 76.7828 89.9977 77.2347C90.2318 77.6867 90.5613 78.0352 90.986 78.2802C91.4107 78.5252 91.9144 78.6477 92.497 78.6477C92.8836 78.6477 93.2375 78.5933 93.5588 78.4844C93.88 78.3755 94.155 78.2121 94.3837 77.9943C94.6124 77.7765 94.7866 77.5097 94.9064 77.1939L98.1245 77.4062C97.9611 78.1795 97.6262 78.8546 97.1199 79.4318C96.6189 80.0036 95.9709 80.45 95.176 80.7713C94.3864 81.0871 93.4744 81.245 92.4398 81.245ZM110.907 72.032L107.721 72.228C107.667 71.9557 107.55 71.7107 107.37 71.4929C107.191 71.2696 106.954 71.0927 106.66 70.962C106.371 70.8259 106.025 70.7578 105.622 70.7578C105.083 70.7578 104.629 70.8722 104.258 71.1009C103.888 71.3241 103.703 71.6236 103.703 71.9993C103.703 72.2988 103.823 72.552 104.062 72.7589C104.302 72.9658 104.713 73.1319 105.296 73.2571L107.566 73.7145C108.786 73.965 109.695 74.3679 110.294 74.9233C110.893 75.4787 111.193 76.2083 111.193 77.1122C111.193 77.9344 110.95 78.6559 110.466 79.2766C109.987 79.8974 109.328 80.382 108.489 80.7305C107.656 81.0735 106.695 81.245 105.606 81.245C103.945 81.245 102.622 80.8993 101.637 80.2077C100.656 79.5108 100.082 78.5633 99.9132 77.3654L103.335 77.1857C103.439 77.6921 103.689 78.0787 104.087 78.3455C104.484 78.6069 104.993 78.7376 105.614 78.7376C106.224 78.7376 106.714 78.6205 107.084 78.3864C107.46 78.1468 107.651 77.8391 107.656 77.4634C107.651 77.1476 107.517 76.889 107.256 76.6875C106.994 76.4806 106.592 76.3227 106.047 76.2138L103.874 75.7809C102.649 75.5359 101.737 75.1112 101.138 74.5067C100.545 73.9023 100.248 73.1319 100.248 72.1953C100.248 71.3894 100.466 70.6952 100.901 70.1126C101.343 69.5299 101.961 69.0807 102.756 68.7649C103.556 68.4491 104.492 68.2912 105.565 68.2912C107.15 68.2912 108.397 68.6261 109.306 69.2958C110.221 69.9656 110.754 70.8776 110.907 72.032ZM120.057 68.4545V71.0682H112.502V68.4545H120.057ZM114.217 65.4489H117.696V77.1449C117.696 77.4661 117.745 77.7166 117.843 77.8963C117.941 78.0705 118.077 78.1931 118.252 78.2638C118.431 78.3346 118.638 78.37 118.872 78.37C119.036 78.37 119.199 78.3564 119.362 78.3292C119.526 78.2965 119.651 78.272 119.738 78.2557L120.285 80.8448C120.111 80.8993 119.866 80.9619 119.55 81.0327C119.234 81.1089 118.85 81.1552 118.399 81.1715C117.56 81.2042 116.825 81.0926 116.193 80.8366C115.567 80.5807 115.08 80.1832 114.731 79.6442C114.383 79.1051 114.211 78.4245 114.217 77.6023V65.4489ZM127.712 81V64.2727H134.311C135.574 64.2727 136.652 64.4987 137.545 64.9506C138.444 65.3971 139.127 66.0315 139.596 66.8537C140.069 67.6705 140.306 68.6315 140.306 69.7369C140.306 70.8477 140.067 71.8033 139.587 72.6037C139.108 73.3987 138.414 74.0085 137.505 74.4332C136.601 74.858 135.506 75.0703 134.221 75.0703H129.803V72.228H133.65C134.325 72.228 134.886 72.1354 135.332 71.9503C135.779 71.7652 136.111 71.4875 136.328 71.1172C136.552 70.7469 136.663 70.2868 136.663 69.7369C136.663 69.1815 136.552 68.7132 136.328 68.332C136.111 67.9509 135.776 67.6623 135.324 67.4663C134.877 67.2648 134.314 67.1641 133.633 67.1641H131.248V81H127.712ZM136.745 73.3878L140.902 81H136.998L132.931 73.3878H136.745ZM146.317 81.2369C145.517 81.2369 144.804 81.098 144.178 80.8203C143.551 80.5372 143.056 80.1206 142.691 79.5707C142.332 79.0153 142.152 78.3237 142.152 77.4961C142.152 76.7991 142.28 76.2138 142.536 75.7401C142.792 75.2663 143.14 74.8852 143.581 74.5966C144.022 74.308 144.523 74.0902 145.084 73.9432C145.65 73.7962 146.244 73.6927 146.865 73.6328C147.594 73.5566 148.182 73.4858 148.629 73.4205C149.075 73.3497 149.399 73.2462 149.601 73.1101C149.802 72.974 149.903 72.7725 149.903 72.5057V72.4567C149.903 71.9394 149.74 71.5392 149.413 71.256C149.092 70.9729 148.634 70.8313 148.041 70.8313C147.415 70.8313 146.916 70.9702 146.546 71.2479C146.176 71.5201 145.931 71.8632 145.811 72.277L142.593 72.0156C142.756 71.2533 143.078 70.5945 143.557 70.0391C144.036 69.4782 144.654 69.0481 145.411 68.7486C146.173 68.4437 147.055 68.2912 148.057 68.2912C148.754 68.2912 149.421 68.3729 150.058 68.5362C150.701 68.6996 151.27 68.9528 151.765 69.2958C152.266 69.6388 152.661 70.0799 152.95 70.619C153.238 71.1526 153.382 71.7924 153.382 72.5384V81H150.083V79.2603H149.985C149.783 79.6523 149.514 79.9981 149.176 80.2976C148.839 80.5916 148.433 80.823 147.959 80.9918C147.485 81.1552 146.938 81.2369 146.317 81.2369ZM147.314 78.8356C147.826 78.8356 148.278 78.7348 148.67 78.5334C149.062 78.3265 149.369 78.0488 149.593 77.7003C149.816 77.3518 149.928 76.957 149.928 76.516V75.1847C149.819 75.2554 149.669 75.3208 149.478 75.3807C149.293 75.4351 149.084 75.4869 148.849 75.5359C148.615 75.5794 148.381 75.6203 148.147 75.6584C147.913 75.6911 147.701 75.721 147.51 75.7482C147.102 75.8081 146.745 75.9034 146.44 76.0341C146.135 76.1648 145.898 76.3417 145.729 76.565C145.561 76.7828 145.476 77.055 145.476 77.3817C145.476 77.8555 145.648 78.2176 145.991 78.468C146.339 78.7131 146.78 78.8356 147.314 78.8356ZM159.561 73.7472V81H156.082V68.4545H159.398V70.668H159.545C159.823 69.9383 160.288 69.3611 160.942 68.9364C161.595 68.5063 162.387 68.2912 163.318 68.2912C164.19 68.2912 164.949 68.4818 165.597 68.8629C166.245 69.2441 166.749 69.7886 167.108 70.4964C167.468 71.1989 167.647 72.0374 167.647 73.0121V81H164.168V73.6328C164.173 72.8651 163.977 72.2661 163.58 71.8359C163.182 71.4003 162.635 71.1825 161.938 71.1825C161.47 71.1825 161.056 71.2833 160.697 71.4847C160.343 71.6862 160.065 71.9802 159.863 72.3668C159.667 72.748 159.567 73.2081 159.561 73.7472ZM173.542 77.3899L173.55 73.2163H174.057L178.075 68.4545H182.069L176.67 74.7599H175.845L173.542 77.3899ZM170.389 81V64.2727H173.869V81H170.389ZM178.23 81L174.539 75.5359L176.858 73.0774L182.306 81H178.23Z" fill="black"/>
<path d="M34.4538 881V864.273H37.9904V878.084H45.1616V881H34.4538ZM53.1066 881.245C51.8379 881.245 50.7407 880.975 49.8151 880.436C48.8949 879.892 48.1843 879.135 47.6833 878.166C47.1824 877.191 46.9319 876.061 46.9319 874.776C46.9319 873.48 47.1824 872.348 47.6833 871.379C48.1843 870.404 48.8949 869.647 49.8151 869.108C50.7407 868.563 51.8379 868.291 53.1066 868.291C54.3753 868.291 55.4698 868.563 56.39 869.108C57.3157 869.647 58.029 870.404 58.5299 871.379C59.0309 872.348 59.2813 873.48 59.2813 874.776C59.2813 876.061 59.0309 877.191 58.5299 878.166C58.029 879.135 57.3157 879.892 56.39 880.436C55.4698 880.975 54.3753 881.245 53.1066 881.245ZM53.123 878.55C53.7001 878.55 54.182 878.386 54.5686 878.06C54.9552 877.728 55.2465 877.276 55.4426 876.704C55.644 876.132 55.7448 875.481 55.7448 874.752C55.7448 874.022 55.644 873.371 55.4426 872.8C55.2465 872.228 54.9552 871.776 54.5686 871.444C54.182 871.112 53.7001 870.946 53.123 870.946C52.5403 870.946 52.0503 871.112 51.6528 871.444C51.2607 871.776 50.964 872.228 50.7625 872.8C50.5665 873.371 50.4685 874.022 50.4685 874.752C50.4685 875.481 50.5665 876.132 50.7625 876.704C50.964 877.276 51.2607 877.728 51.6528 878.06C52.0503 878.386 52.5403 878.55 53.123 878.55ZM63.7041 881L60.29 868.455H63.8103L65.7542 876.884H65.8685L67.8941 868.455H71.349L73.4072 876.835H73.5134L75.4246 868.455H78.9367L75.5308 881H71.8472L69.691 873.11H69.5358L67.3795 881H63.7041ZM86.1957 881.245C84.9052 881.245 83.7944 880.984 82.8633 880.461C81.9376 879.933 81.2243 879.187 80.7234 878.223C80.2224 877.254 79.9719 876.108 79.9719 874.784C79.9719 873.494 80.2224 872.361 80.7234 871.387C81.2243 870.412 81.9295 869.652 82.8388 869.108C83.7536 868.563 84.8262 868.291 86.0568 868.291C86.8845 868.291 87.6549 868.425 88.3683 868.691C89.087 868.953 89.7132 869.348 90.2468 869.876C90.7859 870.404 91.2051 871.068 91.5046 871.869C91.8041 872.664 91.9538 873.595 91.9538 874.662V875.618H81.3604V873.461H88.6786C88.6786 872.96 88.5697 872.517 88.3519 872.13C88.1341 871.743 87.8319 871.441 87.4453 871.223C87.0642 871 86.6204 870.888 86.114 870.888C85.5858 870.888 85.1175 871.011 84.7092 871.256C84.3062 871.496 83.9904 871.82 83.7617 872.228C83.533 872.631 83.416 873.08 83.4105 873.576V875.626C83.4105 876.246 83.5249 876.783 83.7536 877.235C83.9877 877.687 84.3171 878.035 84.7418 878.28C85.1665 878.525 85.6702 878.648 86.2528 878.648C86.6394 878.648 86.9934 878.593 87.3146 878.484C87.6359 878.375 87.9109 878.212 88.1396 877.994C88.3683 877.777 88.5425 877.51 88.6623 877.194L91.8803 877.406C91.717 878.179 91.3821 878.855 90.8757 879.432C90.3748 880.004 89.7268 880.45 88.9318 880.771C88.1423 881.087 87.2302 881.245 86.1957 881.245ZM104.663 872.032L101.477 872.228C101.423 871.956 101.306 871.711 101.126 871.493C100.946 871.27 100.71 871.093 100.415 870.962C100.127 870.826 99.7811 870.758 99.3782 870.758C98.8391 870.758 98.3845 870.872 98.0142 871.101C97.6439 871.324 97.4588 871.624 97.4588 871.999C97.4588 872.299 97.5786 872.552 97.8182 872.759C98.0578 872.966 98.4689 873.132 99.0515 873.257L101.322 873.714C102.542 873.965 103.451 874.368 104.05 874.923C104.649 875.479 104.949 876.208 104.949 877.112C104.949 877.934 104.706 878.656 104.222 879.277C103.742 879.897 103.084 880.382 102.245 880.73C101.412 881.074 100.451 881.245 99.3619 881.245C97.7011 881.245 96.378 880.899 95.3924 880.208C94.4123 879.511 93.8378 878.563 93.669 877.365L97.0913 877.186C97.1947 877.692 97.4452 878.079 97.8427 878.346C98.2402 878.607 98.7493 878.738 99.37 878.738C99.9799 878.738 100.47 878.621 100.84 878.386C101.216 878.147 101.406 877.839 101.412 877.463C101.406 877.148 101.273 876.889 101.012 876.688C100.75 876.481 100.347 876.323 99.8029 876.214L97.6303 875.781C96.4052 875.536 95.4931 875.111 94.8942 874.507C94.3007 873.902 94.0039 873.132 94.0039 872.195C94.0039 871.389 94.2217 870.695 94.6573 870.113C95.0984 869.53 95.7164 869.081 96.5114 868.765C97.3118 868.449 98.2483 868.291 99.321 868.291C100.906 868.291 102.152 868.626 103.062 869.296C103.977 869.966 104.51 870.878 104.663 872.032ZM113.812 868.455V871.068H106.257V868.455H113.812ZM107.973 865.449H111.452V877.145C111.452 877.466 111.501 877.717 111.599 877.896C111.697 878.071 111.833 878.193 112.007 878.264C112.187 878.335 112.394 878.37 112.628 878.37C112.791 878.37 112.955 878.356 113.118 878.329C113.282 878.297 113.407 878.272 113.494 878.256L114.041 880.845C113.867 880.899 113.622 880.962 113.306 881.033C112.99 881.109 112.606 881.155 112.154 881.172C111.316 881.204 110.581 881.093 109.949 880.837C109.323 880.581 108.836 880.183 108.487 879.644C108.139 879.105 107.967 878.424 107.973 877.602V865.449ZM121.468 881V864.273H128.067C129.33 864.273 130.408 864.499 131.301 864.951C132.2 865.397 132.883 866.031 133.351 866.854C133.825 867.67 134.062 868.632 134.062 869.737C134.062 870.848 133.822 871.803 133.343 872.604C132.864 873.399 132.17 874.009 131.26 874.433C130.357 874.858 129.262 875.07 127.977 875.07H123.558V872.228H127.405C128.081 872.228 128.641 872.135 129.088 871.95C129.534 871.765 129.867 871.487 130.084 871.117C130.308 870.747 130.419 870.287 130.419 869.737C130.419 869.181 130.308 868.713 130.084 868.332C129.867 867.951 129.532 867.662 129.08 867.466C128.633 867.265 128.07 867.164 127.389 867.164H125.004V881H121.468ZM130.501 873.388L134.658 881H130.754L126.687 873.388H130.501ZM140.073 881.237C139.273 881.237 138.56 881.098 137.933 880.82C137.307 880.537 136.812 880.121 136.447 879.571C136.088 879.015 135.908 878.324 135.908 877.496C135.908 876.799 136.036 876.214 136.292 875.74C136.548 875.266 136.896 874.885 137.337 874.597C137.778 874.308 138.279 874.09 138.84 873.943C139.406 873.796 140 873.693 140.621 873.633C141.35 873.557 141.938 873.486 142.385 873.42C142.831 873.35 143.155 873.246 143.357 873.11C143.558 872.974 143.659 872.772 143.659 872.506V872.457C143.659 871.939 143.496 871.539 143.169 871.256C142.848 870.973 142.39 870.831 141.797 870.831C141.171 870.831 140.672 870.97 140.302 871.248C139.932 871.52 139.687 871.863 139.567 872.277L136.349 872.016C136.512 871.253 136.834 870.594 137.313 870.039C137.792 869.478 138.41 869.048 139.167 868.749C139.929 868.444 140.811 868.291 141.813 868.291C142.51 868.291 143.177 868.373 143.814 868.536C144.457 868.7 145.026 868.953 145.521 869.296C146.022 869.639 146.417 870.08 146.705 870.619C146.994 871.153 147.138 871.792 147.138 872.538V881H143.839V879.26H143.741C143.539 879.652 143.27 879.998 142.932 880.298C142.594 880.592 142.189 880.823 141.715 880.992C141.241 881.155 140.694 881.237 140.073 881.237ZM141.07 878.836C141.582 878.836 142.034 878.735 142.426 878.533C142.818 878.326 143.125 878.049 143.349 877.7C143.572 877.352 143.683 876.957 143.683 876.516V875.185C143.575 875.255 143.425 875.321 143.234 875.381C143.049 875.435 142.839 875.487 142.605 875.536C142.371 875.579 142.137 875.62 141.903 875.658C141.669 875.691 141.456 875.721 141.266 875.748C140.857 875.808 140.501 875.903 140.196 876.034C139.891 876.165 139.654 876.342 139.485 876.565C139.316 876.783 139.232 877.055 139.232 877.382C139.232 877.855 139.404 878.218 139.747 878.468C140.095 878.713 140.536 878.836 141.07 878.836ZM153.317 873.747V881H149.838V868.455H153.154V870.668H153.301C153.578 869.938 154.044 869.361 154.697 868.936C155.351 868.506 156.143 868.291 157.074 868.291C157.945 868.291 158.705 868.482 159.353 868.863C160.001 869.244 160.505 869.789 160.864 870.496C161.223 871.199 161.403 872.037 161.403 873.012V881H157.924V873.633C157.929 872.865 157.733 872.266 157.336 871.836C156.938 871.4 156.391 871.183 155.694 871.183C155.226 871.183 154.812 871.283 154.452 871.485C154.098 871.686 153.821 871.98 153.619 872.367C153.423 872.748 153.323 873.208 153.317 873.747ZM167.298 877.39L167.306 873.216H167.813L171.831 868.455H175.825L170.426 874.76H169.601L167.298 877.39ZM164.145 881V864.273H167.625V881H164.145ZM171.986 881L168.294 875.536L170.614 873.077L176.062 881H171.986Z" fill="black"/>
</svg>

        </aside>
        <div className="p-4 ml-64 mt-20 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px) ', display: 'flex', flexWrap: 'wrap' }}>
          <div className="p-1 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredStores.map(store => (
              <div key={store.id} style={{ flexBasis: '25%', padding: '6px', textAlign: 'start', position: 'relative' }}>
                <img src={store.image_url} alt={store.name} style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px', minHeight: '210px', minWidth: '280px', objectFit: 'cover' }} />
                <div className="p-3">
                  <p className="text-xl text-black font-semibold hover:text-gray-700">{store.name}</p>
                  <p className="text-gray-700 text-lg hover:text-gray-500">Location: {store.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer className="fixed bottom-0"/>
    </>
  );
}
