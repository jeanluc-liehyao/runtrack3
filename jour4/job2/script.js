function jsonValueKey(jsonstring, key) {
            const obj = JSON.parse(jsonstring);
            return obj[key];
        }

        const jsonString = `{
            "name": "La Plateforme_",
            "address": "8 rue d'hozier",
            "city": "Marseille",
            "nb_staff": "11",
            "creation": "2019"
        }`;

        const value = jsonValueKey(jsonString, "city");
        console.log(value);

        document.getElementById("result").textContent = value;