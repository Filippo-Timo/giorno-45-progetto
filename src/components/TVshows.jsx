import { Container, Row, Col, Spinner } from 'react-bootstrap';
import MyGallery from './MyGalley';

const TVshows = () => {

    return (
        <>
            <MyGallery movieTitle="The walking dead" sectionTitle="Most viewed" />
            <MyGallery movieTitle="Friends" sectionTitle="Family series" />
            <MyGallery movieTitle="Stranger things" sectionTitle="New titles" />
        </>
    )
}

export default TVshows