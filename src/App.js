import ImageCard from "./components/ImageCard";
import "./style.css";

function App() {
    const images = [
        {
            id: 1,
            title: "Mountain",
            description: "Experience the beauty of majestic mountains.",
            image:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
        },

        {
            id: 2,
            title: "Beach",
            description: "Relax and enjoy breathtaking beach views.",
            image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
        },

        {
            id: 3,
            title: "Forest",
            description: "Explore peaceful and green forest landscapes.",
            image:
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
        },

        {
            id: 4,
            title: "City",
            description: "Discover beautiful city skylines around the world.",
            image:
                "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600",
        },

        {
            id: 5,
            title: "Waterfall",
            description: "Witness the mesmerizing beauty of waterfalls.",
            image:
                "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600",
        },

        {
            id: 6,
            title: "Sunset",
            description: "Enjoy colorful sunsets and unforgettable moments.",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
        },

        {
            id: 7,
            title: "Northern Lights",
            description:
                "Witness the magical beauty of the Aurora Borealis lighting up the night sky.",
            image:
                "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=600",
        },

        {
            id: 8,
            title: "Desert",
            description:
                "Explore the golden sand dunes and experience the serenity of the vast desert.",
            image:
                "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600",
        },
    ];

    return (
        <>
            <div className="hero">
                <h1>Image Gallery</h1>

                <p>
                    Explore beautiful places from around the world.
                </p>
            </div>

            <div className="gallery">
                {images.map((item) => (
                    <ImageCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </>
    );
}

export default App;