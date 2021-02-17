import mongoose from 'mongoose'

const CarsSchema = mongoose.Schema({
    Name: String,
    Model: String,
    Price: String,
    meta: {
        Fuel_Type: String,
        Mileage: String,
        Seating_Capacity: Number
    },
});

export default mongoose.model("Cars",CarsSchema);
