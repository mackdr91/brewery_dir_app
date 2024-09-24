import { Schema, model, models } from "mongoose";

const BrewerySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contact_email: {
      type: String,
      required: true,
    },
    contact_phone: {
      type: String,
      required: true,
    },
    hours: {
      type: String,
      required: true,
    },
    typesOfBeer: [
      {
        type: String,
        required: true,
      },
    ],
    website: {
      type: String,
      required: true,
    },
    isfeatured: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
  },

  {
    timestamps: true,
  }
);

const Brewery = models.Brewery || model("Brewery", BrewerySchema);
export default Brewery;
