import { Schema, model, models } from "mongoose";

const EventSchema = new Schema(
    {
        brewery: {
            type: Schema.Types.ObjectId,
            ref: "Brewery",
            required: true,
        },
        event_name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        end_time: {
            type: String,
            required: true,
        },
    },

    {
        timestamps: true,
    }
);

const Event = models.Event || model("Event", EventSchema);
export default Event;