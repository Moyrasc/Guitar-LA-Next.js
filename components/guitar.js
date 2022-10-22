import Image from "next/future/image";

const Guitar = ({guitar}) => {

    const {description, image, name, price, url} = guitar

    return ( 

        <div>
            {/* formats para no mostrar la img en alta resolución */}
            <Image src={image.data.attributes.formats.medium.url} alt={`photo-guitar ${name}`} width={600} height={400}/>
        </div>
    );
}

export default Guitar;