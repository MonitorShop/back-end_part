const mongoose = require("mongoose");


const MonitorSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true]
        },
        IMGurl:{
            type: String,
            required: [false]
        },
        series:{
            type: String,
            required: [true]
        },
        size:{
            type: Number,
            required: [true]
        },
        resolution:{
            type: String,
            required: [true]
        },
        refresh_rate:{
            type: Number,
            required: [true]
        }
    }
);

const Monitor = mongoose.model("Monitor", MonitorSchema);

module.exports = Monitor;