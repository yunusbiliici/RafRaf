import React from 'react';
import { useNavigate } from 'react-router-dom';

const KitapCard = ({ kitap }) => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-between p-3 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out w-72'>
            <img
                onClick={() => {
                    navigate(`/kitaplar/${kitap.id}`);
                    scrollTo(0, 0);
                }}
                src={kitap.gorseller[0]}
                alt={kitap.ad}
                className='rounded-lg h-52 w-full object-cover object-center cursor-pointer shadow-md'
            />
            <p className='font-semibold mt-3 text-white text-lg truncate'>{kitap.ad}</p>
            <p className='text-sm text-gray-300 mt-1 italic'>{kitap.yazar}</p>
            <p className='text-sm text-gray-400 mt-1 truncate'>{kitap.aciklama}</p>

            <div className='flex items-center justify-between mt-4 pb-1'>
                <button
                    onClick={() => {
                        navigate(`/kitaplar/${kitap.id}`);
                        scrollTo(0, 0);
                    }}
                    className='px-5 py-2 text-sm bg-indigo-500 text-white hover:bg-indigo-400 transition rounded-full font-semibold shadow-md'
                >
                    İncele
                </button>
                <span className='flex items-center gap-1 text-sm text-yellow-400 mt-1 pr-1'>
                    ⭐ {kitap.puan}
                </span>
            </div>
        </div>
    );
};

export default KitapCard;
