const base_url = 'http://localhost:8080/'


const createBloodPressure = async (values) => {
    let response;
    try {
        response = await fetch(`${base_url}api/bloodPressure`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: values.userId,
                systolic: values.systolic,
                diastolic: values.diastolic,
                pulse: values.pulse,
                note: values.note,
            }),
        });
        return response;

    } catch (e) {
        return e;
    }
}

const getAllBloodPressures = async (userId) => {
    let response;
    try {
        response = await fetch(`${base_url}api/bloodPressure`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "userId": userId
            },

        });
        return response;
    } catch (e) {
        return e;
    }
}

const getAllBloodSugars = async (userId) => {
    let response;
    try {
        response = await fetch(`${base_url}api/bloodSugar`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "user": userId
            },

        });
        return response;
    } catch (e) {
        return e;
    }
}


const createBloodSugar = async (values) => {
    let response;
    try {
        response = await fetch(`${base_url}api/bloodSugar`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: values.userId,
                glucoseLevel: values.glucoseLevel,
                fasting: values.fasting,
                mealTime: values.mealTime,
                date: values.date,
                note: values.date,
            }),
        });
        return response;

    } catch (e) {
        return e;
    }
}


const createWeightBMI = async (values) => {
    let response;
    try {
        response = await fetch(`${base_url}api/weightBMI`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: values.userId,
                weight: values.weight,
                bmi: values.bmi,
                date: values.date,
                note: values.date,
            }),
        });
        return response;

    } catch (e) {
        return e;
    }
}


const getAllWeightBMI = async (userId) => {
    let response;
    try {
        response = await fetch(`${base_url}api/weightBMI`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "user": userId
            },

        });
        return response;
    } catch (e) {
        return e;
    }
}

const activitiesServices = {
    createBloodPressure,
    getAllBloodPressures,
    createBloodSugar,
    getAllBloodSugars,
    createWeightBMI,
    getAllWeightBMI
};
export default activitiesServices