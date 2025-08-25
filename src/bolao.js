import {useEffect, useState} from "react";

function Bolao() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // fetch('http://127.0.0.1:8000/api/index/')
        fetch('https://bolao-68c4.onrender.com/api/index/')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return <h1>{message}</h1>;
}

export default Bolao;