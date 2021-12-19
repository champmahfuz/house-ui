import React from 'react';

import home1 from '../../../images/gallary/house1.jpg'
import home2 from '../../../images/gallary/house2.jpg'
import home3 from '../../../images/gallary/house3.jpg'
import home4 from '../../../images/gallary/house4.jpg'
import home5 from '../../../images/gallary/house5.jpg'
import home6 from '../../../images/gallary/house6.jpg'
import Album from '../Album/Album';

const albums = [
    {
        img: home1,
        name: 'Rupayan',

    },
    {
        img: home2,
        name: 'Sheltech',

    },
    {
        img: home3,
        name: 'Smart Home',

    },
    {
        img: home4,
        name: 'Eastern Group',

    },
    {
        img: home5,
        name: 'New Plaza',

    },
    {
        img: home6,
        name: 'Modern Housing',

    }

]


const Albums = () => {
    return (
        <div className="container">
            <h2 className="text-primary">Galarry</h2>
            <div className="row">
                {
                    albums.map(album => <Album
                        key={album.name}
                        album={album}
                    >
                    </Album>)
                }
            </div>
        </div>
    );
};

export default Albums;