const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Анна",
            "id_2": "Елена",
            "id_3": "Мария",
            "id_4": "Ксения",
            "id_5": "Татьяна",
            "id_6": "Дарья",
            "id_7": "Светлана",
            "id_8": "Наталья",
            "id_9": "Ольга",
            "id_10": "Анастасия"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function(gender) {
        const surname = this.randomValue(this.surnameJson);
        return gender === this.GENDER_FEMALE ? surname + 'а' : surname;
    },

    randomBirthday: function() {
        const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        const month = this.randomIntNumber(11, 0);
        let days;

        switch (month) {
            case 1: // Февраль
                days = 28; // Упрощение, без учёта высокосного года
                break;
            case 3: case 5: case 8: case 10: // Месяцы с 30 днями
                days = 30;
                break;
            default: // Все остальные месяцы
                days = 31;
        }

        const day = this.randomIntNumber(days, 1);
        return `${day} ${monthNames[month]}`;
    },

    getPerson: function () {
        const gender = this.randomIntNumber(1) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
        const firstName = this.randomFirstName(gender);
        const surname = this.randomSurname(gender);
        const birthday = this.randomBirthday();

        return {
            gender,
            firstName,
            surname,
            birthday
        };
    }
};
