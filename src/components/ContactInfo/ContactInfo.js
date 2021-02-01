const ContactInfo = ({ data }) => {
    return (
        <>
            <p>Je m'appelle {data.name}</p>
            <p>et mon adresse mail est {data.email}</p>
        </>

    );
};

export default ContactInfo;