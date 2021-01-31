// ICONS
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

const PharmacyCard = ({ pharmacy}) =>  {
    return (
        <div className="my-4 border-bottom">
            <a 
                href={pharmacy.location}
                target="_blank"
                className="secondary-color d-flex align-items-center">
                {pharmacy.name}
                <span className="ml-8">
                    <LocationOnIcon/>
                </span>
            </a>
            <p>{pharmacy.address}</p>
            <p className="d-flex align-items-center">
                <span className="mr-8"><PhoneIcon /></span>
                {pharmacy.phone}
            </p>
        </div>
    );
};

export default PharmacyCard;