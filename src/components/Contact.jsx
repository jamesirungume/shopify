<h1 className="text-white text-3xl font-bold ml-10 font-montserrat">
  Shopify +
  <div className="fixed top-0 bottom-0 left-0 flex justify-start">
                
                <svg width="80%" height="100%" viewBox="-12.5 -15.5 42.90 29.80"  xmlns="http://www.w3.org/2000/svg" transform="rotate(90)matrix(1, 0, 0, 1, 0, 0)" stroke="#000000">
                    
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"/>
                    <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 11h10v2H7v3l-6-4 6-4v3zm10-3 6 4-6 4V8z" fill="#000000"/>
                    </g>
                </svg>
            </div>

            {/* Render filtered stores */}
            <div className='p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700' style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '80%', margin: '20px auto' }}>
            {storesData.stores.map(store => (
              <div key={store.id} style={{ flexBasis: '25%', padding: '6px', textAlign: 'start', position: 'relative' }}>
                <img src={store.image_url} alt={store.name} style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px', minHeight: '210px', minWidth: '280px', objectFit: 'cover' }} />
               
                <div className="p-3">
                  <p className="text-xl text-black font-semibold hover:text-gray-700">{store.name}</p>
                  <p className="text-gray-700 text-lg hover:text-gray-500">Location: {store.location}</p>
                  
                  
                 
                </div>
              </div>
            ))}
          </div>
</h1>
