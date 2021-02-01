import { useState, useEffect } from "react";

// component qui va simplement récupérer de la donnée, il n'affiche rien
const Fetch = ({ url, render }) => {
    // pour qu'on stocke la donnée récupérée dans un state, pour pouvoir l'utiliser ailleurs
    const [data, setData] = useState({});

    const fetchData = async() => {
        const response = await fetch(url);
        const parseResponse = await response.json();
        setData(parseResponse);
        console.log(parseResponse);
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    // appelle la fonction render, qui prend en argument data et renvoi le componenent correspond, ici ContactInfo
    // return <ContactInfo data={data} />
    return render(data);
};

export default Fetch;