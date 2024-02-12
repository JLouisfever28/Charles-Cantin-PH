import React from "react"
import "../Styles/galerie.css"

const images = [
    { id: 1, category: 'Mariage', image: 'https://picsum.photos/id/1/300/200' },
    { id: 2, category: 'Grossesse', image: 'https://picsum.photos/id/20/300/200' },
    { id: 3, category: 'Bébé', image: 'https://picsum.photos/id/30/300/200' },
    { id: 4, category: 'Famille', image: 'https://picsum.photos/id/40/300/200' },
    { id: 5, category: 'Baptême', image: 'https://picsum.photos/id/50/300/200' },
    { id: 6, category: 'Couple', image: 'https://picsum.photos/id/60/300/200' },
    { id: 7, category: 'Mariage', image: 'https://picsum.photos/id/70/300/200' },
    { id: 8, category: 'Grossesse', image: 'https://picsum.photos/id/80/300/200' },
    { id: 9, category: 'Bébé', image: 'https://picsum.photos/id/90/300/200' },
    { id: 10, category: 'Famille', image: 'https://picsum.photos/id/1000/300/200' },
    { id: 11, category: 'Baptême', image: 'https://picsum.photos/id/100/300/200' },
    { id: 12, category: 'Couple', image: 'https://picsum.photos/id/110/300/200' },
    { id: 13, category: 'Mariage', image: 'https://picsum.photos/id/120/300/200' },
    { id: 14, category: 'Grossesse', image: 'https://picsum.photos/id/130/300/200' },
    { id: 15, category: 'Bébé', image: 'https://picsum.photos/id/140/300/200' },
    { id: 16, category: 'Famille', image: 'https://picsum.photos/id/2/300/200' },
    { id: 17, category: 'Baptême', image: 'https://picsum.photos/id/160/300/200' },
    { id: 18, category: 'Couple', image: 'https://picsum.photos/id/170/300/200' },
    { id: 19, category: 'Mariage', image: 'https://picsum.photos/id/180/300/200' },
    { id: 20, category: 'Baptême', image: 'https://picsum.photos/id/190/300/200' },
    { id: 21, category: 'Grossesse', image: 'https://picsum.photos/id/200/300/200' },
    { id: 22, category: 'Bébé', image: 'https://picsum.photos/id/210/300/200' },
    { id: 23, category: 'Famille', image: 'https://picsum.photos/id/220/300/200' },
    { id: 24, category: 'Couple', image: 'https://picsum.photos/id/230/300/200' },
]

const tags = [
    { id: 'all', name: 'All' },
    { id: 'Mariage', name: 'Mariage' },
    { id: 'Bébé', name: 'Bébé' },
    { id: 'Famille', name: 'Famille' },
    { id: 'Baptême', name: 'Baptême' },
    { id: 'Grossesse', name: 'Grossesse' },
    { id: 'Couple', name: 'Couple' },
]

function Galerie() {

    const [tag, setTag] = React.useState('all');

    const filteredImages = tag === 'all' ? images : images.filter(image => image.category === tag);
    return (
        <div className="galerie">
            <h1>Galerie</h1>
            <div className="filter-container">
                {tags.map(tag => (
                    <button key={tag.id} onClick={() => setTag(tag.id)}>{tag.name}</button>
                ))}
            </div>
            <div className="images-container">
                {filteredImages.map(image => (
                    <img key={image.id} src={image.image} alt={image.category} />
                ))}
            </div>
        </div>
    );
}

export default Galerie;