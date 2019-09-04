import React, { useEffect } from "react";

export const FetSomar = () => { 
        fetch('http://127.0.0.1:5000/somar_api', {
            method: 'POST',
            mode: "no-cors",
            cache:"no-cache",
            headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify({
                "cidade": "RiodeJaneiro-RJ", 
                "diasprevisao": "7"
            })
        }).then(response => console.log(response)).catch(error => console.log(error));

        return <h1>Teste</h1>;

        
};


// funcionando
//function FetSomar(){ 
//    useEffect (() => {
//        fetch("http://127.0.0.1:5000/somar_api", {
//            method: "post",
//            mode: "no-cors",
//            cache:"no-cache",
//            headers: {
//                "Accept": "application/json", "Content-Type": "application/json"}, 
//            body: JSON.stringify({
//                "cidade": RiodeJaneiro-RJ, 
//                "diasdeprevisa": 7
//            })
//        }).then(function(res){ console.log(res)}
//        );
//    }, []);
//
//    return <h1>Teste</h1>;
//};

// export default FetSomar;

//          fetch("/somar_Api").then(response =>
//            response.json().then(data=> {
//                console.log(data);
//            })
//useEffect (() => {
//   fetch("http://127.0.0.1:5000/api_somar", {
//        method: "POST",
//        mode: 'no-cors',
//        cache:'no-cache',
//        headers: {
//            'Accept': 'application/json', 'Content-Type': 'application/json'}, 
//        body: JSON.stringify({
//            cidade: "RiodeJaneiro-RJ", 
//            diasdeprevisao: "7"
//        })
//    }).then(function(res){ console.log(res)}
//    );
//}, []);