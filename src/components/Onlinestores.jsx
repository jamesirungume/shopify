import { useEffect,useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import { storesData } from './FakeData2';
import arrow from './Images/arrow.jpg';

export default function OnlineStores() {
    useEffect(() => {
        // Disable scrolling on the body
        document.body.style.overflow = 'hidden';
    
        // Re-enable scrolling when component unmounts
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, []);

    const [searchInput, setSearchInput] = useState('');
    const [filteredStores, setFilteredStores] = useState(storesData.stores);
    
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
           <Navbar/>
            <div className="flex justify-center relative top-24">
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
    <div className="overflow-hidden mt-16">
        <aside id="sidebar-multi-level-sidebar" className="fixed top-0 bottom-0 left-0 z-40 w-64 h-full bg-gray-50 dark:bg-gray-800 overflow-y-auto mt-6 flex items-center justify-center">
        
        <svg className="" width="244" height="750" viewBox="0 0 244 900" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M92.0333 731.25V168.75H158.967V731.25H251L125.5 900L0 731.25H92.0333ZM125.5 0L251 168.75H0L125.5 0Z" fill="black"/>
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
            
            
        </>
    );
}
